import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro146 from "./pages/mac-book-pro146";
import MacBookPro141 from "./pages/mac-book-pro141";
import MacBookPro147 from "./pages/mac-book-pro147";
import MacBookPro148 from "./pages/mac-book-pro148";
import MacBookPro14 from "./pages/mac-book-pro14";
import MacBookPro144 from "./pages/create-jobs";
import MacBookPro145 from "./pages/mac-book-pro145";
import Tasks from "./pages/tasks";
import JobInfographics from "./pages/job-infographics";
import MacBookPro149 from "./pages/mac-book-pro149";
import MacBookPro1410 from "./pages/mac-book-pro1410";
import MacBookPro1411 from "./pages/mac-book-pro1411";
import MacBookPro143 from "./pages/mac-book-pro143";
import MacBookPro142 from "./pages/mac-book-pro142";
import JobSearchPortal from "./pages/job-search-portal";
import VerifyEmail from "./pages/verify-email";
import ApplyToJob from "./pages/apply-to-job";
import Step from "./pages/step";
import Step1 from "./pages/step1";
import Step2 from "./pages/step2";
import Step3 from "./pages/step3";
import FrontScreen from "./pages/front-screen";

function App() {

  return (
    
    <MacBookPro143 />    
  )
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-3":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-11":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-12":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-1":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/createjobs-2":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/createjobs3":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/dashboard":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/job-infographics":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-13":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/frontenddeveloper":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-8":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/macbook-pro-14-4":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/createajob":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/jobsearch-portal-1":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/verify-email":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/apply-to-job":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/step2":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/step3":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/step4":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/step1":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/frontscreen":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  // return (
  //   <Routes>
  //     <Route path="/" element={<MacBookPro146 />} />
  //     <Route path="/macbook-pro-14-3" element={<MacBookPro141 />} />
  //     <Route path="/macbook-pro-14-11" element={<MacBookPro147 />} />
  //     <Route path="/macbook-pro-14-12" element={<MacBookPro148 />} />
  //     <Route path="/macbook-pro-14-1" element={<MacBookPro14 />} />
  //     <Route path="/createjobs-2" element={<MacBookPro144 />} />
  //     <Route path="/createjobs3" element={<MacBookPro145 />} />
  //     <Route path="/dashboard" element={<Tasks />} />
  //     <Route path="/job-infographics" element={<JobInfographics />} />
  //     <Route path="/macbook-pro-14-13" element={<MacBookPro149 />} />
  //     <Route path="/frontenddeveloper" element={<MacBookPro1410 />} />
  //     <Route path="/macbook-pro-14-8" element={<MacBookPro1411 />} />
  //     <Route path="/macbook-pro-14-4" element={<MacBookPro143 />} />
  //     <Route path="/createajob" element={<MacBookPro142 />} />
  //     <Route path="/jobsearch-portal-1" element={<JobSearchPortal />} />
  //     <Route path="/verify-email" element={<VerifyEmail />} />
  //     <Route path="/apply-to-job" element={<ApplyToJob />} />
  //     <Route path="/step2" element={<Step />} />
  //     <Route path="/step3" element={<Step1 />} />
  //     <Route path="/step4" element={<Step2 />} />
  //     <Route path="/step1" element={<Step3 />} />
  //     <Route path="/frontscreen" element={<FrontScreen />} />
  //   </Routes>
  // );
}
export default App;
