import { Sectioncontent } from "@shared/components/sectionContent"
import css from './index.module.scss';
import { getAssetPath } from "@shared/lib/getPath";
export const Partners = () => {
  return (
    <Sectioncontent>
      <div className={css.partners}>
        <div className={css.title_wrapper}>
          <img src={getAssetPath('/Ellipse_2.svg')} alt="" />
          <h2>Партнеры - топовые бренды</h2>
        </div>

        <div className={css.partners_wrapper}>
          {Array.from({length: 8}).map((_,ind) => (
            <div className={css.logo_partners}>
              <img src={getAssetPath('/msi_logo.png')} alt="msi logo" key={ind} width={'198px'} height={'93px'} />
            </div>
          ))}
        </div>
      </div>
    </Sectioncontent>
  )
}
