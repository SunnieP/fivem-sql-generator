# FiveM SQL Generator for WordPress

As a FiveM server manager and developer, I got tired of writing SQL by hand every time I added a new job or restructured my job grades. This tool was built out of that frustration, to speed up development and reduce mistakes.

I chose to build it as a custom WordPress page template so it could live inside my own dev site and portfolio. I styled the UI to match my vibe, dark, clean, and slightly edgy while keeping it lightweight for in-game server devs who just want to get in and get out.

---

## 🚀 Features

- ✅ Generate SQL for `jobs`, `job_grades`, and `addon_account` tables
- ✅ Supports both ESX and QBCore frameworks
- ✅ Whitelist toggle
- ✅ Preloaded grade presets (1, 2, 3, 4, and 5-rank structures)
- ✅ Copy-to-clipboard functionality with fallback
- ✅ Fully responsive layout, tested on Chrome and Opera

---

## 📂 Folder Structure

```
fivem-sql-generator/
├── functions-snippet.php        # Enqueues only on the page template
├── page-sql-generator.php       # Custom WP template
└── sql-generator/
    ├── form.php
    ├── generator.js
    └── styles.css
```

---

## ⚙️ Installation

1. Drop `page-sql-generator.php` into your active WordPress theme.
2. Create a `/sql-generator/` folder in the theme and add:
   - `form.php`
   - `generator.js`
   - `styles.css`
3. In `functions.php`, enqueue your assets like this:

```php
function enqueue_sql_generator_assets() {
  if (is_page_template('page-sql-generator.php')) {
    wp_enqueue_style('sql-gen-style', get_template_directory_uri() . '/sql-generator/styles.css', [], '1.0');
    wp_enqueue_script('sql-gen-script', get_template_directory_uri() . '/sql-generator/generator.js', [], '1.0', true);
  }
}
add_action('wp_enqueue_scripts', 'enqueue_sql_generator_assets');
```

4. Create a new WordPress page, assign it the **“FiveM SQL Generator”** template.
5. Visit the live page and build SQL like a boss.

---

## 🔗 Live Demo

> https://thehustl.shop/fivem-sql-generator/ (hosted on EasyWP)

---

## 🛠 Tech Stack

- WordPress (Classic Theme PHP)
- Vanilla JS (no libraries)
- HTML/CSS (custom dark styling)
- Clipboard API (with execCommand fallback)

---

## 🧠 What I’d Improve

- Add localStorage saving for job + grades
- Refactor as a WordPress plugin or shortcode
- Option to export as `.sql` file
- Validation/warnings for duplicate grade levels or missing values

---

## 🙋🏾‍♀️ Why I Built It

This started as a developer scratch-my-own-itch kind of tool. Then I realized; if I'm tired of typing SQL by hand, other FiveM devs probably are too. This version is the first public release, and it’s been tested live with server team members already.

---

## 📄 License

MIT — build on it, remix it, improve it.

---

Built with ❤️ and a few browser-induced headaches by [Sunnie P](https://github.com/SunnieP)
