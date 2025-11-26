import { Timer } from "@widgets/timer"
import css from './index.module.scss';

export const HeroSection = () => {
  return (
    <section className={css.hero_section}>
      <div className={css.hero_section_content}>
        <h1>Первый курс по компьютерной сборке</h1>
        <Timer targetDate={new Date('2030-12-31T23:59:59')}/>
      </div>
        <div className={css.students_progress}>
          добавить прогрес бар
        </div>
    </section>
  )
}
