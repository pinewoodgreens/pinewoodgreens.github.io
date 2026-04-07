// Bootstrap 3 hover-dropdown + keyboard accessibility addon
// - Opens dropdown menus on mouse hover for desktop viewports.
// - Adds Enter/Space/Escape keyboard support for .dropdown-toggle (A11Y-01, WCAG SC 2.1.1).
// On mobile (< 768px) Bootstrap's built-in click behavior is used for hover.
(function ($) {
  $(document).ready(function () {
    if ($(window).width() >= 768) {
      $('.navbar-nav .dropdown').hover(
        function () {
          $(this).find('> .dropdown-menu').stop(true, true).show();
          $(this).addClass('open');
        },
        function () {
          $(this).find('> .dropdown-menu').stop(true, true).hide();
          $(this).removeClass('open');
        }
      );
    }

    // A11Y-01: Keyboard accessibility for .dropdown-toggle
    // Drives Bootstrap's own click handler via trigger('click') so .open class
    // and aria-expanded are managed by Bootstrap's dropdown.js.
    $(document).on('keydown', '.dropdown-toggle', function (e) {
      var $toggle = $(this);
      var $parent = $toggle.closest('.dropdown');
      var isOpen  = $parent.hasClass('open');

      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        $toggle.trigger('click');
        var nowOpen = $parent.hasClass('open');
        $toggle.attr('aria-expanded', String(nowOpen));
        return;
      }

      if (e.key === 'Escape' || e.key === 'Esc') {
        if (isOpen) {
          e.preventDefault();
          $toggle.trigger('click');
          $toggle.attr('aria-expanded', 'false');
          $toggle.focus();
        }
      }
    });
  });
}(jQuery));
