// Router.jsx

import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import ProductPage from "./components/productView/ProductPage";
import ServicePage from "./components/Service/ServicePage";
import About from "./components/manageItems/ManageItems";
import SignIn from "./components/UserProfile/SignIn";
import SignUp from "./components/UserProfile/SignUp";
import ProfilePage from "./components/dummyComponents/ProfilePage";
import TermsPage from "./components/dummyComponents/TermsPage";
import MedicalRecordUpload from "./components/MedicalRecordUpload/MedicalRecordUpload";
import PaymentGateway from "./components/dummyComponents/PaymentGateway";
import RecordManagement from "./components/dummyComponents/RecordManagement";
import DoctorPatientChat from "./components/dummyComponents/ChatWindow";
import EducationalContentPage from "./components/dummyComponents/EducationContentPage";
import ArticleDetail from "./components/dummyComponents/ArticleDetails";
import HealthGuideDetails from "./components/dummyComponents/HealthGuideDetails";
import { navLinks, initialRole } from "./RBAC"; // Import RBAC logic
import ABACTable from "./components/superAdmin/superAdminHome/ABACTable";

function Router() {
  const storedData = localStorage.getItem("formData");
  const isFormDataExists = !!storedData;
  const [role, setRole] = React.useState(initialRole);

  return (
    <BrowserRouter>
      <NavBar role={role} setRole={setRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/product/:productId" element={<ProductPage />} />

        <Route path="/tryOn/:productId" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/recordManagement" element={<RecordManagement />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/uploadRecords" element={<MedicalRecordUpload />} />
        <Route path="/payments" element={<PaymentGateway />} />
        <Route path="/abac" element={<ABACTable />} />
        <Route path="/Pat_DocComm" element={<DoctorPatientChat />} />
        <Route path="/EducationalContent" element={<EducationalContentPage/>} />
        <Route path="/article/:id" element={<ArticleDetail />} /> 
        <Route path="/healthGuide/:id" element={<HealthGuideDetails />} />


      </Routes>
    </BrowserRouter>
  );
}

export default Router;
