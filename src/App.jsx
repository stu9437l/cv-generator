import Mainform from "./component/web/mainForm";
import { Routes, Route } from "react-router-dom";
import CVReview from "./component/web/cv_review";
import OTPVerify from "./component/web/otpVerify";
import MobileIndex from "./component/mobile";
import PersonalDetail from "./component/mobile/personalDetail";
function App() {
  return (
    <Routes>
      <Route path="/web/form" element={<Mainform />} />
      <Route path="/web/cv-review" element={<CVReview />} />
      <Route path="/web/otp-verify" element={<OTPVerify />} />
      <Route path="/mobile" element={<MobileIndex />}></Route>
      <Route path="/personal-detail" element={<PersonalDetail />} />
    </Routes>
  );
}

export default App;
