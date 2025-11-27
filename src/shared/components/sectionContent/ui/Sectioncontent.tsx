import css from './index.module.scss';

export const Sectioncontent = ({children}: {children: React.ReactNode}) => {
  return (
    <section className={css.section_content}>
      {children}
    </section>
  )
}
