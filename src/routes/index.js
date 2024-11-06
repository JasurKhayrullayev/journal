import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Journals from "../components/journals/Journals";
import Confrence from "../components/confrence/Confrence";
import Organization from "../components/organization/Organization";
import Contact from "../components/contact/Contact";
import ConfrencePath from "../components/confrencePath/ConfrencePath";
import Vacancy from "../components/vacancy/Vacancy";

const AllRoutes = () => {
  return (
    <>
      <Header />
      <Main />
      <Journals />
      <Confrence />
      <Organization />
      <Contact />
      <Routes>
        <Route path="/confrence" element={<ConfrencePath/>}/>
        <Route path="/vacancy" element={<Vacancy/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
