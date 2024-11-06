import journals from "../../db/journals";
import { GrView } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { GrLinkNext } from "react-icons/gr";
import { useLocation } from "react-router-dom";

function Journals() {
  const location = useLocation();
  return (
    <>
      {!(
        location.pathname.includes("confrence") ||
        location.pathname.includes("vacancy")
      ) && (
        <div className="container mx-auto" id="journals">
          <h2 className="text-[#020105] font-bold text-4xl font-sans leading-normal">
            Популярные журналы
          </h2>
          <ul className="grid mt-6 grid-rows-3 grid-flow-col gap-8 mb-12">
            {journals.map((journal) => (
              <li
                className="flex flex-col bg-[#FFFFFF] rounded-2xl pt-8 pb-4 px-4 "
                key={journal.id}
              >
                <img
                  className="self-center"
                  width={230}
                  height={316}
                  src={journal.img}
                  alt="journal_photo"
                />
                <span className="mt-8 mb-2 flex justify-between">
                  <p className="text-[#2D6D76] font-sans font-normal text-sm">
                    {journal.author}
                  </p>
                  <p className="flex text-[#2D6D76] font-sans font-normal text-sm ">
                    <GrView className="self-center w-4 h-4 mr-2" />
                    {journal.view}
                  </p>
                </span>
                <p className="text-base font-sans font-semibold text-[#020105]">
                  {journal.name}
                </p>
                <span className="flex items-center justify-between mt-auto">
                  <p className="flex text-[#5D5D5F] text-base font-normal">
                    <LuCalendarDays className="self-center w-4 h-4 mr-1" />
                    {journal.year}
                  </p>
                  <a
                    className="w-10 h-10 border border-[#3C4BDC] flex items-start pl-2.5 text-[#3C4BDC] rounded-full"
                    target="_blank"
                    rel="noreferrer"
                    href="https://arzamas.academy/mag/1034-surr-alisme"
                  >
                    <GrLinkNext className="self-center" />
                  </a>
                </span>
              </li>
            ))}
          </ul>
          <span className="flex justify-center">
            <a
              className="border flex border-[#3C4BDC] font-sans font-semibold text-base rounded-2xl py-4 px-8 text-[#3C4BDC]"
              target="_blank"
              rel="noreferrer"
              href="https://arzamas.academy/mag/1034-surr-alisme"
            >
              Подробнее <GrLinkNext className="ml-2 self-center w-4 h-5" />
            </a>
          </span>
        </div>
      )}
    </>
  );
}

export default Journals;
