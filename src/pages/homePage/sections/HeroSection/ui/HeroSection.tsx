import { Timer } from "@widgets/timer"
import css from './index.module.scss';

export const HeroSection = () => {
  return (
    <section className={css.hero_section}>
      <div className={css.hero_section_content}>
        <h1>Первый курс по компьютерной сборке</h1>
        <Timer targetDate={new Date('2030-12-31T23:59:59')}/>
      </div>
      <StudentsProgress/>
    </section>
  )
}

const StudentsProgress = () => {
  return (
    <div className={css.students_progress}>
      <div className={css.students_progress_content}>
        <button className={css.request_cours}>
          Заказать курс
        </button>
        <div className={css.students_count}>
          <span >
            Учеников всего: <span className={css.total_students}> 200</span>
          </span>
          <span >
            Успешно закончили курс: <span className={css.successfully_completed}>190</span>
          </span>
        </div>
        <div className={css.progress_bar_wrapper}>
          <span className={css.earned_by_students}>
            Заработано учениками: <span>400 000₽</span>
          </span>
          <div className={css.progress_bar}>
            <div className={css.progress_bar_fill}></div>
          </div>
          <div className={css.progress_bar_values}>
            <span>0₽</span> 
            <span>1 000 000₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}
