import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const languages = ["English", "Rus tili", "Nemis tili", "Koreys tili"];

const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

function Vacancy() {
  const [institutions, setInstitutions] = useState([
    { name: "", faculty: "", specialty: "", year: "" },
  ]);

  const handleAddInstitution = () => {
    setInstitutions([
      ...institutions,
      { name: "", faculty: "", eSpecialty: "", year: "" },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newInstitutions = [...institutions];
    newInstitutions[index][field] = value;
    setInstitutions(newInstitutions);
  };

  const handleDeleteInstitution = (index) => {
    const newInstitutions = institutions.filter((_, i) => i !== index);
    setInstitutions(newInstitutions);
  };

  //   -------------------------------------------------

  const [endInstitutions, setEndInstitutions] = useState([
    { eName: "", eFaculty: "", eSpecialty: "", endMonth: "", endYear: "" },
  ]);
  const handleEndAddInstitution = () => {
    setEndInstitutions([
      ...endInstitutions,
      { eName: "", eFaculty: "", eSpecialty: "", endMonth: "", endYear: "" },
    ]);
  };
  const handleEndInputChange = (index, field, value) => {
    const newEndInstitutions = [...endInstitutions];
    newEndInstitutions[index][field] = value;
    setEndInstitutions(newEndInstitutions);
  };
  const handleEndDeleteInstitution = (index) => {
    const newEndInstitutions = endInstitutions.filter((_, i) => i !== index);
    setEndInstitutions(newEndInstitutions);
  };
  // -----------------------------------------

  const [lanInstitutions, setLanInstitutions] = useState([
    {
      workName: "",
      workLavozim: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    },
  ]);
  const handleLanAddInstitution = () => {
    setLanInstitutions([
      ...lanInstitutions,
      {
        workName: "",
        workLavozim: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
    ]);
  };
  const handleLanInputChange = (index, field, value) => {
    const newLanInstitutions = [...lanInstitutions];
    newLanInstitutions[index][field] = value;
    setLanInstitutions(newLanInstitutions);
  };
  const handleLanDeleteInstitution = (index) => {
    const newLanInstitutions = lanInstitutions.filter((_, i) => i !== index);
    setLanInstitutions(newLanInstitutions);
  };

  // ------------------------------------------

  const [workInstitutions, setWorkInstitutions] = useState([{}]);
  const handleWorkAddInstitution = () => {
    setWorkInstitutions([...workInstitutions, {}]);
  };
  const handleWorkInputChange = (index, field, value) => {
    const newWorkInstitutions = [...workInstitutions];
    newWorkInstitutions[index][field] = value;
    setWorkInstitutions(newWorkInstitutions);
  };
  const handleWorkDeleteInstitution = (index) => {
    const newWorkInstitutions = workInstitutions.filter((_, i) => i !== index);
    setWorkInstitutions(newWorkInstitutions);
  };

  return (
    <>
      <form className="container mx-auto px-8 py-8 flex flex-col bg-white rounded-3xl">
        <div className="flex justify-between gap-8 mb-6">
          <select className="pl-6 py-4 outline-none w-full rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
            <option value="" disabled selected hidden>
              Tashkilotni tanlang
            </option>
            <option value="O'zbеkistоn Rеspublikаsi Dаvlаt stаtistikа qo'mitаsi">
              O'zbеkistоn Rеspublikаsi Dаvlаt stаtistikа qo'mitаsi
            </option>
            <option value="O'zbekiston Respublikasi Davlat soliq qo'mitasi">
              O'zbekiston Respublikasi Davlat soliq qo'mitasi
            </option>
            <option value="O'zbеkistоn Rеspublikаsi Dаvlаt bоjхоnа qo'mitаsi">
              O'zbеkistоn Rеspublikаsi Dаvlаt bоjхоnа qo'mitаsi
            </option>
          </select>
          <select className="pl-6 py-4 outline-none w-full rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
            <option value="" disabled selected hidden>
              Mutaxassislikni tanlang
            </option>
            <option value="Dasturchi yetakchi mutaxassis">
              Dasturchi yetakchi mutaxassis
            </option>
            <option value="Hisobchi o`rinbosari">Hisobchi o`rinbosari</option>
            <option value="Tashkiliy ishlar bo`yicha direktor">
              Tashkiliy ishlar bo`yicha direktor
            </option>
          </select>
        </div>
        <h2 className="text-lg font-semibold mb-4">Shaxsiy ma`lumotlar:</h2>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <input
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            type="text"
            placeholder="Familiya"
          />
          <select
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            name=""
          >
            <option value="" disabled selected hidden>
              Tug`ilgan kun
            </option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <input
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            type="text"
            placeholder="Yashash manzili"
          />
          <input
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            type="text"
            placeholder="Ism"
          />
          <select
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            name=""
          >
            <option value="" disabled selected hidden>
              Tug`ilgan oy
            </option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <input
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            type="number"
            placeholder="Telefon raqam"
          />
          <input
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            type="text"
            placeholder="Sharif"
          />
          <select
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            name=""
          >
            <option value="" disabled selected hidden>
              Tug`ilgan yil
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <input
            className="pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
            required
            type="email"
            placeholder="Elektron pochta"
          />
        </div>
        <div className="flex mt-8 justify-between gap-8">
          <div className="flex flex-col w-full">
            <h2 className="text-lg font-semibold mb-4">Ma`lumotingiz:</h2>
            {institutions.map((institution, index) => (
              <div key={index}>
                <input
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  type="text"
                  placeholder="O'qish muassasasi nomi"
                  value={institution.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                />
                <div className="flex justify-between gap-4">
                  <input
                    className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                    required
                    type="text"
                    placeholder="Fakultet"
                    value={institution.faculty}
                    onChange={(e) =>
                      handleInputChange(index, "faculty", e.target.value)
                    }
                  />
                  <input
                    className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                    required
                    type="text"
                    placeholder="Mutaxassislik"
                    value={institution.specialty}
                    onChange={(e) =>
                      handleInputChange(index, "specialty", e.target.value)
                    }
                  />
                </div>
                <select
                  className="w-1/2 pl-6 py-4 mb-3 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  value={institution.year}
                  onChange={(e) =>
                    handleInputChange(index, "year", e.target.value)
                  }
                >
                  <option value="" disabled hidden>
                    Tugallangan yil
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {institutions.length > 1 && (
                  <button
                    className="text-red-600 ml-4 flex"
                    type="button"
                    onClick={() => handleDeleteInstitution(index)}
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
            <button
              className="flex items-center justify-end text-base font-medium text-blue-700"
              type="button"
              onClick={handleAddInstitution}
            >
              O'quv muassasasini qo'shish <FaPlus className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-lg font-semibold mb-4">
              Qo`shimcha ma`lumot(malaka oshirish, kurs va boshqalar)
            </h2>
            {endInstitutions.map((endInstitution, index) => (
              <div key={index}>
                <input
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  type="text"
                  placeholder="O'qish muassasasi nomi"
                  value={endInstitution.eName}
                  onChange={(e) =>
                    handleEndInputChange(index, "eName", e.target.value)
                  }
                />
                <input
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  type="text"
                  placeholder="Mutaxassislik"
                  value={endInstitution.eSpecialty}
                  onChange={(e) =>
                    handleInputChange(index, "eSpecialty", e.target.value)
                  }
                />
                <div className="flex justify-between gap-4">
                  <select
                    className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                    required
                    value={endInstitution.endMonth}
                    onChange={(e) =>
                      handleEndInputChange(index, "endMonth", e.target.value)
                    }
                  >
                    <option value="" disabled hidden>
                      Tugallangan oy
                    </option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                    required
                    value={endInstitution.endYear}
                    onChange={(e) =>
                      handleEndInputChange(index, "endYear", e.target.value)
                    }
                  >
                    <option value="" disabled hidden>
                      Tugallangan yil
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                {endInstitutions.length > 1 && (
                  <button
                    className="ml-4 text-red-600"
                    type="button"
                    onClick={() => handleEndDeleteInstitution(index)}
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
            <button
              className="flex items-center justify-end text-base font-medium text-blue-700"
              type="button"
              onClick={handleEndAddInstitution}
            >
              O'quv muassasasini qo'shish <FaPlus className="ml-2" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-8">
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">
              Xorijiy tillarni bilish:
            </h3>
            {lanInstitutions.map((lanInstitution, index) => (
              <div key={index}>
                <select
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  value={lanInstitution.language}
                  onChange={(e) =>
                    handleLanInputChange(index, "language", e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    Til
                  </option>
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
                <div className="flex justify-between gap-4">
                  <select className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
                    <option value="Og`zaki">Og`zaki</option>
                    <option value="Online">Online</option>
                    <option value="Text">Test</option>
                  </select>
                  <select className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
                    <option value="Og`zaki">Yozma</option>
                    <option value="Online">Online</option>
                    <option value="Text">Test</option>
                  </select>
                  <select className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
                    <option value="Og`zaki">O`qish</option>
                    <option value="Online">Online</option>
                    <option value="Text">Test</option>
                  </select>
                </div>
                {lanInstitutions.length > 1 && (
                  <button
                    className="ml-2 text-red-600"
                    type="button"
                    onClick={() => handleLanDeleteInstitution(index)}
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
            <button
              className="flex items-center justify-end text-base font-medium text-blue-700"
              type="button"
              onClick={handleLanAddInstitution}
            >
              Til qo`shish <FaPlus className="ml-2" />
            </button>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">Mehnat faoliyati:</h3>
            {workInstitutions.map((workInstitution, index) => (
              <div className="grid grid-cols-3 grid-flow-row gap-4" key={index}>
                <input
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  type="text"
                  placeholder="Tashkilot nomi "
                  value={workInstitution.workName}
                  onChange={(e) =>
                    handleWorkInputChange(index, "workName", e.target.value)
                  }
                />
                <input
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  type="text"
                  placeholder="Lavozimi "
                  value={workInstitution.workLavozim}
                  onChange={(e) =>
                    handleWorkInputChange(index, "workLavozim", e.target.value)
                  }
                />
                <select
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  value={workInstitution.startMonth}
                  onChange={(e) =>
                    handleWorkInputChange(index, "startMonth", e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    Boshlangan oy
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  value={workInstitution.startYear}
                  onChange={(e) =>
                    handleWorkInputChange(index, "startYear", e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    Boshlangan yil
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  value={workInstitution.endMonth}
                  onChange={(e) =>
                    handleWorkInputChange(index, "endMonth", e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    Tugallangan oy
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
                  required
                  value={workInstitution.endYear}
                  onChange={(e) =>
                    handleWorkInputChange(index, "endYear", e.target.value)
                  }
                >
                  <option value="" disabled selected hidden>
                    Tugallangan yil
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {workInstitutions.length > 1 && (
                  <button
                    className="text-red-600"
                    type="button"
                    onClick={() => handleWorkDeleteInstitution(index)}
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
            <button
              className="flex items-center justify-end text-base font-medium text-blue-700"
              type="button"
              onClick={handleWorkAddInstitution}
            >
              Mehnat faoliyatini qo'shish <FaPlus className="ml-2" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-8">
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">
              Qachon ishga tusha olasiz?
            </h3>
            <select className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
              <option value="" disabled selected hidden>
                Vaqtni tanlang
              </option>
              <option value="Bugun">Bugun</option>
              <option value="Ertaga">Ertaga</option>
              <option value="Kelasi oy">Kelasi oy</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">
              Bo`sh ish o`rni haqida qayerdan bildingiz?
            </h3>
            <select className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]">
              <option value="" disabled selected hidden>
                Tanlang
              </option>
              <option value="Telegram">Telegram</option>
              <option value="Head Hunter">Head Hunter</option>
              <option value="Instagram">Instagram</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-8">
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">
              Qancha maosh sizni qoniqtiradi?
            </h3>
            <input
              className="w-full mb-4 pl-6 py-4 rounded-3xl bg-[#f6f8f9] text-base font-semibold text-[#9da6a9]"
              type="text"
              placeholder="Summa (so`m)"
            />
          </div>
          <div className="flex w-full items-center px-5 ">
            <input className="w-4 h-4 mr-4" required type="checkbox" />
            <p className="text-base font-semibold text-blue-700">
              Mazkur anketadagi ma`lumotlarim to`liq va haqiqiy ekanligini
              tasdiqlayman
            </p>
          </div>
        </div>
        <button
          className="self-end text-center w-2/12 py-4 px-4 rounded-2xl text-base text-white font-semibold bg-blue-700"
          type="submit"
        >
          Yuborish
        </button>
      </form>
    </>
  );
}
export default Vacancy;