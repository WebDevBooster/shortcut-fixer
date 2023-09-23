document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'v') {
        // Allow the default paste behavior
        e.stopImmediatePropagation();  // Stops other listeners from receiving this event
    }
}, true);  // Use capturing phase to catch the event early
