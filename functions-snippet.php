<?php
// Add this to your theme's functions.php

function enqueue_sql_generator_assets() {
  if (is_page_template('page-sql-generator.php')) {
    wp_enqueue_style('sql-gen-style', get_template_directory_uri() . '/sql-generator/styles.css', [], '1.0');
    wp_enqueue_script('sql-gen-script', get_template_directory_uri() . '/sql-generator/generator.js', [], '1.0', true);
  }
}
add_action('wp_enqueue_scripts', 'enqueue_sql_generator_assets');
