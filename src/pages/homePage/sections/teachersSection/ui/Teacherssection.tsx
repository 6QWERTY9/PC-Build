import { Sectioncontent } from "@shared/components/sectionContent"
import css from './index.module.scss';
import { getAssetPath } from "@shared/lib/getPath";
export const Teacherssection = () => {
  return (
    <Sectioncontent>
      <div className={css.teacher_section}>
        <div className={css.teacher_section_text}>
          <img src={getAssetPath('/Ellipse_4.svg')} alt="" width={'90px'} height={'45px'} />
          <h2>Ваши преподаватели</h2>
        </div>
        <TeachersCards/>
      </div>
    </Sectioncontent>
  )
}

const TeachersCards = () => {
  return (
    <div className={css.teachers_cards}>
      <TeachersCard
        src="/teacher_1.png"
      />
      <TeachersCard
        src="/teacher_2.png"
      />
      <TeachersCard
        src="/teacher_3.png"
      />

    </div>
  )
}

const TeachersCard = ({src}: {src: string}) => {
  return (
    <div className={css.teachers_card}>
      <div className={css.image_wrapper}>
        <img src={getAssetPath(src)} alt="teacher image"  className={css.teachers_image} width={'190px'} height={'190px'}/>
      </div>
      <div className={css.teachers_card_text}>
        <h4>Дмитрий Иванов</h4>
        <p>Специалист по видеокартам</p>
        <button>Биография</button>
      </div>
    </div>
  )
}


