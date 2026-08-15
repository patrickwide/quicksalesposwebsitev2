import PricingPlansSectionIcon1 from "../svgs/pricing-plans-section-icon-1";
import PricingPlansSectionIcon2 from "../svgs/pricing-plans-section-icon-2";
import PricingPlansSectionIcon3 from "../svgs/pricing-plans-section-icon-3";
import PricingPlansSectionIcon4 from "../svgs/pricing-plans-section-icon-4";
import PricingPlansSectionIcon5 from "../svgs/pricing-plans-section-icon-5";
import PricingPlansSectionIcon6 from "../svgs/pricing-plans-section-icon-6";
const pricingCardClassName =
  "max-w-[33.3333%] basis-[33.3333%] pl-6 pt-6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 md:max-lg:max-w-[50%] md:max-lg:basis-6/12";
const pricingCardClassName2 =
  "leading-normal font-bold text-xl mb-1 md:max-lg:text-lg md:max-lg:leading-normal";
const pricingCardClassName3 =
  "leading-normal font-extrabold text-3xl md:max-lg:text-2xl md:max-lg:leading-normal";
const pricingCardClassName4 =
  "appearance-none border-solid border-[rgb(255,179,0)] text-[rgb(255,179,0)] leading-[1.71429] font-semibold text-sm w-full h-12 min-w-16 relative inline-flex justify-center items-center cursor-pointer select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-4 py-3 rounded-lg border-2 MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-disableElevation MuiButton-fullWidth hover:border-[rgb(255,111,0)] hover:bg-ploy-background-accent-primary/10 hover:shadow-[currentcolor_0px_0px_0px_0.5px]";
const pricingCardClassName5 =
  "border-solid border-ploy-neutral-inverse-s4/20 h-auto shrink-0 border-t-0 border-b overflow-hidden";
const pricingCardClassName6 =
  "text-ploy-text-secondary leading-normal font-semibold text-xs tracking-wide uppercase block mb-4";

type PricingPlan = {
  value: string;
  className: string;
  data_ploy_component_type: string;
  data_ploy_component_variant: string;
  text: string;
  className_3: string;
  text_1: string;
};

type PricingCardProps = {
  plan: PricingPlan;
};

function PricingCard({ plan }: PricingCardProps) {
  const { text: name, text_1: price } = plan;
  return (
    <button
      tabIndex={0}
      type="button"
      value={plan.value}
      className={plan.className}
      data-ploy-component-type={plan.data_ploy_component_type || undefined}
      data-ploy-component-variant={
        plan.data_ploy_component_variant || undefined
      }
    >
      <div className="flex flex-col items-center gap-0.5">
        <p className="leading-relaxed font-semibold text-sm">{name}</p>
        <span className={plan.className_3}>{price}</span>
      </div>
      <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
    </button>
  );
}

type PricingPlansSectionIconItemProps = {
  text: string;
};

function PricingPlansSectionIconItem({
  text,
}: PricingPlansSectionIconItemProps) {
  return (
    <div className="flex items-start gap-3">
      <PricingPlansSectionIcon2 />
      <p className="text-ploy-text-secondary leading-relaxed text-sm">{text}</p>
    </div>
  );
}

type ListItem2Props = {
  text: string;
  text_1: string;
};

function ListItem2({ text, text_1 }: ListItem2Props) {
  return (
    <div className="max-w-[25%] basis-3/12 pl-6 pt-6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3 md:max-lg:max-w-[50%] md:max-lg:basis-6/12">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-[rgb(255,179,0)] leading-normal font-extrabold text-3xl md:max-lg:text-2xl md:max-lg:leading-normal">
          {text}
        </h3>
        <p className="text-ploy-text-secondary leading-relaxed text-sm text-center">
          {text_1}
        </p>
      </div>
    </div>
  );
}

