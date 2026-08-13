import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gril from "./components/Gril.jsx";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Industries from "./components/Industries";
import CTA from "./components/CTA";

import SRMUniversityAP from "./components/events/SRMUniversityAP";
import EconomicTimesConclaveAwards from "./components/events/EconomicTimesConclaveAwards";
import GalgotiasUniversity from "./components/events/GalgotiasUniversity";
import BMLMunjalUniversity from "./components/events/BMLMunjalUniversity";
import ChhatrapatiShahuJiMaharajUniversity from "./components/events/ChhatrapatiShahuJiMaharajUniversity";
import TechMahindraUniversityHyderabad from "./components/events/TechMahindraUniversityHyderabad";
import PresidencyUniversityBangalore from "./components/events/PresidencyUniversityBangalore";
import ShardaUniversityGreaterNoida from "./components/events/ShardaUniversityGreaterNoida";
import VivekanandaInstituteProfessionalStudies from "./components/events/VivekanandaInstituteProfessionalStudies";
import GujaratTechnologicalUniversityAhmedabad from "./components/events/GujaratTechnologicalUniversityAhmedabad";
import ABESITCollegeGRILTrainingProgram from "./components/events/ABESITCollegeGRILTrainingProgram";
import VisvesvarayaTechnologicalUniversity from "./components/events/VisvesvarayaTechnologicalUniversity";
import JainCollegeOfEngineeringBelagavi from "./components/events/JainCollegeOfEngineeringBelagavi";
import AnandSchoolEngineeringTechnologyShardaAgra from "./components/events/AnandSchoolEngineeringTechnologyShardaAgra";
import KLETechnologicalUniversity from "./components/events/KLETechnologicalUniversity";
import MSRamaiahUniversityAppliedSciences from "./components/events/MSRamaiahUniversityAppliedSciences";
import NvidiaGenAI5StarPartnerAward from "./components/events/NvidiaGenAI5StarPartnerAward";
import NvidiaDGXKIET from "./components/events/NvidiaDGXKIET";
import GLBajajAIEnabledInstitute from "./components/events/GLBajajAIEnabledInstitute";
import AISparx2024 from "./components/events/AISparx2024";
import NvidiaDGXRVCCollege from "./components/events/NvidiaDGXRVCCollege";
import GLBITMGRILOrientation from "./components/events/GLBITMGRILOrientation";
import ABESITGhaziabadGRILOrientation from "./components/events/ABESITGhaziabadGRILOrientation";
import AccelerateDiscoveryDehradun from "./components/events/AccelerateDiscoveryDehradun";
import HigherEducationLeadersConclaveShimla from "./components/events/HigherEducationLeadersConclaveShimla";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gril" element={<Gril />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<CTA />} />

          <Route path="/events/srm-university-ap-11-may-2026-13-may-2026" element={<SRMUniversityAP />} />
          <Route path="/events/economic-times-conclave-awards-2026" element={<EconomicTimesConclaveAwards />} />
          <Route path="/events/galgotias-university-16-march-2026-20-march-2026" element={<GalgotiasUniversity />} />
          <Route path="/events/bml-munjal-university-haryana-19-january-2026-23-january-2026" element={<BMLMunjalUniversity />} />
          <Route path="/events/chhatrapati-shahu-ji-maharaj-university-kanpur-from-january-12-january-30-january-2026" element={<ChhatrapatiShahuJiMaharajUniversity />} />
          <Route path="/events/tech-mahindra-university-hyderabad-18-december-2025-20-december-2025" element={<TechMahindraUniversityHyderabad />} />
          <Route path="/events/presidency-university-bangalore-11-december-2025-16-december-2025" element={<PresidencyUniversityBangalore />} />
          <Route path="/events/sharda-university-greater-noida-06-november-2025-08-november-2025" element={<ShardaUniversityGreaterNoida />} />
          <Route path="/events/vivekananda-institute-of-professional-studies-vips-new-delhi-08-october-2025-09-october-2025" element={<VivekanandaInstituteProfessionalStudies />} />
          <Route path="/events/gujarat-technological-university-ahmedabad-09-september-2025-11-september-2025" element={<GujaratTechnologicalUniversityAhmedabad />} />
          <Route path="/events/abesit-college-gril-training-program-orientation-2nd-september-2025" element={<ABESITCollegeGRILTrainingProgram />} />
          <Route path="/events/visvesvaraya-technological-university-16-april-2025-17-april-2025" element={<VisvesvarayaTechnologicalUniversity />} />
          <Route path="/events/jain-college-of-engineering-belagavi-14-april-2025-23-april-2025" element={<JainCollegeOfEngineeringBelagavi />} />
          <Route path="/events/anand-school-of-engineering-technology-sharda-university-agra-17-april-2025" element={<AnandSchoolEngineeringTechnologyShardaAgra />} />
          <Route path="/events/kle-technological-university" element={<KLETechnologicalUniversity />} />
          <Route path="/events/m-s-ramaiah-university-of-applied-sciences-bangalore" element={<MSRamaiahUniversityAppliedSciences />} />
          <Route path="/events/nvidia-gen-ai-5-star-partner-award" element={<NvidiaGenAI5StarPartnerAward />} />
          <Route path="/events/nvidia-dgx-installation-and-training-at-kiet-group-of-institutions-muradnagar-29-feb-6-march-2024" element={<NvidiaDGXKIET />} />
          <Route path="/events/gl-bajaj-institute-of-technology-and-management-roadmap-to-becoming-an-ai-enabled-institute-9-sep-2024" element={<GLBajajAIEnabledInstitute />} />
          <Route path="/events/ai-sparx-2024-9-11-august-2024" element={<AISparx2024 />} />
          <Route path="/events/nvidia-dgx-installation-and-training-at-rv-college-bangalore-29-feb-6-march-2024" element={<NvidiaDGXRVCCollege />} />
          <Route path="/events/glbitm-greater-noida-gril-orientation-22-nov-2023" element={<GLBITMGRILOrientation />} />
          <Route path="/events/abesit-ghaziabad-gril-orientation-23-nov-2023" element={<ABESITGhaziabadGRILOrientation />} />
          <Route path="/events/accelerate-discovery-in-higher-education-and-research-seminar-at-dehradun-29-jul-2022" element={<AccelerateDiscoveryDehradun />} />
          <Route path="/events/higher-education-leader-s-conclave-shimla-7-may-2022" element={<HigherEducationLeadersConclaveShimla />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;