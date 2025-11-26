import { Navigation } from "@shared/components/navigation"
import { getAssetPath } from "@shared/lib/getPath"
import { Link } from "react-router-dom"

import css from './index.module.scss';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header_content}>
        <div className={css.logo_wrapper}>
          <img src={getAssetPath('/logo.svg')} alt="logo" />
        </div>
        <Navigation/>
        <div className={css.login_btn_wrapper}>
          <Link to={'/login'} className={css.login}>
            Зайти в кабинет
          </Link>
        </div>
      </div>
    </header>
  )
}