export const pricingPlans: PricingPlan[] = [
  {
    value: "quarterly",
    className:
      "appearance-none text-ploy-text-secondary leading-[1.71429] font-bold text-sm min-w-[auto] relative flex justify-center items-center cursor-pointer select-none m-1 px-5 py-2 rounded-lg MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-middleButton hover:bg-transparent",
    data_ploy_component_type: "",
    data_ploy_component_variant: "",
    text: "Quarterly",
    className_3: "text-green-500 leading-normal font-semibold text-xs block",
    text_1: "Save 3%",
  },
  {
    value: "semiannual",
    className:
      "appearance-none text-ploy-text-secondary leading-[1.71429] font-bold text-sm min-w-[auto] relative flex justify-center items-center cursor-pointer select-none m-1 px-5 py-2 rounded-lg MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-middleButton hover:bg-transparent",
    data_ploy_component_type: "",
    data_ploy_component_variant: "",
    text: "Semi-Annual",
    className_3: "text-green-500 leading-normal font-semibold text-xs block",
    text_1: "Save 10%",
  },
  {
    value: "annual",
    className:
      "appearance-none bg-[rgb(255,179,0)] text-ploy-text-inverse leading-[1.71429] font-bold text-sm min-w-[auto] relative flex justify-center items-center cursor-pointer select-none m-1 px-5 py-2 rounded-lg MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root Mui-selected MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-middleButton hover:bg-[rgb(255,111,0)]",
    data_ploy_component_type: "button",
    data_ploy_component_variant: "primary",
    text: "Annual",
    className_3:
      "text-ploy-text-inverse/90 leading-normal font-semibold text-xs block",
    text_1: "Save 20%",
  },
  {
    value: "biennial",
    className:
      "appearance-none text-ploy-text-secondary leading-[1.71429] font-bold text-sm min-w-[auto] relative flex justify-center items-center cursor-pointer select-none m-1 px-5 py-2 rounded-lg MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-middleButton hover:bg-transparent",
    data_ploy_component_type: "",
    data_ploy_component_variant: "",
    text: "2 Years",
    className_3: "text-green-500 leading-normal font-semibold text-xs block",
    text_1: "Save 30%",
  },
  {
    value: "triennial",
    className:
      "appearance-none text-ploy-text-secondary leading-[1.71429] font-bold text-sm min-w-[auto] relative flex justify-center items-center cursor-pointer select-none m-1 px-5 py-2 rounded-lg MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-lastButton hover:bg-transparent",
    data_ploy_component_type: "",
    data_ploy_component_variant: "",
    text: "3 Years",
    className_3: "text-green-500 leading-normal font-semibold text-xs block",
    text_1: "Save 40%",
  },
];

export const pricingPlansSectionIcons: PricingPlansSectionIconItemProps[] = [
  { text: "1 User Account" },
  { text: "1 Branch/Location" },
  { text: "Basic Reporting" },
  { text: "Email Support" },
  { text: "eTIMS Integration" },
  { text: "50 Products" },
  { text: "Cloud-based Access" },
  { text: "Mobile App Access" },
];

export const pricingPlansSectionIcons2: PricingPlansSectionIconItemProps[] = [
  { text: "5 User Accounts" },
  { text: "3 Branches/Locations" },
  { text: "Advanced Reporting & Analytics" },
  { text: "Priority Support (24/7 Chat)" },
  { text: "eTIMS Integration" },
  { text: "Unlimited Products" },
  { text: "API Access" },
  { text: "Mobile App Access" },
  { text: "Custom User Roles & Permissions" },
];

export const pricingPlansSectionIcons3: PricingPlansSectionIconItemProps[] = [
  { text: "15 User Accounts" },
  { text: "Unlimited Branches" },
  { text: "Custom Reporting & Data Export" },
  { text: "Dedicated Account Manager" },
  { text: "eTIMS Integration" },
  { text: "Unlimited Everything" },
  { text: "Advanced API Access" },
  { text: "White Label Options" },
  { text: "Custom Integrations" },
];

export const pricingPlansSectionIcons4: PricingPlansSectionIconItemProps[] = [
  { text: "Unlimited Users" },
  { text: "Custom Development" },
  { text: "SLA Guarantees" },
  { text: "On-premise Options" },
  { text: "Dedicated Support Team" },
  { text: "Custom eTIMS Workflows" },
  { text: "Advanced Security Features" },
  { text: "Custom Reporting Solutions" },
];

