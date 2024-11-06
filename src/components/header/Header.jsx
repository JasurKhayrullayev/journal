import logo from "../../assets/journallogo.png";
import { FaSignInAlt } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="container mx-auto xl py-7 px-6 my-10 flex justify-around bg-white rounded-3xl">
        <a className="self-center" href="/">
          <img className="w-34 h-12" src={logo} alt="Site logo" />
        </a>
        <nav className="flex items-center gap-x-8">
          <a className="font-medium text-base text-[#353437]" href="/">
            Журналы
          </a>
          <a className="font-medium text-base text-[#353437]" href="/">
            Статья
          </a>
          <a className="font-medium text-base text-[#353437]" href="/">
            Авторы
          </a>
          <a
            className="font-medium text-base text-[#353437]"
            href="/"
          >
            Организации
          </a>
          <a className="font-medium text-base text-[#353437]" href="/confrence">
            Конференция
          </a>
          <a className="font-medium text-base text-[#353437]" href="/">
            Контакт
          </a>
          <a className="font-medium text-base text-[#353437]" href="/vacancy">
            Вакансия
          </a>
        </nav>
        <div className="flex gap-x-6">
          <select
            className="font-medium text-base text-[#353437] outline-none"
            name="language"
            id=""
          >
            <option value="Rus">Русский</option>
            <option value="Eng">English</option>
            <option value="Uzb">Uzbek</option>
          </select>
          <a
            className="self-center flex py-4 px-8 border-2 border-sky-600 rounded-2xl text-sky-600"
            href="/"
          >
            Войти <FaSignInAlt className="w-6 h-6 self-center ml-2" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
