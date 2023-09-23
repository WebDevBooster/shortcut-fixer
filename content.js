document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'v' || e.key === 'k') {  // 'k' is because in my non-standard keyboard layout my CTRL+V gives a key of 'k'
        // Allow the default paste behavior
        e.stopImmediatePropagation();  // Stops other listeners from receiving this event
    }
}, true);  // Use capturing phase to catch the event early
