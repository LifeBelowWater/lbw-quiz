import * as RootNavigation from '../components/RootNavigation';

export default async function getTdData(selectedAnswer) {
    try {
      const response = await fetch('https://d847-2003-e3-b701-7703-ac50-89d7-d86c-710e.eu.ngrok.io/api/v1.0/question_and_phase');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();

      if (data.phase == 1) {
        RootNavigation.push('Quiz', {
          index: data.question-1,
          timerCount: data.ms_to_phase_end,
          initialBtnState: false,
          phase: data.phase
        });
      } else if (data.phase == 2) {
        RootNavigation.push('Infos', {
          index: data.question-1,
          answer: selectedAnswer,
          timerCount: data.ms_to_phase_end,
          phase: data.phase
        });
      }
    }
    catch(error) {
      console.error(`Could not get Data: ${error}`);
    }
};    