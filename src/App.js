import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layouts/Layout';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';

function App() {
  return (
    <BrowserRouter basename='/vamana'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
