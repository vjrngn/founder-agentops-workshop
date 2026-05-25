import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import WorkshopPromiseSection from "./components/WorkshopPromiseSection";
import QuoteBand from "./components/QuoteBand";
import WhoThisIsForSection from "./components/WhoThisIsForSection";
import WhatYouWillLearnSection from "./components/WhatYouWillLearnSection";
import AgendaSection from "./components/AgendaSection";
import FrameworkSection from "./components/FrameworkSection";
import AboutHostSection from "./components/AboutHostSection";
import AboutTechSwamySection from "./components/AboutTechSwamySection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { quotes } from "./content";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <WorkshopPromiseSection />
        <QuoteBand>{quotes.goal}</QuoteBand>
        <WhoThisIsForSection />
        <WhatYouWillLearnSection />
        <AgendaSection />
        <QuoteBand>{quotes.workbench}</QuoteBand>
        <FrameworkSection />
        <AboutHostSection />
        <AboutTechSwamySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
