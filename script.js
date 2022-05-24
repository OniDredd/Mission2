function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    let theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'dark.css') {
        theme.setAttribute('href', 'light.css');
    } else {
        theme.setAttribute('href', 'dark.css');
    }
}