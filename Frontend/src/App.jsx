// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './src/components/Navigation/Navbar';
import Sidebar from './src/components/Navigation/Sidebar';
import Footer from './src/components/Navigation/Footer';
// Importing all the components
import Introduction from './src/components/about/Introduction/Introduction';
import Benefits from './src/components/about/Benefits/Benefits';
import Functions from './src/components/about/Functions/Functions';
import IQACStaff from './src/components/about/IQACStaff/IQACStaff';
import Members from './src/components/about/Members/Members';
import Objectives from './src/components/about/Objectives/Objectives';
import Strategies from './src/components/about/Strategies/Strategies';

import NAAC from './src/components/accreditation/NAAC/NAAC';
import NBA from './src/components/accreditation/NBA/NBA';

import Contact from './src/components/contact/Contact';

import AcademicResearch from './src/components/profile/AcademicResearch/AcademicResearch';
import Consultancy from './src/components/profile/Consultancy/Consultancy';
import Patents from './src/components/profile/Patents/Patents';
import StatisticalInformation from './src/components/profile/StatisticalInformation/StatisticalInformation';

import NIRF from './src/components/rankings/NIRF/NIRF';
import Ranking1 from './src/components/rankings/Ranking1/Ranking1';
import Ranking2 from './src/components/rankings/Ranking2/Ranking2';

import AQAR from './src/components/reports/AQAR/AQAR';
import AnnualReport from './src/components/reports/AnnualReport/AnnualReport';
import Minutes from './src/components/reports/Minutes/Minutes';
import Red from './src/components/Navigation/Red';
import LoginPage from './src/components/Authentication/Login/Login';


function App() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <Red />


      <main>
        <div className="flex flex-1">
          {/* Sidebar */}

          <Sidebar />
          {/* Main Content */}
          <main className="flex-3 p-4 m-2 bg-gray-100">
            
            <Routes>
              {/* About Routes */}
              <Route path="/about/introduction" element={<Introduction />} />
              <Route path="/about/benefits" element={<Benefits />} />
              <Route path="/about/functions" element={<Functions />} />
              <Route path="/about/iqacstaff" element={<IQACStaff />} />
              <Route path="/about/members" element={<Members />} />
              <Route path="/about/objectives" element={<Objectives />} />
              <Route path="/about/strategies" element={<Strategies />} />

              {/* Accreditation Routes */}
              <Route path="/accreditation/naac" element={<NAAC />} />
              <Route path="/accreditation/nba" element={<NBA />} />

              {/* Contact Route */}
              <Route path="/contact" element={<Contact />} />

              {/* Profile Routes */}
              <Route path="/profile/academic-research" element={<AcademicResearch />} />
              <Route path="/profile/consultancy" element={<Consultancy />} />
              <Route path="/profile/patents" element={<Patents />} />
              <Route path="/profile/statistical-information" element={<StatisticalInformation />} />

              {/* Rankings Routes */}
              <Route path="/rankings/nirf" element={<NIRF />} />
              <Route path="/rankings/ranking" element={<Ranking1 />} />
              <Route path="/rankings/ranking2" element={<Ranking2 />} />

              {/* Reports Routes */}
              <Route path="/reports/aqar" element={<AQAR />} />
              <Route path="/reports/annual-report" element={<AnnualReport />} />
              <Route path="/reports/minutes" element={<Minutes />} />
              {/* <Route path="/login" element={<LoginPage />} /> */}


              {/* Default Route */}
              <Route path="*" element={<Introduction />} />
            </Routes>
          </main>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;