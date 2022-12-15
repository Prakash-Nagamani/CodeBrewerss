import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import Clock from "./Timer";

function Logic({ data, full_data, countDownDate }) {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const duration = full_data.duration * 60000;

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("July 18,2022 ").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        if (hours.toString().length == 1) {
          var z = hours.toString();
          z = "0" + hours.toString();
          setTimerHours(z);
        } else {
          setTimerHours(hours);
        }
        if (minutes.toString().length == 1) {
          var y = minutes.toString();
          y = "0" + minutes.toString();
          setTimerMinutes(y);
        } else {
          setTimerMinutes(minutes);
        }
        if (seconds.toString().length == 1) {
          var x = seconds.toString();
          x = "0" + seconds.toString();
          setTimerSeconds(x);
        } else {
          setTimerSeconds(seconds);
        }
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default Logic;
