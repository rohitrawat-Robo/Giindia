import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Gril from "./components/Gril.jsx";
import Events from "./components/Events";
import Award from "./components/Award.jsx";
import Career from './components/Career';
import Contact from "./components/ContactUs.jsx";
import Partner from "./components/Partner.jsx";

// ============================================================
// EVENTS
// ============================================================

// 1
import ABESITGRILOrientation from "./components/events/ABESIT GRIL Orientation (28 July - 29 July, 2026).jsx";

// 2
import ABESITGhaziabadDGXUserTraining from "./components/events/ABESIT, Ghaziabad DGX User Training (28 Jan - 1 Feb, 2025).jsx";

// 3
import ABESITGhaziabadGRILOrientation2025 from "./components/events/ABESIT, Ghaziabad GRIL Orientation (2 Sep, 2025).jsx";

// 4
import ABESITGhaziabadGRILOrientation2024 from "./components/events/ABESIT, Ghaziabad GRIL Orientation (10 Sep, 2024).jsx";

// 5
import ABESITGhaziabadGRILOrientation2023 from "./components/events/ABESIT, Ghaziabad GRIL Orientation (23 Nov, 2023).jsx";

// 6
import ABESITGhaziabadAIEnabledWorkshop2025 from "./components/events/ABESIT, Ghaziabad Roadmap to Being AI Enabled Workshop (6 - 7 Aug, 2025).jsx";

// 7
import ABESITGhaziabadAIEnabledWorkshop2024 from "./components/events/ABESIT, Ghaziabad Roadmap to Being AI Enabled Workshop (11 Sep, 2024).jsx";

// 8
import AccelerateDiscoveryDehradun from "./components/events/Accelerate Discovery in Higher Education and Research Seminar at Dehradun (29 Jul, 2022).jsx";

// 9
import AISparxKovalam from "./components/events/AI - SPARX Convention at Kovalam (9 - 11 Aug, 2024).jsx";

// 10
import AISummit from "./components/events/AI Summit (16 - 20 Feb 2026).jsx";

// 11
import BMLUniversity from "./components/events/BML University (19 - 23 Jan, 2026).jsx";

// 12
import BMSBengaluruSystemAdminTraining from "./components/events/BMS, Bengaluru System Admin Training (3 - 5 Mar, 2025).jsx";

// 13
import CSJMUKanpur from "./components/events/CSJMU Kanpur (12 - 30 Jan, 2026).jsx";

// 14
import GalgotiasUniversityDGXUserTraining from "./components/events/Galgotias University DGX User Training (16 - 20 Mar, 2026).jsx";

// 15
import GBUGreaterNoidaAIEnabledWorkshop from "./components/events/GBU, Greater Noida Roadmap to Being AI Enabled Workshop (19 Sep, 2024).jsx";

// 16
import GLBITMGRILOrientation2024 from "./components/events/GLBITM, Greater Noida GRIL Orientation (9 Sep, 2024).jsx";

// 17
import GLBITMGRILOrientation2023 from "./components/events/GLBITM, Greater Noida GRIL Orientation (22 Nov, 2023).jsx";

// 18
import GLBITMOnlineTrainings2024_28 from "./components/events/GLBITM, Greater Noida Online Trainings (28 Nov, 2024).jsx";

// 19
import GLBITMOnlineTrainings2024_29 from "./components/events/GLBITM, Greater Noida Online Trainings (29 Nov, 2024).jsx";

// 20
import GLBITMAIEnabledWorkshop from "./components/events/GLBITM, Greater Noida Roadmap to Being AI Enabled Workshop (9 Sep, 2024).jsx";

// 21
import GujaratTechnologicalUniversityAhmedabad from "./components/events/Gujarat Technological University, Ahmedabad FDP (9 - 11, Sep, 2025).jsx";

// 22
import HigherEducationLeadersConclaveShimla from "./components/events/Higher Education Leader_s Conclave, Shimla (7 May, 2022).jsx";

// 23
import JainCollegeOfEngineeringInstallationTraining from "./components/events/Jain College Of Engineering, Belagavi Installation & Training (14 - 23 Apr, 2025).jsx";

// 24
import JainCollegeOfEngineeringOnlineTraining from "./components/events/Jain College Of Engineering, Belagavi Online Training (10 - 11 Mar, 2025).jsx";

