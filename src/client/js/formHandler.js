function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (Client.checkForURL(formText)) {
        const PostData = async (url = '', data = {}) => {
            console.log(data);
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            try {
                const newData = await response.json();
                document.getElementById('results').innerHTML =
                 `<div>Her is your results\:</div><div>Text: ${newData.text}</div><div>polarity: ${newData.polarity}</div><div>subjectivity: ${newData.subjectivity}</div>`;
                return newData
            } catch (error) {
                console.log("error", error);
            }
        };

        PostData('http://localhost:8081/all', { url: formText })
    }
}
export { handleSubmit }
