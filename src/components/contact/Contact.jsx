import { useLocation } from "react-router-dom";
import Map from "../map/Map";

function Contact() {
  const location = useLocation();
  return (
    <>
      {!(
        location.pathname.includes("confrence") ||
        location.pathname.includes("vacancy")
      ) && (
        <div className="container mx-auto gap-6 flex mt-12" id="contact">
          <div className="flex flex-col w-1/2 bg-white rounded-[40px] px-10 py-10">
            <h3 className="font-sans font-semibold text-4xl text-[#020105]">
              Мы находимся <br />в офисе Ташкент
            </h3>
            <div className="flex my-11 gap-48">
              <span>
                <p className="font-sans font-medium text-[#020105] text-base mb-5">
                  Телефон:
                </p>
                <a
                  className="font-sans font-normal text-sm text-[#353437]"
                  href="tel:+998712030101"
                >
                  (+99871) 203-01-01, 242-48-93
                </a>
              </span>
              <span>
                <p className="font-sans font-medium text-[#020105] text-base mb-5">
                  E-mail:
                </p>
                <a
                  className="font-sans font-normal text-sm text-[#353437]"
                  href="mailto:farmkomitet@ssv.uz"
                >
                  farmkomitet@ssv.uz
                </a>
              </span>
            </div>
            <p className="font-sans font-medium text-[#020105] text-base mb-5">
              Адресс:
            </p>
            <a
              className="font-sans font-normal text-base text-[#353437]"
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/c7bnm13mnsL49nqy6"
            >
              Republic of Uzbekistan, Tashkent, Mirabad district, Kizil
              <br /> arvat str. 2-passage, house 37
            </a>
          </div>
          <div className="">
            <Map />
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