// 25
import KIETInstallationTraining from "./components/events/KIET Group Of Institutions, Ghaziabad Installation & Training (15 - 23 Mar, 2024).jsx";

// 26
import KIETAIEnabledWorkshop from "./components/events/KIET Group Of Institutions, Ghaziabad Roadmap to Being AI Enabled Workshop (27 Jun, 2024).jsx";

// 27
import KIETGhaziabadFDP from "./components/events/KIET, Ghaziabad FDP (14 Feb, 2025).jsx";

// 28
import KLEInstallationTraining from "./components/events/KLE, Hubbali Installation & Training (27 Feb - 4 Mar, 2025).jsx";

// 29
import KLESystemAdminTraining from "./components/events/KLE, Hubbali System Admin Training (16 - 17 May, 2025).jsx";

// 30
import KLSGogteAILabInauguration from "./components/events/KLS Gogte, Belagavi AI Lab Inaugration by AICTE Chairman (1 Dec, 2024).jsx";

// 31
import KLSGogteInstallationTraining from "./components/events/KLS Gogte, Belagavi Installation & Training (18 - 22 Aug, 2025).jsx";

// 32
import MSRamaiahUniversityFDP from "./components/events/MS Ramaiah University, Bangalore FDP (19 - 20 May, 2025).jsx";

// 33
import NvidiaAISummitMumbai from "./components/events/NVIDIA AI Summit, Mumbai (23 - 25 Oct, 2024).jsx";

// 34
import NvidiaGTCSanJose2025 from "./components/events/NVIDIA GTC, San Jose (17 -21 Mar, 2025).jsx";

// 35
import NvidiaGTCSanJose2024 from "./components/events/NVIDIA GTC, San Jose (18 - 21 Mar, 2024).jsx";

// 36
import PresidencyUniversityBengaluru from "./components/events/Presidency University, Bengaluru (11 - 16 December, 2025).jsx";

// 37
import RVCollegeOfEngineeringInstallationTraining from "./components/events/RV College Of Engineering, Bengaluru Installation & Training (27 Feb - 6 Mar, 2024).jsx";

// 38
import ShardaUniversityAgraCybersecurityConclave from "./components/events/Sharda University, Agra AI & Cybersecurity Conclave2K25 (22 Apr, 2025).jsx";

// 39
import ShardaUniversityDGXTraining from "./components/events/Sharda University, Greater Noida DGX System Admin Training & User Training (3 - 8 Nov, 2025).jsx";

// 40
import ShardaUniversityAIEnabledWorkshop from "./components/events/Sharda University, Greater Noida Roadmap to Being AI Enabled Workshop (3 - 4 Oct, 2024).jsx";

// 41
import ShardaUniversityCertificateDistribution from "./components/events/Sharda University, Greater Noida Training Certificate Distribution (26 Sep, 2024).jsx";

// 42
import SRMAP from "./components/events/SRM, AP (11 May - 13 May, 2026).jsx";

// 43
import TechMahindraUniversityHyderabad from "./components/events/Tech Mahindra University,Hyderabad (18 December - 20 December 2025).jsx";

// 44
import VIPSDGXUserTraining from "./components/events/VIPS DGX User Training (20 – 24 July, 2026).jsx";

// 45
import VIPSDGXSystemAdminTraining from "./components/events/VIPS, New Delhi DGX System Admin Training (18 - 20 Dec, 2024).jsx";

// 46
import VIPSDGXUserTraining2025 from "./components/events/VIPS, New Delhi DGX User Training (13 - 17 Jan, 2025).jsx";

// 47
import VIPSFDP from "./components/events/VIPS, New Delhi FDP (8 - 9 Oct, 2025).jsx";

