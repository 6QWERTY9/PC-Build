import { Sectioncontent } from "@shared/components/sectionContent"
import css from './index.module.scss';
import { aboutTrainingData, type aboutTrainingProps } from "../model";
import { getAssetPath } from "@shared/lib/getPath";

export const AboutTraining = () => {
  return (
    <Sectioncontent>
      <div className={css.about_training}>
        <h2>Получите профессию прямо сейчас</h2>
        <div className={css.about_training_cards}>
          {aboutTrainingData.map((item, ind) => (
            <AboutTrainingCard
              src={item.src}
              title={item.title}
              desc={item.desc}

              key={ind}
            />
          ))}
        </div>
      </div>
    </Sectioncontent>
  )
}

const AboutTrainingCard: React.FC<aboutTrainingProps> = ({src,title,desc}) => {
  return (
    <div className={css.about_training_card}>
      <img src={getAssetPath(src)} alt={`икон для карточки: ${title}`} width={'100px'} height={'100px'} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}
