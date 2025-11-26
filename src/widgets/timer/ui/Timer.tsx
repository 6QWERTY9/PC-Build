import { useEffect, useState } from "react";
import css from './index.module.scss';

export const Timer = ({targetDate}: {targetDate: Date}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, 1000)
  }, [targetDate])

  return (
    <div className={css.timer}>
      <div className={css.timeBlock}>
        <span className={css.value}>{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className={css.label}>дней</span>
      </div>
      <div className={css.timeBlock}>
        <span className={css.value}>{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className={css.label}>часов</span>
      </div>
      <div className={css.timeBlock}>
        <span className={css.value}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className={css.label}>минут</span>
      </div>
      <div className={css.timeBlock}>
        <span className={css.value}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className={css.label}>секунд</span>
      </div>
    </div>
  )
}
