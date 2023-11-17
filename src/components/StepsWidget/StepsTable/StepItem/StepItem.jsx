export const StepItem = ({ step, deleteStep, editStep }) => {
  const { date, distance, id } = step;
  return (
    <div className="step">
        <p className="step__col step__date">{date}</p>
        <p className="step__col step__distance">{distance}</p>
        <div className="step__col step__controls">
          <button 
            type='button' 
            onClick={() => editStep(step)}
            className="step__control step__btn-edit"
          >
            <img src="/images/edit.svg" alt="" />
          </button>
          <button 
            type='button' 
            onClick={() => deleteStep(id)}
            className="step__control step__btn-delete"
          >
            <img src="/images/delete.svg" alt="" />
          </button>
        </div>
      </div>
  )
}
