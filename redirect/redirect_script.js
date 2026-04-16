// Redirect routes used by redirect.html
const redirects = {
    linkedin: 'https://www.linkedin.com/in/vivek-senthil-150101174/',
    github: 'https://github.com/viveksenthil3',
    portfolio: '/'
};

function handleRedirect() {
    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get('to');

    if (redirectTo && redirects[redirectTo.toLowerCase()]) {
        window.location.href = redirects[redirectTo.toLowerCase()];
    } else {
        window.location.href = redirects['portfolio']; // Default redirect
    }
}

function showError(message) {
    document.getElementById('message').style.display = 'none';
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = 'X ' + message;
    errorDiv.style.display = 'block';
}

function showAvailableLinks() {
    const linksDiv = document.getElementById('links');
    linksDiv.innerHTML = '<p><strong>Available routes:</strong></p>';

    for (const key of Object.keys(redirects)) {
        const link = document.createElement('a');
        link.href = '?to=' + key;
        link.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        linksDiv.appendChild(link);
    }

    linksDiv.style.display = 'block';
}

handleRedirect();
