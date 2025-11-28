import { Sectioncontent } from "@shared/components/sectionContent"
import css from './index.module.scss';
import { getAssetPath } from "@shared/lib/getPath";
import clsx from "clsx";
import { treeOfTrainingData, type treeOfTrainingProps } from "../model";

export const TrainingProgramSection = () => {
  return (
    <Sectioncontent>
      <div className={css.training_program}>
        <div className={css.training_program_text}>
          <img src={getAssetPath('/Ellipse_3.svg')} alt="ellipse icon" width={'90px'} height={'45px'}/>
          <h2>Программа обучения</h2>
          <p>
            Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
          </p>
        </div>
        <TreeOfTraining/>
      </div>
    </Sectioncontent>
  )
}


const TreeOfTraining = () => {
  return (
    <div className={css.tree_of_training}>
      {treeOfTrainingData.map((item) => (
        <TreeOfTrainingCard
        key={item.uniqueClass}
        uniqueClass={item.uniqueClass}
        title={item.title}
        desc={item.desc}
        />
      ))}
      <div className={css.vertical_line}></div>
    </div>
  )
}

const TreeOfTrainingCard: React.FC<treeOfTrainingProps> = ({uniqueClass, title, desc}) => {
  return (
    <div className={clsx(css.tree_of_training_card, css[uniqueClass])}>
      <div className={css.tree_of_training_card_line}></div>
      <div className={css.tree_of_training_card_text}>
        <span className={css.pretitle}>{title}</span>
        <p className={css.desc}>{desc}</p>
      </div>
    </div>
  )
}