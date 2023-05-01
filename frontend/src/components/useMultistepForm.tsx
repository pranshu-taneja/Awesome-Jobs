import { ReactElement, useState } from "react";


// Defining the return type of the custom hook
type MultistepFormReturnType = {
  currentStepIndex: number,
  next: () => void,
  step: ReactElement,
  isLastStep: boolean,
}


// Defining a custom hook that takes an array of React elements as input
export default function useMultistepForm(steps: ReactElement[]): MultistepFormReturnType {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);


  
  //handle next and previous button clicks
  const next = (): void => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }

  //Returning the required entities
  return {
    currentStepIndex,
    next,
    step: steps[currentStepIndex],
    isLastStep : currentStepIndex === steps.length-1,
  };
}
