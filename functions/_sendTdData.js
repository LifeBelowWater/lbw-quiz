export default function sendTdData(question, answer) {
    fetch('https://d192-2003-e3-b701-7711-a022-47bd-76be-2175.eu.ngrok.io/api/v1.0/answers_' + String(question + 1) + '_' + String(answer), {
      method: 'GET',
    })
    .then(response => response)
    .catch((error) => {
      console.error('Error', error);
    });
};