import { Footer } from "@shared/components/footer"
import { Header } from "@shared/components/header"

import css from './index.module.scss';

export const Layoutpage = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={css.page_layout}>
      <div className={css.header_wrapper}>
        <Header/>
      </div>
      <main className={css.main}>
        {children}
      </main>
      <div className={css.footer_wrapper}>
        <Footer/>
      </div>
    </div>
  )
}
