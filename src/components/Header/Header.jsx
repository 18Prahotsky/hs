import s from "./Header.module.css";
import logo1 from "../../images/HSLogo.svg";
import logo2 from "../../images/HSLogo2.svg";
import burger from "../../images/burger.svg";
import phone from "../../images/phone.svg";
import wp from "../../images/wp.svg";
import tg from "../../images/tg.svg";
import inst from "../../images/inst.svg";
import facebook from "../../images/facebook.svg";
import mail from "../../images/mail.svg";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropDown] = useState(false);

  const toggleNav = (e) => {
    console.log(dropdown);
    if (dropdown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  return (
    <header className={s.header}>
      <div className={s.static}>
        <div className={s.logo}>
          <img src={logo1} alt="HS" className={s.logo1} />
          <img src={logo2} alt="Логотип" />
        </div>
        <div className={s.call}>
          <div className={s.phone}>
            <img src={phone} alt="Телефон" className={s.phoneImage} />
            <h3 className={s.phoneNumber}>+34 624 36 23 26</h3>
          </div>
          <div className={s.checkCall}>
            <div className={s.point}></div>
            <h3 className={s.online}>Звоните, мы онлайн</h3>
          </div>
        </div>
        <div className={s.socials}>
          <div className={s.social}>
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
          <div className={s.checkCall}>
            <div className={s.point}></div>
            <h3 className={s.online}>Пишите, мы онлайн</h3>
          </div>
        </div>

        <button className={s.button}>Записаться на экскурсию</button>
        <button onClick={toggleNav} className={s.dropbtn}>
          <img src={burger} alt="HS" />
        </button>
      </div>
      {dropdown && (
        <div className={s.dropdown}>
          <nav id="myDropdown" className={s.dropdownContent}>
            <a className={s.navLink} href="#about">
              Выполненные работы
            </a>
            <a className={s.navLink} href="#base">
              Каталог готовых объектов
            </a>
            <a className={s.navLink} href="#blog">
              Магазин стройматериалов
            </a>
            <a className={s.navLink} href="#contact">
              Блог
            </a>
            <a className={s.navLink} href="#custom">
              О нас
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
