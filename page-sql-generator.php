<?php
/**
 * Template Name: FiveM SQL Generator
 * Template Post Type: page
 */
get_header();
?>

<main id="primary" class="site-main">
  <section class="sql-generator">
    <div class="container">
      <h1>FiveM Job SQL Generator</h1>
      <p>Build and export SQL inserts for jobs and job grades for ESX or QBCore.</p>

      <?php include get_template_directory() . '/sql-generator/form.php'; ?>
    </div>
  </section>
</main>

<?php get_footer(); ?>

