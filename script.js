document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('query').value;
    const resultsDiv = document.getElementById('results');

    // Call the API (replace 'YOUR_API_ENDPOINT' and 'YOUR_API_KEY')
    const response = await fetch(`YOUR_API_ENDPOINT?query=${encodeURIComponent(query)}`, {
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
        }
    });
    const data = await response.json();

    // Display the result
    resultsDiv.innerHTML = data.answer || "Sorry, I couldn't find an answer.";
});
