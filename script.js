// Redirection mapping 
const redirects = {
    linkedin: 'https://www.linkedin.com/in/vivek-senthil-150101174/',
    github: 'https://github.com/viveksenthil3',
    portfolio: 'https://viveksenthil.dev/'
};

// Handle redirects on page load
function handleRedirects() {
    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get('to');

    if (redirectTo && redirects[redirectTo.toLowerCase()]) {
        // Redirect to the mapped URL
        window.location.href = redirects[redirectTo.toLowerCase()];
    } else {
        // If no valid redirect parameter, redirect to portfolio by default
        window.location.href = redirects['portfolio'];
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', handleRedirects);
