import confrences from "../../db/conference";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { useState } from "react";

function ConfrencePath() {
  const [filterStatus, setFilterStatus] = useState("true");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["IT", "Economy", "Science"];

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setSelectedCategories(
        selectedCategories.length === categories.length ? [] : [...categories]
      );
    } else {
      const isSelected = selectedCategories.includes(category);
      setSelectedCategories(
        isSelected
          ? selectedCategories.filter((cat) => cat !== category)
          : [...selectedCategories, category]
      );
    }
  };
  const filteredConferences = confrences.filter(
    (confrence) =>
      confrence.status === filterStatus &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(confrence.category)) &&
      confrence.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto">
        <div className="pt-28 pl-16 pb-10 bg-[#59595A] rounded-3xl mb-10">
          <div className="flex text-white font-sans font-medium text-lg gap-2">
            <a className="" href="/">
              Главная
            </a>
            <p>/</p>
            <a href="/confrence">Конференция</a>
          </div>
          <h1 className="text-white font-semibold mt-3 text-6xl font-sans">
            Конференции
          </h1>
        </div>
        <div>
          <button
            className={`px-8 pb-6 font-sans font-semibold text-lg ${
              filterStatus === "true"
                ? "text-[#3C4BDC] border-b-4 border-[#3C4BDC]"
                : "text-[#353437]"
            }`}
            onClick={() => handleFilterChange("true")}
          >
            Ближайшие конференции
          </button>
          <button
            className={`px-8 pb-6 font-sans font-semibold text-lg ${
              filterStatus === "false"
                ? "text-[#3C4BDC] border-b-4 border-[#3C4BDC]"
                : "text-[#353437]"
            }`}
            onClick={() => handleFilterChange("false")}
          >
            Планируемые конференции
          </button>
        </div>
        <div className="flex justify-between gap-12 mt-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Поиск по имени"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-md w-full outline-none"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label>
              <input
                className="mr-1.5"
                type="checkbox"
                checked={selectedCategories.length === categories.length}
                onChange={() => handleCategoryChange("all")}
              />
              Все
            </label>
            {categories.map((category) => (
              <label key={category}>
                <input
                  className="mr-1.5"
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <ul className="grid mt-6 grid-cols-4 grid-flow-row gap-8 mb-12">
          {filteredConferences
            .filter((confrence) => confrence.status === filterStatus)
            .map((confrence) => (
              <li
                className="flex flex-col bg-[#FFFFFF] rounded-2xl pt-6 pb-4 px-8 border-b-4 border-[#D8DCF4] hover:border-[#3C4BDC]"
                key={confrence.id}
              >
                <div className="flex flex-col pb-8 border-b-2 mb-4">
                  <span className="inline-flex mr-auto px-3 py-2 bg-[#F3F4F7] rounded-md text-base font-sans font-normal text-[#5D5D5F]">
                    <LuCalendarDays className="self-center w-4 h-4 mr-2" />
                    {confrence.year}
                  </span>
                  <h4 className="font-sans font-medium text-base text-[#020105] mt-5">
                    {confrence.name}
                  </h4>
                </div>
                <a
                  className="flex font-sans text-sm font-normal text-[#5D5D5F] mb-3"
                  href="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CiLocationOn className="self-center w-7 h-7 mr-2 text-[#3C4BDC]" />
                  {confrence.address}
                </a>
                <a
                  className="flex font-sans text-sm font-normal text-[#5D5D5F] mb-3"
                  href={`mailto:${confrence.mail}`}
                >
                  <CiMail className="self-center w-5 h-5 mr-1.5 text-[#3C4BDC]" />
                  {confrence.mail}
                </a>
                <a
                  className="flex font-sans text-sm font-normal text-[#5D5D5F]"
                  href="http://www.frccsc.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiWorld className="self-center w-5 h-5 mr-1.5 text-[#3C4BDC]" />
                  {confrence.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default ConfrencePath;
