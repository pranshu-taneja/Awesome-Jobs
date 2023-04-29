import { ReactElement, useState } from "react";

export default function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  function prev() {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  }

//   function goto(index: number) {
//     setCurrentStepIndex(index);
//   }

  return {
    currentStepIndex,
    next,
    prev,
    // goto,
    step: steps[currentStepIndex],
    NofSteps: steps.length,
    isFirstStep : currentStepIndex === 0,
    isLastStep : currentStepIndex === steps.length-1,
  };
}
