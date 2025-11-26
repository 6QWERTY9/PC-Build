import { Link } from 'react-router-dom';
import css from './index.module.scss';

export const Navigation = () => {

  return (
    <nav className={css.navigation}>
      <ul className={css.navigation_list}>
        <li>
          <Link to='/pcbuild/'>
          Главная
          </Link>
        </li>
        <li>
          <Link to='/courses'>
          Курсы
          </Link>
        </li>
        <li>
          <Link to='/timetable'>
          Расписание
          </Link>
        </li>
        <li>
          <Link to='/teachers'>
          Преподаватели
          </Link>
        </li>
        <li>
          <a href='#footer'>
          Рассылка
          </a>
        </li>
        <li>
          <Link to='/contacts'>
          Контакты
          </Link>
        </li>
      </ul>
    </nav>
  )
}
