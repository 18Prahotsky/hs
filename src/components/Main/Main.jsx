import s from "./Main.module.css";
import avatar from "../../images/avatar.png";
import fire from "../../images/fire.svg";
import ok from "../../images/ok.svg";
import pero from "../../images/pero.svg";

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.blocks}>
        <div className={s.applicationWithAvatar}>
          <div className={s.application}>
            <h2 className={s.aboutCompany}>
              Все материалы о нашей компании<br></br> и услугах которые мы
              оказываем
            </h2>
            <p className={s.description}>
              Здесь вы найдете ответы на самые распространенные вопросы,
              инструкции и кейсы наших клиентов
            </p>

            <form className={s.telephone}>
              <label>
                <div className={s.motivationWithFire}>
                  <p className={s.motivation}>
                    <span className={s.greenStyle}>
                      Хотите с нами связаться
                    </span>
                    , оставьте заявку и специалист свяжется с вами в течение 30
                    минут.
                  </p>
                  <img src={fire} alt="fire" className={s.fire} />
                </div>
                <input
                  className={s.formInput}
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Номер телефона"
                  required
                />
              </label>
              <button className={s.formSubmit} type="submit">
                Оставить заявку
                <img src={pero} alt="pero" className={s.peroImage} />
              </button>
            </form>
          </div>
          <div className={s.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <div className={s.columns}>
        <div className={s.column}>
          <div className={s.border}>
            <p className={s.nameColumn}>О компании</p>
          </div>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Основная информация </p>
          </a>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>История компании </p>
          </a>
        </div>
        <div className={s.column}>
          <div className={s.border}>
            <p className={s.nameColumn}>Стройка и ремонт</p>
          </div>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Кейсы наших клиентов</p>
          </a>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Услуги которые мы оказываем</p>
          </a>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Часто задаваемые вопросы</p>
          </a>
        </div>
        <div className={s.column}>
          <div className={s.border}>
            <p className={s.nameColumn}>Покупка недвижимости</p>
          </div>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Кейсы наших клиентов</p>
          </a>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Топ 30 вопросов инвесторов</p>
          </a>
        </div>
        <div className={s.column}>
          <div className={s.border}>
            <p className={s.nameColumn}>Маркетинговые услуги</p>
          </div>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Кейсы наших клиентов</p>
          </a>
          <a href="#/" className={s.columnLink}>
            <img src={ok} alt="ok" className={s.linkImage} />
            <p className={s.linkName}>Услуги которые мы оказываем</p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
