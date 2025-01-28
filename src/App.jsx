import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop'; 

// Toast import globally
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Frontend Pages and Services
import Web_Development from './components/services/Web_Development';
import App_Development from './components/services/App_Development';
import Software_Development from './components/services/Software_Development';
import Graphic_Design from './components/services/Graphic_Design';
import UIDesign from './components/services/UIDesign';
import SocialMediaMarketing from './components/services/SocialMediaMarketing';
import ContentWriting from './components/services/ContentWriting';
import SEO from './components/services/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Faq from './pages/Faq';
import TermsAndCondition from './pages/TermsAndCondition';


// Admin Pages
import Login from './components/admin/auth/Login';
import Logout from './components/admin/auth/Logout';
import PrivateRoute from './components/admin/auth/PrivateRoute'; // Import the PrivateRoute
import DefaultLayout from './components/admin/dashboard/Dashboard';
import Dashboard from './components/admin/dashboard/index';
import ServicesList from './components/admin/services/ServicesList';
import AddService from './components/admin/services/AddService';
import UpdateService from './components/admin/services/UpdateService';

// Frontend Layout (includes Navbar and Footer)
const FrontendLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Include ScrollToTop component here */}

      {/* Toast Container placed globally */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Routes>
        {/* Client Side Routes with Frontend Layout */}
        <Route path="/" element={<FrontendLayout><Home /></FrontendLayout>} />
        <Route path="/about" element={<FrontendLayout><About /></FrontendLayout>} />
        <Route path="/services" element={<FrontendLayout><Services /></FrontendLayout>} />
        <Route path="/services/web-development" element={<FrontendLayout><Web_Development /></FrontendLayout>} />
        <Route path="/services/app-development" element={<FrontendLayout><App_Development /></FrontendLayout>} />
        <Route path="/services/system-software-development" element={<FrontendLayout><Software_Development /></FrontendLayout>} />
        <Route path="/services/ui-ux-design" element={<FrontendLayout><UIDesign /></FrontendLayout>} />
        <Route path="/services/graphic-design" element={<FrontendLayout><Graphic_Design /></FrontendLayout>} />
        <Route path="/services/social-media-marketing" element={<FrontendLayout><SocialMediaMarketing /></FrontendLayout>} />
        <Route path="/services/content-writing" element={<FrontendLayout><ContentWriting /></FrontendLayout>} />
        <Route path="/services/search-engine-optimization" element={<FrontendLayout><SEO /></FrontendLayout>} />
        <Route path="/team" element={<FrontendLayout><Team /></FrontendLayout>} />
        <Route path="/careers" element={<FrontendLayout><Careers /></FrontendLayout>} />
        <Route path="/contact" element={<FrontendLayout><Contact /></FrontendLayout>} />
        <Route path="/faq" element={<FrontendLayout><Faq /></FrontendLayout>} />
        <Route path="/terms-and-conditions" element={<FrontendLayout><TermsAndCondition /></FrontendLayout>} />



        {/* Admin Side Routes */}
        <Route path="/login/admin" element={<Login />} />
        
        {/* Protect the dashboard route */}
        <Route path="/dashboard/logout" element={<PrivateRoute><DefaultLayout><Logout /></DefaultLayout></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><DefaultLayout><Dashboard /></DefaultLayout></PrivateRoute>} />


        {/* Admin Side Services Routes */}
        <Route path="/dashboard/services" element={<PrivateRoute><DefaultLayout><ServicesList /></DefaultLayout></PrivateRoute>} />
        <Route path="/dashboard/services/create" element={<PrivateRoute><DefaultLayout><AddService /></DefaultLayout></PrivateRoute>} />
        <Route path="/dashboard/services/:id/edit" element={<PrivateRoute><DefaultLayout><UpdateService /></DefaultLayout></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
