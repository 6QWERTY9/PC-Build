import { Newsletterform } from "@shared/components/newsletterForm"
import css from './index.module.scss';
import { socialsData } from "../model";
import { getAssetPath } from "@shared/lib/getPath";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer_content}>
        <div className={css.text_content}>
          <h2>Статьи каждую неделю</h2>
          <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
        </div>

        <Newsletterform/>

        <Socials/>
      </div>
    </footer>
  )
}

const Socials = () => {
  return (
    <div className={css.socials_wrapper}>
      {socialsData.map((item) => (
        <a href={item.href} key={item.id} target="_blank" rel="noopener noreferrer" className={css.social_link}>
          <img src={getAssetPath(item.src)} alt="logo social" />
        </a>
      ))}
    </div>
  )
}
