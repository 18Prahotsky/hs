import s from "./Assistive.module.css";
import vector8 from "../../images/vector8.svg";
import mail from "../../images/mail.svg";

const Assasistiv = () => {
  return (
    <section className={s.assasistive}>
      <div className={s.rectangle}>
        <img src={mail} alt="HS" />
        <img src={vector8} alt="vector" className={s.listIcon} />
      </div>
    </section>
  );
};

export default Assasistiv;
