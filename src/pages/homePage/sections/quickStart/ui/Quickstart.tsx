
import { Sectioncontent } from '@shared/components/sectionContent';
import css from './index.module.scss';
import { getAssetPath } from '@shared/lib/getPath';
import clsx from 'clsx';

export const QuickStart = () => {
  return (
    <Sectioncontent>
      <div className={css.quick_start_content}>
        <QuickStartTextContent/>
        <div className={css.QuickStartPropgressBar_wrapper}>
          <QuickStartPropgressBar fill='100%' sizes='80px'/>
          <QuickStartPropgressBar fill='75%' sizes='60px'/>
          <QuickStartPropgressBar fill='50%' sizes='30px'/>
          <QuickStartPropgressBar fill='0%' sizes='10px'/>
        </div>
      </div>
    </Sectioncontent>
  )
}

const QuickStartTextContent = () => {
  return (
    <div className={css.text_content}>
        <div className={css.title_wrapper}>
          <div className={css.circle}>
            <img src={getAssetPath('/Ellipse_1.svg')} alt="" />
          </div>
          <h2>Быстрый старт</h2>
        </div>
        <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
    </div>
  )
}


const QuickStartPropgressBar = ({fill, sizes}: {fill: '100%'|'75%'|'50%'|'0%', sizes: string}) => {
  
  return (
    <div className={clsx(css.quick_start_propgress_bar)}>
      <h3>{fill}</h3>
      <div className={css.fill_bar} style={{height: sizes}}></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
    </div>
  )
}
