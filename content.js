// Some websites/web apps are fucking around with my custom keyboard mappings.
// First, the ChatGPT website started reloading their site
// when I was using the CTRL+V shortcut to paste the contents of my clipboard.
// And now Google Sheets started interpreting CTRL+C as CTRL+J.
// How fucking retarded does one have to be to fuck around with the user's keyboard?
// This little extension is designed to tell those retards to fuck off
// and to restore the default/expected functionality for CTRL+V and CTRL+C shortcuts.
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'v' || e.key === 'k') {  // 'k' is because in my non-standard keyboard layout the V key gives a key of 'K' (the ChatGPT site started interpreting CTRL+V as a page reload command instead pasting the contents of the clipboard.
        e.stopImmediatePropagation();  // Stops other listeners from receiving this event
    }
    if (e.ctrlKey && e.key === 'c' || e.key === 'j') {  // 'j' is because in my non-standard keyboard layout the C key gives a key of 'J' and Google Sheets started fucking around with that and started interpreting CTRL+C as CTRL+J.
        e.stopImmediatePropagation();  // Stops other listeners from receiving this event
    }
}, true);  // Use capturing phase to catch the event early