// 48
import VTUDLICertification from "./components/events/VTU, Bangalore DLI Certification at NVIDIA HQ, Bangalore (17 Apr, 2025).jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <Routes>
          {/* ================================================== */}
          {/* MAIN PAGES */}
          {/* ================================================== */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/gril" element={<Gril />} />
          <Route path="/events" element={<Events />} />
          <Route path="/award" element={<Award />} />
          <Route path="/nvidia-elite-partner" element={<Partner />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact/>} />

          {/* ================================================== */}
          {/* 1. ABESIT GRIL ORIENTATION */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-gril-orientation-28-july-29-july-2026"
            element={<ABESITGRILOrientation />}
          />

          {/* ================================================== */}
          {/* 2. ABESIT DGX USER TRAINING */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-ghaziabad-dgx-user-training-28-jan-1-feb-2025"
            element={<ABESITGhaziabadDGXUserTraining />}
          />

          {/* ================================================== */}
          {/* 3. ABESIT GRIL ORIENTATION - 2025 */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-ghaziabad-gril-orientation-2-sep-2025"
            element={<ABESITGhaziabadGRILOrientation2025 />}
          />

          {/* ================================================== */}
          {/* 4. ABESIT GRIL ORIENTATION - 2024 */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-ghaziabad-gril-orientation-10-sep-2024"
            element={<ABESITGhaziabadGRILOrientation2024 />}
          />

          {/* ================================================== */}
          {/* 5. ABESIT GRIL ORIENTATION - 2023 */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-ghaziabad-gril-orientation-23-nov-2023"
            element={<ABESITGhaziabadGRILOrientation2023 />}
          />

          {/* ================================================== */}
          {/* 6. ABESIT AI ENABLED WORKSHOP - 2025 */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-ghaziabad-roadmap-to-being-ai-enabled-workshop-6-7-aug-2025"
            element={<ABESITGhaziabadAIEnabledWorkshop2025 />}
          />

          {/* ================================================== */}
          {/* 7. ABESIT AI ENABLED WORKSHOP - 2024 */}
          {/* ================================================== */}

          <Route
            path="/events/abesit-ghaziabad-roadmap-to-being-ai-enabled-workshop-11-sep-2024"
            element={<ABESITGhaziabadAIEnabledWorkshop2024 />}
          />

          {/* ================================================== */}
          {/* 8. ACCELERATE DISCOVERY */}
          {/* ================================================== */}

          <Route
            path="/events/accelerate-discovery-in-higher-education-and-research-seminar-at-dehradun-29-jul-2022"
            element={<AccelerateDiscoveryDehradun />}
          />

          {/* ================================================== */}
          {/* 9. AI SPARX */}
          {/* ================================================== */}

          <Route
            path="/events/ai-sparx-convention-at-kovalam-9-11-aug-2024"
            element={<AISparxKovalam />}
          />

          {/* ================================================== */}
          {/* 10. AI SUMMIT */}
          {/* ================================================== */}

          <Route
            path="/events/ai-summit-16-20-feb-2026"
            element={<AISummit />}
          />

          {/* ================================================== */}
          {/* 11. BML UNIVERSITY */}
          {/* ================================================== */}

          <Route
            path="/events/bml-university-19-23-jan-2026"
            element={<BMLUniversity />}
          />

          {/* ================================================== */}
          {/* 12. BMS BENGALURU */}
          {/* ================================================== */}

          <Route
            path="/events/bms-bengaluru-system-admin-training-3-5-mar-2025"
            element={<BMSBengaluruSystemAdminTraining />}
          />

          {/* ================================================== */}
          {/* 13. CSJMU */}
          {/* ================================================== */}

          <Route
            path="/events/csjmu-kanpur-12-30-jan-2026"
            element={<CSJMUKanpur />}
          />

          {/* ================================================== */}
          {/* 14. GALGOTIAS UNIVERSITY */}
          {/* ================================================== */}

          <Route
            path="/events/galgotias-university-dgx-user-training-16-20-mar-2026"
            element={<GalgotiasUniversityDGXUserTraining />}
          />

          {/* ================================================== */}
          {/* 15. GBU */}
          {/* ================================================== */}

          <Route
            path="/events/gbu-greater-noida-roadmap-to-being-ai-enabled-workshop-19-sep-2024"
            element={<GBUGreaterNoidaAIEnabledWorkshop />}
          />

          {/* ================================================== */}
          {/* 16. GLBITM GRIL ORIENTATION - 2024 */}
          {/* ================================================== */}

          <Route
            path="/events/glbitm-greater-noida-gril-orientation-9-sep-2024"
            element={<GLBITMGRILOrientation2024 />}
          />

          {/* ================================================== */}
          {/* 17. GLBITM GRIL ORIENTATION - 2023 */}
          {/* ================================================== */}

          <Route
            path="/events/glbitm-greater-noida-gril-orientation-22-nov-2023"
            element={<GLBITMGRILOrientation2023 />}
          />

          {/* ================================================== */}
          {/* 18. GLBITM ONLINE TRAINING - 28 NOV */}
          {/* ================================================== */}

          <Route
            path="/events/glbitm-greater-noida-online-trainings-28-nov-2024"
            element={<GLBITMOnlineTrainings2024_28 />}
          />

          {/* ================================================== */}
          {/* 19. GLBITM ONLINE TRAINING - 29 NOV */}
          {/* ================================================== */}

          <Route
            path="/events/glbitm-greater-noida-online-trainings-29-nov-2024"
            element={<GLBITMOnlineTrainings2024_29 />}
          />

          {/* ================================================== */}
          {/* 20. GLBITM AI ENABLED WORKSHOP */}
          {/* ================================================== */}

          <Route
            path="/events/glbitm-greater-noida-roadmap-to-being-ai-enabled-workshop-9-sep-2024"
            element={<GLBITMAIEnabledWorkshop />}
          />

          {/* ================================================== */}
          {/* 21. GUJARAT TECHNOLOGICAL UNIVERSITY */}
          {/* ================================================== */}

          <Route
            path="/events/gujarat-technological-university-ahmedabad-fdp-9-11-sep-2025"
            element={<GujaratTechnologicalUniversityAhmedabad />}
          />

          {/* ================================================== */}
          {/* 22. HIGHER EDUCATION LEADERS CONCLAVE */}
          {/* ================================================== */}

          <Route
            path="/events/higher-education-leader-s-conclave-shimla-7-may-2022"
            element={<HigherEducationLeadersConclaveShimla />}
          />

          {/* ================================================== */}
          {/* 23. JAIN COLLEGE - INSTALLATION */}
          {/* ================================================== */}

          <Route
            path="/events/jain-college-of-engineering-belagavi-installation-training-14-23-apr-2025"
            element={<JainCollegeOfEngineeringInstallationTraining />}
          />

          {/* ================================================== */}
          {/* 24. JAIN COLLEGE - ONLINE TRAINING */}
          {/* ================================================== */}

          <Route
            path="/events/jain-college-of-engineering-belagavi-online-training-10-11-mar-2025"
            element={<JainCollegeOfEngineeringOnlineTraining />}
          />

          {/* ================================================== */}
          {/* 25. KIET INSTALLATION */}
          {/* ================================================== */}

          <Route
            path="/events/kiet-group-of-institutions-ghaziabad-installation-training-15-23-mar-2024"
            element={<KIETInstallationTraining />}
          />

          {/* ================================================== */}
          {/* 26. KIET AI ENABLED WORKSHOP */}
          {/* ================================================== */}

          <Route
            path="/events/kiet-group-of-institutions-ghaziabad-roadmap-to-being-ai-enabled-workshop-27-jun-2024"
            element={<KIETAIEnabledWorkshop />}
          />

          {/* ================================================== */}
          {/* 27. KIET FDP */}
          {/* ================================================== */}

          <Route
            path="/events/kiet-ghaziabad-fdp-14-feb-2025"
            element={<KIETGhaziabadFDP />}
          />

          {/* ================================================== */}
          {/* 28. KLE INSTALLATION */}
          {/* ================================================== */}

          <Route
            path="/events/kle-hubbali-installation-training-27-feb-4-mar-2025"
            element={<KLEInstallationTraining />}
          />

          {/* ================================================== */}
          {/* 29. KLE SYSTEM ADMIN */}
          {/* ================================================== */}

          <Route
            path="/events/kle-hubbali-system-admin-training-16-17-may-2025"
            element={<KLESystemAdminTraining />}
          />

          {/* ================================================== */}
          {/* 30. KLS GOGTE AI LAB */}
          {/* ================================================== */}

          <Route
            path="/events/kls-gogte-belagavi-ai-lab-inaugration-by-aicte-chairman-1-dec-2024"
            element={<KLSGogteAILabInauguration />}
          />

          {/* ================================================== */}
          {/* 31. KLS GOGTE INSTALLATION */}
          {/* ================================================== */}

          <Route
            path="/events/kls-gogte-belagavi-installation-training-18-22-aug-2025"
            element={<KLSGogteInstallationTraining />}
          />

          {/* ================================================== */}
          {/* 32. MS RAMAIAH */}
          {/* ================================================== */}

          <Route
            path="/events/ms-ramaiah-university-bangalore-fdp-19-20-may-2025"
            element={<MSRamaiahUniversityFDP />}
          />

          {/* ================================================== */}
          {/* 33. NVIDIA AI SUMMIT MUMBAI */}
          {/* ================================================== */}

          <Route
            path="/events/nvidia-ai-summit-mumbai-23-25-oct-2024"
            element={<NvidiaAISummitMumbai />}
          />

          {/* ================================================== */}
          {/* 34. NVIDIA GTC 2025 */}
          {/* ================================================== */}

          <Route
            path="/events/nvidia-gtc-san-jose-17-21-mar-2025"
            element={<NvidiaGTCSanJose2025 />}
          />

          {/* ================================================== */}
          {/* 35. NVIDIA GTC 2024 */}
          {/* ================================================== */}

          <Route
            path="/events/nvidia-gtc-san-jose-18-21-mar-2024"
            element={<NvidiaGTCSanJose2024 />}
          />

          {/* ================================================== */}
          {/* 36. PRESIDENCY UNIVERSITY */}
          {/* ================================================== */}

          <Route
            path="/events/presidency-university-bengaluru-11-16-december-2025"
            element={<PresidencyUniversityBengaluru />}
          />

          {/* ================================================== */}
          {/* 37. RV COLLEGE */}
          {/* ================================================== */}

          <Route
            path="/events/rv-college-of-engineering-bengaluru-installation-training-27-feb-6-mar-2024"
            element={<RVCollegeOfEngineeringInstallationTraining />}
          />

          {/* ================================================== */}
          {/* 38. SHARDA AGRA */}
          {/* ================================================== */}

          <Route
            path="/events/sharda-university-agra-ai-cybersecurity-conclave2k25-22-apr-2025"
            element={<ShardaUniversityAgraCybersecurityConclave />}
          />

          {/* ================================================== */}
          {/* 39. SHARDA DGX TRAINING */}
          {/* ================================================== */}

          <Route
            path="/events/sharda-university-greater-noida-dgx-system-admin-training-user-training-3-8-nov-2025"
            element={<ShardaUniversityDGXTraining />}
          />

          {/* ================================================== */}
          {/* 40. SHARDA AI ENABLED WORKSHOP */}
          {/* ================================================== */}

          <Route
            path="/events/sharda-university-greater-noida-roadmap-to-being-ai-enabled-workshop-3-4-oct-2024"
            element={<ShardaUniversityAIEnabledWorkshop />}
          />

          {/* ================================================== */}
          {/* 41. SHARDA CERTIFICATE DISTRIBUTION */}
          {/* ================================================== */}

          <Route
            path="/events/sharda-university-greater-noida-training-certificate-distribution-26-sep-2024"
            element={<ShardaUniversityCertificateDistribution />}
          />

          {/* ================================================== */}
          {/* 42. SRM AP */}
          {/* ================================================== */}

          <Route path="/events/srm-ap-11-may-13-may-2026" element={<SRMAP />} />

          {/* ================================================== */}
          {/* 43. TECH MAHINDRA UNIVERSITY */}
          {/* ================================================== */}

          <Route
            path="/events/tech-mahindra-university-hyderabad-18-december-20-december-2025"
            element={<TechMahindraUniversityHyderabad />}
          />

          {/* ================================================== */}
          {/* 44. VIPS DGX USER TRAINING 2026 */}
          {/* ================================================== */}

          <Route
            path="/events/vips-dgx-user-training-20-24-july-2026"
            element={<VIPSDGXUserTraining />}
          />

          {/* ================================================== */}
          {/* 45. VIPS SYSTEM ADMIN */}
          {/* ================================================== */}

          <Route
            path="/events/vips-new-delhi-dgx-system-admin-training-18-20-dec-2024"
            element={<VIPSDGXSystemAdminTraining />}
          />

          {/* ================================================== */}
          {/* 46. VIPS USER TRAINING */}
          {/* ================================================== */}

          <Route
            path="/events/vips-new-delhi-dgx-user-training-13-17-jan-2025"
            element={<VIPSDGXUserTraining2025 />}
          />

          {/* ================================================== */}
          {/* 47. VIPS FDP */}
          {/* ================================================== */}

          <Route
            path="/events/vips-new-delhi-fdp-8-9-oct-2025"
            element={<VIPSFDP />}
          />

          {/* ================================================== */}
          {/* 48. VTU DLI CERTIFICATION */}
          {/* ================================================== */}

          <Route
            path="/events/vtu-bangalore-dli-certification-at-nvidia-hq-bangalore-17-apr-2025"
            element={<VTUDLICertification />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
