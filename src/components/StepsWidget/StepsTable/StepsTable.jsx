import { StepItem } from "./StepItem/StepItem";


export const StepsTable = ({ stepsData, deleteStep, editStep }) => {
  return (
    <div className='steps__table'>
      <div className="steps__headers">
        <h2 className="step__header">Дата (дд.мм.гг)</h2>
        <h2 className="step__header">Пройдено (км)</h2>
        <h2 className="step__header">Действия</h2>
      </div>
      {stepsData.map(step => <StepItem 
        key={step.id} 
        step={step} 
        deleteStep={deleteStep}
        editStep={editStep}
      />)}
    </div>
  )
}
