import { useState } from "react";
import organizations from "../../db/organization";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function Organization() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const visibleOrganizations = organizations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (startIndex + itemsPerPage < organizations.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const location = useLocation();
  return (
    <>
      {!(
        location.pathname.includes("confrence") ||
        location.pathname.includes("vacancy")
      ) && (
        <div className="container mx-auto mt-32 relative" id="organization">
          <h3 className="text-[#020105] font-bold text-4xl font-sans leading-normal">
            Организации
          </h3>
          <div className="relative">
            <ul className="flex mt-5 justify-between gap-6">
              {visibleOrganizations.map((organization) => (
                <li key={organization.id} className="bg-[#FFFFFF] rounded-2xl">
                  <div className="py-6 px-6 flex items-center gap-4">
                    <img
                      width={64}
                      height={64}
                      src={organization.img}
                      alt="organization logo"
                    />
                    <h4 className="font-sans font-semibold text-2xl text-[#353437]">
                      {organization.name}
                    </h4>
                  </div>
                  <div className="pl-24 pb-6">
                    <a
                      className="flex font-sans text-xs font-normal text-[#5D5D5F] mb-4"
                      href="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CiLocationOn className="self-center w-4 h-4 mr-1.5 text-[#3C4BDC]" />
                      {organization.address}
                    </a>
                    <a
                      className="flex font-sans text-xs font-normal text-[#5D5D5F] mb-4"
                      target="_blank"
                      rel="noreferrer"
                      href="tel:+74996580103"
                    >
                      <BsTelephone className="self-center w-4 h-4 mr-1.5 text-[#3C4BDC]" />
                      {organization.number}
                    </a>
                    <a
                      className="flex font-sans text-xs font-normal text-[#5D5D5F] mb-4"
                      target="_blank"
                      rel="noreferrer"
                      href="tel:+74996580103"
                    >
                      <span className="flex mr-1.5">
                        <BsTelephone className="self-center w-4 h-4 text-[#3C4BDC]" />
                        <p className=" text-[#3C4BDC] text-[9px]">Facs:</p>
                      </span>
                      {organization.number}
                    </a>
                    <a
                      className="flex font-sans text-xs font-normal text-[#5D5D5F] mb-4"
                      href="mailto:{organization.mail}"
                    >
                      <CiMail className="self-center w-4 h-4 mr-1.5 text-[#3C4BDC]" />
                      {organization.mail}
                    </a>
                    <a
                      className="flex font-sans text-xs font-normal text-[#5D5D5F] mb-4"
                      href="http://www.frccsc.ru"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiWorld className="self-center w-4 h-4 mr-1.5 text-[#3C4BDC]" />
                      {organization.url}
                    </a>
                    <span className="flex font-sans text-xs font-normal text-[#5D5D5F] mb-4">
                      <p className="text-[#3C4BDC] font-medium mr-1.5">ISSN</p>
                      {organization.issn}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="p-3.5 w-12 h-12 border rounded-full disabled:opacity-50 absolute top-1/3 -left-5 bg-white"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= organizations.length}
              className="p-3.5 w-12 h-12 border rounded-full disabled:opacity-50 absolute top-1/3 -right-5 bg-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Organization;
