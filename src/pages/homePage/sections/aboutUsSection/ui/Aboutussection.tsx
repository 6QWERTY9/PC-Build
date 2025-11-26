import { getAssetPath } from '@shared/lib/getPath';
import css from './index.module.scss';

export const AboutUsSection = () => {
  return (
    <section className={css.about_us}>
      <div className={css.content_section}>
        <AboutUsSectionImage/>
        <div className={css.text_content}>
          <h2>Чем мы занимаемся?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. 
          </p>
        </div>
      </div>
    </section>
  )
}


const AboutUsSectionImage = () => {
  return (
    <div className={css.about_us_image_wrapper}>
      <div className={css.about_us_image_bg}></div>
      <img src={getAssetPath('/pc.png')} alt="pc image" className={css.pc_image} width={'450px'} height={'450px'}/>
    </div>
  )
}
