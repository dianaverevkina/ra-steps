export const StepsForm = ({ step, changeInput, submitForm}) => {
  const { date, distance } = step;

  return (
    <form name='steps' onSubmit={submitForm} className="steps__form">
      <div className="steps__row">
        <label htmlFor="date" className="steps__date">Дата (дд.мм.гг)</label>
        <input 
        id='date' name='date' 
        type="date"
        value={date} 
        onChange={changeInput}
        className="steps__input" 
      />
      </div>
      <div className="steps__row">
        <label htmlFor="distance" className="steps__date">Пройдено (км)</label>
        <input 
          id='distance' name='distance'
          type="text" 
          value={distance}
          onChange={changeInput}
          className="steps__input" 
        />
      </div>
      <button className="steps__btn">OK</button>
    </form>
  )
}
