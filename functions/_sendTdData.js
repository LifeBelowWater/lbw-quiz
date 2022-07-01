export default function sendTdData(question, answer) {
    fetch('https://8455-141-22-50-46.eu.ngrok.io/api/v1.0/answers_' + String(question + 1) + '_' + String(answer), {
      method: 'GET',
    })
    .then(response => response)
    .catch((error) => {
      console.error('Error', error);
    });
};