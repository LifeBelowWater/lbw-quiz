export default function sendTdData(question, answer) {
    fetch('https://d847-2003-e3-b701-7703-ac50-89d7-d86c-710e.eu.ngrok.io/api/v1.0/answers_' + String(question + 1) + '_' + String(answer), {
      method: 'GET',
    })
    .then(response => response)
    .catch((error) => {
      console.error('Error', error);
    });
};