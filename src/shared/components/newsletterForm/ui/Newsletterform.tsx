import css from './index.module.scss';

export const Newsletterform = () => {
  return (
    <form className={css.newsletter_subscribe_form}>
      <input type="email" name="E-mail" id="email_input" placeholder='E-mail' className={css.email_input}/>
      <button className={css.subscribe_btn} type='submit'>Подписаться</button>
    </form>
  )
}
