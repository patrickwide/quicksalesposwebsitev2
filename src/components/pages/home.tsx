import MuiBoxRootSection from "../sections/mui-box-root-section";
import HeroSection from "../sections/hero-section";
import ComplianceAndSalesSection from "../sections/compliance-and-sales-section";
import PricingPlansSection from "../sections/pricing-plans-section";
import GoETimsNoSection from "../sections/go-e-tims-no-section";
import HelpContactSection from "../sections/help-contact-section";

export default function Page() {
  return (
    <div id="root" className="w-full h-full">
      <div className="h-full">
        <div className="bg-ploy-background-primary">
          <MuiBoxRootSection />
          <HeroSection />
          <ComplianceAndSalesSection />
          <PricingPlansSection />
          <GoETimsNoSection />
          <HelpContactSection />
        </div>
      </div>
    </div>
  );
}
