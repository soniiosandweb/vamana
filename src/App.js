import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layouts/Layout';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layouts/PageNotFound';
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>

      <CookieConsent
        location="top"
        buttonText="Okay, Got It"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", color: "#000", padding: "0 20px", top: "76px", alignItems: "center" }}
        buttonStyle={{ color: "#fff", fontSize: "16px", backgroundColor: "#C27C00", padding: "10px 30px" }}
        expires={150}
        overlay={true}
        containerClasses="cookie-banner"
        overlayStyle={{backgroundColor: "#00000099"}}
      >
        Vamana Residences is only acting as a medium for providing online advertising services. Vamana Residences does not in any way facilitate and cannot be deemed to be facilitating sales between developers and the visitors/users of the website. The display of information on Vamana Residences with respect to a developer or project does not guarantee that the developer / project has registered under the Real Estate (Regulation and Development), 2016 or is compliant with the same. Before deciding to purchase or taking any other action, you are requested to exercise due caution and to independently validate and verify all information about the project.
      </CookieConsent>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
