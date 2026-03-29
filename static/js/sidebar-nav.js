/**
 * Olde Tool Workshop — Sidebar Nav
 * Handles open/close for the left drawer navigation
 */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var toggle   = document.getElementById('otw-sidebar-toggle');
        var sidebar  = document.getElementById('otw-sidebar');
        var overlay  = document.getElementById('otw-sidebar-overlay');
        var closeBtn = document.getElementById('otw-sidebar-close');

        if (!toggle || !sidebar || !overlay) return;

        function openSidebar() {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            document.body.classList.add('otw-sidebar-open');
            toggle.setAttribute('aria-expanded', 'true');
            sidebar.setAttribute('aria-hidden', 'false');
            closeBtn && closeBtn.focus();
        }

        function closeSidebar() {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.classList.remove('otw-sidebar-open');
            toggle.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            toggle.focus();
        }

        // Toggle on hamburger click
        toggle.addEventListener('click', function () {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        // Close on overlay click
        overlay.addEventListener('click', closeSidebar);

        // Close on close button click
        closeBtn && closeBtn.addEventListener('click', closeSidebar);

        // Close on ESC key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });

        // Close when a nav link is clicked (useful on mobile)
        var navLinks = sidebar.querySelectorAll('.otw-sidebar-nav a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeSidebar();
            });
        });
    });
}());
