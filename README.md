# 📚 PaperWallah

A clean, incredibly fast, and SEO-optimized static website built to help students easily download National Institute of Open Schooling (NIOS) Class 12 Previous Year Question Papers (PYQs).

**Live Website:** [https://niospyqs.vercel.app/](https://niospyqs.vercel.app/)

## ✨ Features
* **Lightning Fast:** Built with pure HTML, CSS, and Vanilla JavaScript. No heavy frameworks.
* **AdSense Ready:** Includes mandatory legal pages (Privacy Policy, Terms, Disclaimer), contact forms, and structured text to meet Google AdSense approval criteria.
* **SEO Optimized:** Fully responsive, semantic HTML, meta tags, Open Graph tags, and JSON-LD FAQ schema.
* **Dynamic Data:** Uses a simple `data.json` file for the database. No complex backend or scraping required.
* **Brand UI:** Custom color palette with scalable SVG icons.

## 🛠️ Tech Stack
* HTML5
* CSS3 (Custom Variables, Flexbox/Grid)
* Vanilla JavaScript (Fetch API)
* [Lucide Icons](https://lucide.dev/)
* Deployed on [Vercel](https://vercel.com)

## 🔄 How to Add New Papers
To update the website with new question papers, you don't need to touch the HTML. 
1. Open `data.json` in this repository.
2. Locate the subject you want to update.
3. Add the new URL suffix (e.g., `"oct-2025"`) to the `"urls"` array.
4. Commit the changes. Vercel will automatically trigger a new build and update the live site instantly.
