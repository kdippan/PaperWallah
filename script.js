document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('subject-grid');
    const searchInput = document.getElementById('searchInput');
    let subjectsData = [];

    // Fetch the data from your JSON file
    // Using absolute path "/" since Vercel cleanUrls drops extensions
    fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            subjectsData = data;
            renderCards(subjectsData);
        })
        .catch(error => {
            console.error('Error loading PYQ data:', error);
            if (grid) {
                grid.innerHTML = '<p style="text-align:center; width: 100%;">Failed to load subjects. Please try again later.</p>';
            }
        });

    // Render Cards Function
    function renderCards(data) {
        if (!grid) return;
        grid.innerHTML = '';
        
        data.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Generate Links HTML with SEO-injected titles for long-tail keywords
            let linksHTML = sub.urls.map(suffix => {
                const url = `http://sscoaching.in//papers/12th/${sub.code}-${sub.name.toLowerCase().replace(' ', '-')}-${suffix}.pdf`;
                const label = suffix.replace('-', ' ').toUpperCase();
                
                // SEO: Dynamically generating highly specific long-tail keywords for search bots
                const seoKeywordString = `Download NIOS ${sub.code} ${sub.name} PYQ Question Paper ${label} PDF`;
                
                return `
                    <a href="${url}" target="_blank" class="dl-link" title="${seoKeywordString}" aria-label="${seoKeywordString}" rel="nofollow">
                        ${label} <i data-lucide="download" style="width: 16px; height: 16px;"></i>
                    </a>
                `;
            }).join('');

            card.innerHTML = `
                <h3><i data-lucide="folder-open"></i> ${sub.name} (${sub.code})</h3>
                <div class="card-links">
                    ${linksHTML}
                </div>
            `;
            grid.appendChild(card);
        });
        
        // Initialize icons for newly added elements
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Search Filter Logic
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = subjectsData.filter(sub => 
                sub.name.toLowerCase().includes(term) || sub.code.includes(term)
            );
            renderCards(filtered);
        });
    }

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.setAttribute('data-lucide', 'chevron-down');
            } else {
                // Close all other open accordions
                document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
                document.querySelectorAll('.faq-question i').forEach(i => i.setAttribute('data-lucide', 'chevron-down'));
                
                // Open the clicked accordion
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.setAttribute('data-lucide', 'chevron-up');
            }
            
            // Re-render the up/down chevron
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });
});
