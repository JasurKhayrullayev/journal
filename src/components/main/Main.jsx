import { useLocation } from "react-router-dom";
import mainSearch from "../../assets/mainsearch.png";
import { GrFormNextLink } from "react-icons/gr";

function Main() {
  const location = useLocation();
  return (
    <>
      {!(
        location.pathname.includes("confrence") ||
        location.pathname.includes("vacancy")
      ) && (
        <div>
          <div className="container flex flex-col mx-auto pt-32 pl-16 pb-52 bg-[#59595A] rounded-3xl">
            <h1 className="font-semibold font-sans text-6xl leading-normal text-[#FFFFFF]">
              11 ПРИЗНАКОВ ТОГО, ЧТО <br />
              ПЕРЕД ВАМИ КАРТИНА <br />
              СЮРРЕАЛИСТОВ
            </h1>
            <p className="font-normal font-sans text-[#FFFFFF] text-lg">
              Полулюди-полурыбы, бесконечные побережья, отвратительные
              <br />
              насекомые и человек, разорванный на части
            </p>
            <span className="flex">
              <a
                className="flex items-start mt-6 px-9 py-5 text-[#FFFFFF] rounded-2xl bg-[#3C4BDC] text-center"
                target="_blank"
                rel="noreferrer"
                href="https://arzamas.academy/mag/1034-surr-alisme"
              >
                Читать журнал
                <GrFormNextLink className="self-center ml-2 w-6 h-6" />
              </a>
            </span>
          </div>
          <div className="container mt-10 mx-auto flex items-center">
            <img src={mainSearch} alt="main search" />
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
