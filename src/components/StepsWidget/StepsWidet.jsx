import { useState } from "react";
import { StepsForm } from "./StepsForm/StepsForm";
import { StepsTable } from "./StepsTable/StepsTable";
import { v4 as uuidv4 } from 'uuid';

function sortSteps(steps) {
  const stepsArr = [...steps];
  return stepsArr.sort((a,b) => new Date(b.date) - new Date(a.date));
}


export const StepsWidet = () => {
  const initialStep = {date: '', distance: '', id: ''};
  const [step, setStep] = useState(initialStep)
  const [steps, setSteps] = useState([]);

  function checkStep(prop) {
   return steps.find(stepData => stepData[prop] === step[prop] );
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const foundStepWithId = checkStep('id');
    
    if (foundStepWithId) {
      foundStepWithId.distance = step.distance;
      foundStepWithId.date = step.date;
      setSteps([...steps]);
      setStep(initialStep);
      return;
    }

    const foundStepWithDate = checkStep('date');

    if (foundStepWithDate) {
      foundStepWithDate.distance += step.distance;
      setSteps([...steps]);
      setStep(initialStep)
      return;
    }

    setSteps([{...step, id: uuidv4()}, ...steps]);
    setStep(initialStep);
  }

  function handleChange(e) {
    let {value, name} = e.target;

    if (name === 'distance') {
      value = +value;
    }

    setStep({...step, [name]: value})
  }

  function handleDeleteStep(id) {
    setSteps(steps.filter(step => step.id !== id));
  }

  function handleEditStep(item) {
    setStep({...step, ...item});
  }

  return (
    <div className="steps">
      <div className="steps__container">
        <StepsForm 
          step={step}
          submitForm={handleFormSubmit} 
          changeInput={handleChange}
        />
        <StepsTable 
          stepsData={sortSteps(steps)} 
          deleteStep={handleDeleteStep} 
          editStep={handleEditStep}
        />
      </div>
    </div>
  )
}
