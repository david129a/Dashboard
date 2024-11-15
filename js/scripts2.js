/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Function to toggle the top navbar dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
document.getElementById('dropdownMenuButton').addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show'); // Toggle visibility of the dropdown
    event.stopPropagation(); // Prevent event from bubbling up and closing dropdown immediately
  });
// Close the dropdown if clicking outside of it
document.addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    var dropdownButton = document.getElementById('dropdownMenuButton');
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show'); // Hide the dropdown if clicking outside
    }
  });

// Function to toggle the sidebar submenu
function toggleSubMenu() {
    const subMenu = document.querySelector('.sub-menu');
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}
