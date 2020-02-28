<?php

declare(strict_types=1);

// Register plugin helpers.
require get_theme_file_path('includes/plugins/plate.php');

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Custom project post type
function create_post_project()
{
  register_post_type('project',
    array(
      'labels'          => array(
        'name'          => __('Projets'),
        'singular_name' => __('Projet'),
        'add_new_item'  => __('Ajouter un nouveau projet'),
        'edit_item'     => __('Modifier un projet'),
        'search_items'  => __('Rechercher un projet'),
        'all_items'     => __('Tous les projets'),
        'view_items'    => __('Voir les projets'),
        'view_item'     => __('Voir le projet'),
      ),
      'public'          => true,
      'has_archive'     => true,
      'show_in_rest'    => true,
      'rewrite'         => array('slug' => 'project'),
      'taxonomies'      => ['project-category'],
      'capability_type' => 'page',
      'menu_icon'       => 'dashicons-editor-code',
    )
  );
  register_taxonomy( 'project-category', 'project', array (
    'hierarchical' => true,
    'label' => __('Catégorie projet'),
  ));
}
add_action('init', 'create_post_project');

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('style', get_theme_file_uri() . '/assets/styles/app.css');
    wp_register_script('script', get_theme_file_uri() . '/assets/scripts/app.js', '', '', true);
    wp_enqueue_script('script');

});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);
