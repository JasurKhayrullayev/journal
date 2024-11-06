import logo from "../../assets/journallogo.png";
import { BsExclamationCircle } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegram, FaYoutube, FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container mx-auto flex justify-between my-32 rounded-[40px] bg-white px-[120px] py-10">
        <div className="flex flex-col">
          <a href="/">
            <img width={181} height={64} src={logo} alt="footer logo" />
          </a>
          <p className="mt-8 font-sans font-normal text-sm text-[#5D5D5F]">
            При цитировании материалов
            <br /> Сайта, включая охраняемые
            <br /> авторские произведения, ссылка
            <br /> на Сайт обязательна.
          </p>
          <a
            className="flex items-center font-sans font-bold text-xs text-[#353437] mt-auto"
            href="/"
          >
            <BsExclamationCircle className="mr-2 w-5 h-5" />
            FAQ
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="font-sans font-bold text-lg text-[#353437] mb-8">
            Меню
          </h3>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/"
          >
            Журналы
          </a>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/vacancy"
          >
            Вакансия
          </a>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/"
          >
            Статья
          </a>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/"
          >
            Организации
          </a>
          <a className="font-sant font-normal text-xs text-[#353437]" href="/">
            Контакт
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="font-sans font-bold text-lg text-[#353437] mb-8">
            Пресс-служба
          </h3>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/"
          >
            Конференция
          </a>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/confrence"
          >
            Семинар
          </a>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/"
          >
            Видеотека
          </a>
          <a className="font-sant font-normal text-xs text-[#353437]" href="/">
            Новости
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="font-sans font-bold text-lg text-[#353437] mb-8">
            Контакт
          </h3>
          <p className="font-sans font-medium text-xs text-[#353437] mb-2">
            Телефон:
          </p>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="tel:+998712030101"
          >
            (+99871) 203-01-01, 242-48-93
          </a>
          <p className="font-sans font-medium text-xs text-[#353437] mb-2">
            Адресс:
          </p>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="/https://maps.app.goo.gl/ayrqK6aMyE9w39Hg6"
          >
            г.Ташкент, Узбекситан
          </a>
          <p className="font-sans font-medium text-xs text-[#353437] mb-2">
            E-mail:
          </p>
          <a
            className="font-sant font-normal text-xs text-[#353437] mb-4"
            href="mailto:farmkomitet@ssv.uz"
          >
            farmkomitet@ssv.uz
          </a>
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg text-[#353437] mb-8">
            Социальной сети
          </h3>
          <div className="flex justify-between">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <IoLogoFacebook className="w-8 h-8 text-[#C2C2C3] hover:text-[#3C4BDC]" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://web.telegram.org/"
            >
              <FaTelegram className="w-8 h-8 text-[#C2C2C3] hover:text-[#3C4BDC]" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
            >
              <FaInstagramSquare className="w-8 h-8 text-[#C2C2C3] hover:text-[#3C4BDC]" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
              <FaYoutube className="w-8 h-8 text-[#C2C2C3] hover:text-[#3C4BDC]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
