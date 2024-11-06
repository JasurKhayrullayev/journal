import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { GrLinkNext } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import congreses from "../../db/congreses";

function Confrence() {
  const location = useLocation();
  return (
    <>
      {!(
        location.pathname.includes("confrence") ||
        location.pathname.includes("vacancy")
      ) && (
        <div className="container mx-auto mt-32">
          <h3 className="text-[#020105] font-bold text-4xl font-sans leading-normal">
            Планируемые конференции
          </h3>
          <ul className="grid mt-6 grid-rows-3 grid-flow-col gap-8 mb-12">
            {congreses.map((congres) => (
              <li
                className="flex flex-col bg-[#FFFFFF] rounded-2xl pt-6 pb-4 px-8 border-b-4 border-[#D8DCF4] hover:border-[#3C4BDC]"
                key={congres.id}
              >
                <div className="flex flex-col pb-8 border-b-2 mb-4">
                  <span className="inline-flex mr-auto px-3 py-2 bg-[#F3F4F7] rounded-md text-base font-sans font-normal text-[#5D5D5F]">
                    <LuCalendarDays className="self-center w-4 h-4 mr-2" />
                    {congres.year}
                  </span>
                  <h4 className="font-sans font-medium text-base text-[#020105] mt-5">
                    {congres.name}
                  </h4>
                </div>
                <a
                  className="flex font-sans text-sm font-normal text-[#5D5D5F] mb-3"
                  href="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CiLocationOn className="self-center w-7 h-7 mr-2 text-[#3C4BDC]" />
                  {congres.address}
                </a>
                <a
                  className="flex font-sans text-sm font-normal text-[#5D5D5F] mb-3"
                  href="mailto:{congres.mail}"
                >
                  <CiMail className="self-center w-5 h-5 mr-1.5 text-[#3C4BDC]" />
                  {congres.mail}
                </a>
                <a
                  className="flex font-sans text-sm font-normal text-[#5D5D5F]"
                  href="http://www.frccsc.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiWorld className="self-center w-5 h-5 mr-1.5 text-[#3C4BDC]" />
                  {congres.url}
                </a>
              </li>
            ))}
          </ul>
          <span className="flex justify-center">
            <a
              className="border flex border-[#3C4BDC] font-sans font-semibold text-base rounded-2xl py-4 px-8 text-[#3C4BDC]"
              target="_blank"
              rel="noreferrer"
              href="https://www.internauka.org/conference"
            >
              Все конференции{" "}
              <GrLinkNext className="ml-2 self-center w-4 h-5" />
            </a>
          </span>
        </div>
      )}
    </>
  );
}

export default Confrence;
