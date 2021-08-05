import moment from 'moment'
import React,{useState} from 'react'


const Calender = () => {

  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <div className="dates" key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <div key={index} className="date today">
                    {days.format("D")}
                  </div>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <div key={index} className="date other">
                    {days.format("D")}
                  </div>
                );
              } else {
                return (
                  <div className="date" key={index}>
                    {days.format("D")}
                  </div>
                );
              }
            })}
        </div>
      );
    }
    return result;
  };
  return(
    <div className="calendar-layout">
    <div className="calendar-header">
      <div className="year-month">
       {today.format("YYYY 년 MM 월")}
      </div>
      

      <h1>Calendar</h1>
      
      <div className="nav">
        <div
          className="nav-btn"
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          {" "}
          {'<'}
        </div>
        <div
          className="nav-btn go-today"
          onClick={() => {
            setMoment(moment());
          }}
        >
          Today
        </div>

        <div
          className="nav-btn"
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          {'>'}
        </div>
      </div>
    </div>
    <br />
    <div className="weekcontainer">
      <div className="day">Sun.</div>
      <div className="day">Mon.</div>
      <div className="day">Tues.</div>
      <div className="day">Wed.</div>
      <div className="day">Thurs.</div>
      <div className="day">Fri.</div>
      <div className="day">Sat.</div>
    </div>
    <div className="calendar">{calendarArr()}</div>
  </div>
  )
}


export default Calender