export const items2: ListItem2Props[] = [
  { text: "All-In-One", text_1: "eTIMS + POS + Support" },
  { text: "KSh 0", text_1: "Setup fees" },
  { text: "5 Min", text_1: "To get started" },
  { text: "24/7", text_1: "Support always on" },
];

export default function PricingPlansSection() {
  return (
    <div className="bg-ploy-background-primary max-lg:py-20 lg:py-[7.5rem]">
      <div>
        <div className="w-full max-w-[75rem] mx-auto px-6 MuiContainer-root MuiContainer-maxWidthLg">
          <div className="flex flex-col gap-12">
            <div className="text-center flex flex-col items-center gap-6">
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <span className="text-[rgb(255,179,0)] leading-normal font-bold text-sm tracking-widest uppercase">
                  {"PRICING PLANS"}
                </span>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <h2 className="leading-snug font-bold text-[2.75rem] md:max-lg:text-3xl md:max-lg:leading-snug">
                  {"Simple, Transparent Pricing"}
                </h2>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <p className="text-ploy-text-secondary leading-normal text-lg max-w-[37.5rem]">
                  {
                    "Choose the right plan for your business. Save up to 40% with annual billing."
                  }
                </p>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <div className="border-solid border-cyan-500/25 bg-cyan-500/10 inline-flex items-center gap-2 px-5 py-2 rounded-[2.5rem] border">
                  <PricingPlansSectionIcon1 />
                  <span className="text-sky-700 leading-normal font-semibold text-xs block">
                    {"No initialization fees"}
                  </span>
                </div>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <div className="border-solid border-ploy-accent-primary/20 bg-ploy-background-accent-primary/10 text-center p-4 rounded-xl border">
                  <p className="text-[rgb(255,179,0)] leading-relaxed font-semibold text-sm">
                    {
                      "🎉 Save up to 30% with annual billing • No setup fees • Get started in minutes"
                    }
                  </p>
                </div>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <div className="mt-4">
                  <div
                    role="group"
                    className="border-solid border-ploy-border-primary/10 bg-ploy-background-primary flex flex-wrap justify-center gap-1 shadow-[0px_2px_1px_-1px_rgba(145,158,171,0.2),0px_1px_1px_0px_rgba(145,158,171,0.14),0px_1px_3px_0px_rgba(145,158,171,0.12)] p-1 rounded-xl MuiToggleButtonGroup-root border"
                  >
                    <button
                      tabIndex={0}
                      type="button"
                      value="monthly"
                      className="appearance-none text-ploy-text-secondary leading-[1.71429] font-bold text-sm min-w-[auto] relative flex justify-center items-center cursor-pointer select-none m-1 px-5 py-2 rounded-lg MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-firstButton hover:bg-transparent"
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <p className="leading-relaxed font-semibold text-sm">
                          {"Monthly"}
                        </p>
                      </div>
                      <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                    </button>
                    {pricingPlans.map((item, index) => (
                      <PricingCard key={index} plan={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%_+_24px)] flex flex-wrap justify-center -ml-6 -mt-6 MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
              <div className={pricingCardClassName}>
                <div
                  data-ploy-animation-fx-hint="parallax fade-in"
                  className="h-full"
                >
                  <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-primary text-ploy-text-primary h-full relative z-0 flex flex-col shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] duration-300 rounded-2xl MuiCard-root hover:[translate:0_-4px] hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.16)] overflow-hidden border">
                    <div className="border-solid border-ploy-neutral-inverse-s4/20 pt-6 pb-4 px-6 border-b">
                      <h5 className={pricingCardClassName2}>Lite</h5>
                      <p className="text-ploy-text-secondary leading-relaxed text-sm">
                        {"Ideal for solo entrepreneurs"}
                      </p>
                    </div>
                    <div className="pt-6 pb-4 px-6">
                      <div className="flex flex-col gap-2">
                        <h3 className={pricingCardClassName3}>KSh 5,002</h3>
                        <p className="text-ploy-text-secondary leading-relaxed text-sm">
                          {"per year"}
                        </p>
                        <span className="text-ploy-text-secondary leading-normal text-xs block">
                          {"KSh 417/month"}
                        </span>
                        <div className="border-solid border-ploy-neutral-inverse-s4/20 mt-2 pt-3 border-t">
                          <span className="text-green-500 leading-normal font-bold text-xs">
                            {"Save KSh 1,250 (20% off)"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pb-6 px-6">
                      <button
                        tabIndex={0}
                        type="button"
                        className={pricingCardClassName4}
                        data-ploy-component-type="button"
                        data-ploy-component-variant="outline"
                      >
                        {"Get Started "}
                        <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                      </button>
                    </div>
                    <hr className={pricingCardClassName5} />
                    <div className="grow pt-5 pb-6 px-6">
                      <span className={pricingCardClassName6}>
                        {"What's included" + " "}
                      </span>
                      <div className="flex flex-col gap-3">
                        {pricingPlansSectionIcons.map((item, index) => (
                          <PricingPlansSectionIconItem key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={pricingCardClassName}>
                <div
                  data-ploy-animation-fx-hint="parallax fade-in"
                  className="h-full"
                >
                  <div className="border-solid border-[rgb(255,179,0)] bg-ploy-background-primary text-ploy-text-primary h-full relative z-0 flex flex-col shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] duration-300 rounded-2xl border-2 MuiCard-root hover:[translate:0_-4px] hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.16)] overflow-hidden">
                    <div className="border-solid border-ploy-neutral-inverse-s4/20 bg-ploy-background-accent-primary/5 pt-6 pb-4 px-6 border-b">
                      <div className="text-nowrap bg-[rgb(255,179,0)] text-ploy-text-inverse font-bold text-xs whitespace-nowrap h-6 max-w-full inline-flex justify-center items-center transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] mb-4 rounded-lg MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorDefault MuiChip-filledDefault hover:bg-gray-600">
                        <span className="text-nowrap block px-2 MuiChip-label MuiChip-labelSmall overflow-hidden">
                          {"RECOMMENDED"}
                        </span>
                      </div>
                      <h5 className={pricingCardClassName2}>Professional</h5>
                      <p className="text-ploy-text-secondary leading-relaxed text-sm">
                        {"For growing businesses"}
                      </p>
                    </div>
                    <div className="pt-6 pb-4 px-6">
                      <div className="flex flex-col gap-2">
                        <h3 className={pricingCardClassName3}>KSh 11,990</h3>
                        <p className="text-ploy-text-secondary leading-relaxed text-sm">
                          {"per year"}
                        </p>
                        <span className="text-ploy-text-secondary leading-normal text-xs block">
                          {"KSh 999/month"}
                        </span>
                        <div className="border-solid border-ploy-neutral-inverse-s4/20 mt-2 pt-3 border-t">
                          <span className="text-green-500 leading-normal font-bold text-xs">
                            {"Save KSh 2,998 (20% off)"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pb-6 px-6">
                      <button
                        tabIndex={0}
                        type="button"
                        className="appearance-none bg-[rgb(255,179,0)] text-ploy-text-inverse leading-[1.71429] font-semibold text-sm w-full h-12 min-w-16 relative inline-flex justify-center items-center shadow-[0px_3px_1px_-2px_rgba(145,158,171,0.2),0px_2px_2px_0px_rgba(145,158,171,0.14),0px_1px_5px_0px_rgba(145,158,171,0.12)] cursor-pointer select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-4 py-3 rounded-lg MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorInherit MuiButton-disableElevation MuiButton-fullWidth hover:bg-[rgb(255,111,0)] hover:shadow-[0px_4px_16px_rgba(255,179,0,0.4)]"
                        data-ploy-component-type="button"
                        data-ploy-component-variant="primary"
                      >
                        {"Get Started "}
                        <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                      </button>
                    </div>
                    <hr className={pricingCardClassName5} />
                    <div className="grow pt-5 pb-6 px-6">
                      <span className={pricingCardClassName6}>
                        {"What's included" + " "}
                      </span>
                      <div className="flex flex-col gap-3">
                        {pricingPlansSectionIcons2.map((item, index) => (
                          <PricingPlansSectionIconItem key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={pricingCardClassName}>
                <div
                  data-ploy-animation-fx-hint="parallax fade-in"
                  className="h-full"
                >
                  <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-primary text-ploy-text-primary h-full relative z-0 flex flex-col shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] duration-300 rounded-2xl MuiCard-root hover:[translate:0_-4px] hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.16)] overflow-hidden border">
                    <div className="border-solid border-ploy-neutral-inverse-s4/20 pt-6 pb-4 px-6 border-b">
                      <h5 className={pricingCardClassName2}>Business</h5>
                      <p className="text-ploy-text-secondary leading-relaxed text-sm">
                        {"For established enterprises"}
                      </p>
                    </div>
                    <div className="pt-6 pb-4 px-6">
                      <div className="flex flex-col gap-2">
                        <h3 className={pricingCardClassName3}>KSh 23,990</h3>
                        <p className="text-ploy-text-secondary leading-relaxed text-sm">
                          {"per year"}
                        </p>
                        <span className="text-ploy-text-secondary leading-normal text-xs block">
                          {"KSh 1,999/month"}
                        </span>
                        <div className="border-solid border-ploy-neutral-inverse-s4/20 mt-2 pt-3 border-t">
                          <span className="text-green-500 leading-normal font-bold text-xs">
                            {"Save KSh 5,998 (20% off)"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pb-6 px-6">
                      <button
                        tabIndex={0}
                        type="button"
                        className={pricingCardClassName4}
                        data-ploy-component-type="button"
                        data-ploy-component-variant="outline"
                      >
                        {"Get Started "}
                        <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                      </button>
                    </div>
                    <hr className={pricingCardClassName5} />
                    <div className="grow pt-5 pb-6 px-6">
                      <span className={pricingCardClassName6}>
                        {"What's included" + " "}
                      </span>
                      <div className="flex flex-col gap-3">
                        {pricingPlansSectionIcons3.map((item, index) => (
                          <PricingPlansSectionIconItem key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full basis-full pl-6 pt-6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-12 md:max-lg:max-w-[50%] md:max-lg:basis-6/12">
                <div
                  data-ploy-animation-fx-hint="parallax fade-in"
                  className="h-full"
                >
                  <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-primary text-ploy-text-primary h-full relative z-0 flex shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] duration-300 rounded-2xl MuiCard-root hover:[translate:0_-4px] hover:shadow-[0px_16px_32px_-4px_rgba(145,158,171,0.16)] md:max-lg:flex-col lg:flex-row overflow-hidden border">
                    <div className="border-solid border-ploy-neutral-inverse-s1 min-w-[17.5rem] pt-6 pb-4 px-6 border-r md:max-lg:min-w-[auto] md:max-lg:border-r-0 md:max-lg:border-b lg:border-b-0">
                      <h5 className={pricingCardClassName2}>Enterprise</h5>
                      <p className="text-ploy-text-secondary leading-relaxed text-sm mb-4">
                        {"For large organizations"}
                      </p>
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className={pricingCardClassName3}>Custom</h3>
                        <p className="text-ploy-text-secondary leading-relaxed text-sm">
                          {"Contact us for pricing"}
                        </p>
                      </div>
                      <button
                        tabIndex={0}
                        type="button"
                        className={pricingCardClassName4}
                        data-ploy-component-type="button"
                        data-ploy-component-variant="outline"
                      >
                        {"Contact Sales "}
                        <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                      </button>
                    </div>
                    <div className="grow p-6">
                      <span className={pricingCardClassName6}>
                        {"What's included" + " "}
                      </span>
                      <div className="grid flex-col gap-3 grid-cols-[repeat(2,1fr)] md:max-lg:grid-cols-none">
                        {pricingPlansSectionIcons4.map((item, index) => (
                          <PricingPlansSectionIconItem key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <div className="border-solid border-ploy-accent-tertiary bg-emerald-100/10 text-ploy-text-primary relative z-0 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] transition-shadow duration-300 p-6 rounded-2xl MuiCard-root overflow-hidden border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-500 w-10 h-10 flex shrink-0 justify-center items-center rounded-full">
                    <PricingPlansSectionIcon3 />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="leading-tight font-bold text-lg">
                      {"How to Pay via M-Pesa"}
                    </h6>
                    <p className="text-ploy-text-secondary leading-relaxed text-sm">
                      {"Pay after your workspace is created"}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="border-solid border-ploy-accent-tertiary bg-[rgb(202,253,245)] px-3 py-1 rounded-lg border text-ploy-text-primary">
                      <span className="text-sky-700 leading-normal font-bold text-xs tracking-wide uppercase">
                        {"Paybill"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[calc(100%_+_24px)] flex flex-wrap -ml-6 -mt-6 MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                  <div className="max-w-[58.3333%] basis-[58.3333%] pl-6 pt-6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 md:max-lg:max-w-full md:max-lg:basis-full">
                    <div className="flex flex-col gap-3">
                      <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-primary flex items-center gap-4 p-4 rounded-xl border">
                        <PricingPlansSectionIcon4 />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-ploy-text-secondary leading-normal text-xs block">
                            {"Business Name"}
                          </span>
                          <p
                            style={{ fontFamily: "monospace" }}
                            className="leading-relaxed font-extrabold text-sm tracking-wide"
                          >
                            {"CTRL LTD"}
                          </p>
                          <span className="text-ploy-text-secondary leading-normal italic text-xs block">
                            {
                              "COMPREHENSIVE TECHNOLOGY RESEARCH LABORATORIES LIMITED"
                            }
                          </span>
                        </div>
                      </div>
                      <div className="border-solid border-emerald-500 bg-emerald-100/20 flex items-center gap-4 p-4 rounded-xl border">
                        <PricingPlansSectionIcon5 />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-ploy-text-secondary leading-normal text-xs block">
                            {"Paybill Number"}
                          </span>
                          <p
                            style={{ fontFamily: "monospace" }}
                            className="leading-relaxed font-extrabold text-sm tracking-wide"
                          >
                            {"4214101"}
                          </p>
                        </div>
                      </div>
                      <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-primary flex items-center gap-4 p-4 rounded-xl border">
                        <PricingPlansSectionIcon6 />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-ploy-text-secondary leading-normal text-xs block">
                            {"Account Number"}
                          </span>
                          <p
                            style={{ fontFamily: "monospace" }}
                            className="leading-relaxed font-extrabold text-sm tracking-wide"
                          >
                            {"Your KRA PIN"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[41.6667%] basis-[41.6667%] pl-6 pt-6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5 md:max-lg:max-w-full md:max-lg:basis-full">
                    <div className="border-solid border-ploy-neutral-inverse-s4/20 h-full flex flex-col justify-center pl-6 border-l ploy-styles-rule-0 md:max-lg:border-ploy-neutral-inverse-s1 md:max-lg:pl-0 md:max-lg:border-l-0">
                      <span className="text-ploy-neutral-inverse-500 leading-normal font-bold text-xs uppercase block mb-2">
                        {"M-Pesa → Paybill"}
                      </span>
                      <p className="text-ploy-text-secondary leading-[1.8] text-sm">
                        {
                          "Use your KRA PIN as the account number (case-insensitive). For multiple branches, use the schema name from your dashboard as the account number instead."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-secondary text-ploy-text-primary relative z-0 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] transition-shadow duration-300 p-8 rounded-2xl MuiCard-root overflow-hidden border">
                <h6 className="leading-normal font-bold text-lg text-center mb-6">
                  {"Why Kenyan Businesses Choose QuickSales-POS"}
                </h6>
                <div className="w-[calc(100%_+_24px)] flex flex-wrap -ml-6 -mt-6 MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                  {items2.map((item, index) => (
                    <ListItem2 key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
