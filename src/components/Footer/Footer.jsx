import s from "./Footer.module.css";
import main from "../../images/main.svg";
import catalog from "../../images/catalog.svg";
import shop from "../../images/shop.svg";
import blog from "../../images/blog.svg";
import contacts from "../../images/contacts.svg";
import videoExample1 from "../../images/videoExample1.png";
import videoExample2 from "../../images/videoExample2.png";
import videoExample3 from "../../images/videoExample3.png";
import videoSelector from "../../images/videoSelector.svg";
import alfaLogo from "../../images/alfaLogo.svg";
import vector10 from "../../images/vector10.svg";
import vector9 from "../../images/vector9.svg";
import russia from "../../images/russia.svg";
import wp from "../../images/wp.svg";
import tg from "../../images/tg.svg";
import inst from "../../images/inst.svg";
import facebook from "../../images/facebook.svg";
import mail from "../../images/mail.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.blocks}>
        <div className={s.videoFeedbacks}>
          <h3 className={s.partners}>Видеоотзывы от партнёров</h3>
          <div className={s.videos}>
            <div className={s.video}>
              <img
                src={videoExample1}
                alt="videoExample"
                className={s.videoPreview}
              />
              <img
                src={videoExample2}
                alt="videoExample"
                className={s.videoPreview}
              />
              <img
                src={videoExample3}
                alt="videoExample"
                className={s.videoPreview}
              />
            </div>
            <div className={s.videoSelector}>
              <img src={videoSelector} alt="videoSelector" />
            </div>
          </div>
          <div className={s.alfa}>
            <img src={alfaLogo} alt="alfaLogo" className={s.alfaLogo} />
            <p className={s.alfaName}>
              <span className={s.alfaSpan}>Alfa Digital Agency</span>–
              разработка высоко конверсионных сайтов
            </p>
          </div>
        </div>
        <div className={s.column}>
          <nav className={s.columnLinks}>
            <a className={s.columnLink}>
              <img src={main} alt="Main" className={s.linkImage} />
              <p className={s.linkName}>Главная</p>
            </a>
            <a className={s.columnLink}>
              <img src={catalog} alt="Catalog" className={s.linkImage} />
              <p className={s.linkName}>Каталог готовых объектов</p>
            </a>
            <a className={s.columnLink}>
              <img src={shop} alt="Shop" className={s.linkImage} />
              <p className={s.linkName}>Магазин стройматериалов</p>
            </a>
            <a className={s.columnLink}>
              <img src={blog} alt="Blog" className={s.linkImage} />
              <p className={s.linkName}>Блог</p>
            </a>
            <a className={s.columnLink}>
              <img src={catalog} alt="Catalog" className={s.linkImage} />
              <p className={s.linkName}>Выезд специалиста</p>
            </a>
            <a className={s.columnLink}>
              <img src={contacts} alt="Contacts" className={s.linkImage} />
              <p className={s.linkName}>Контакты</p>
            </a>
          </nav>
        </div>

        <div className={s.panel}>
          <a href="#/" className={s.documents}>
            <p className={s.footerDocuments}>Смотреть все документы</p>
            <img src={vector10} alt="vector" className={s.vector} />
          </a>
          <a href="#/" className={s.list}>
            <p className={s.listText}>
              Политика<br></br>конфиденциальности
            </p>
            <img src={vector9} alt="vector" className={s.listIcon} />
          </a>

          <a href="#/" className={s.list}>
            <img src={russia} alt="russia" className={s.listIconLanguage} />
            <p className={s.listText}>Русский</p>
            <img src={vector9} alt="vector" className={s.listIcon} />
          </a>

          <div className={s.socials}>
            <a className={s.socialIcon} href="">
              <img src={wp} alt="whatsapp" />
            </a>
            <a className={s.socialIcon} href="">
              <img src={tg} alt="tg" />
            </a>
            <a className={s.socialIcon} href="">
              <img src={inst} alt="inst" />
            </a>
            <a className={s.socialIcon} href="">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={mail} alt="mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
