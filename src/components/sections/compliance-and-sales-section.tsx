import type { ReactNode } from "react";
import ComplianceAndSalesSectionIcon1 from "../svgs/compliance-and-sales-section-icon-1";
import ComplianceAndSalesSectionIcon2 from "../svgs/compliance-and-sales-section-icon-2";
import ComplianceAndSalesSectionIcon3 from "../svgs/compliance-and-sales-section-icon-3";
import ComplianceAndSalesSectionIcon4 from "../svgs/compliance-and-sales-section-icon-4";
import ComplianceAndSalesSectionIcon5 from "../svgs/compliance-and-sales-section-icon-5";
import ComplianceAndSalesSectionIcon6 from "../svgs/compliance-and-sales-section-icon-6";

/**
 * @ployComponent
 * @ployComponentId compliance-and-sales-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: Compliance and Sales, Together
 */
type ComplianceAndSalesSectionIconItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ComplianceAndSalesSectionIconItem({
  icon,
  title,
  description,
}: ComplianceAndSalesSectionIconItemProps) {
  return (
    <div className="max-w-[33.3333%] basis-[33.3333%] pl-6 pt-6 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 md:max-lg:max-w-[50%] md:max-lg:basis-6/12">
      <div data-ploy-animation-fx-hint="parallax fade-in">
        <div className="bg-ploy-background-primary text-ploy-text-primary h-full relative z-0 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] duration-300 p-8 rounded-2xl MuiCard-root hover:[translate:0_-6px] hover:shadow-[0px_20px_40px_-4px_rgba(145,158,171,0.16)] overflow-hidden">
          <div className="flex flex-col gap-5">
            <div className="border-solid border-ploy-accent-primary/20 bg-ploy-background-accent-primary/10 text-[rgb(255,179,0)] w-14 h-14 flex justify-center items-center rounded-2xl border">
              {icon}
            </div>
            <h6 className="leading-normal font-bold text-lg">{title}</h6>
            <p className="text-ploy-text-secondary leading-[1.7] text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const complianceAndSalesSectionIcons: ComplianceAndSalesSectionIconItemProps[] =
  [
    {
      icon: <ComplianceAndSalesSectionIcon1 />,
      title: "Lightning-Fast Checkout",
      description:
        "Process sales in seconds with a clean, intuitive interface — full KRA eTIMS compliance included out of the box",
    },
    {
      icon: <ComplianceAndSalesSectionIcon2 />,
      title: "Real-Time Analytics",
      description:
        "See exactly how your business is performing with live sales dashboards, top products, and revenue tracking",
    },
    {
      icon: <ComplianceAndSalesSectionIcon3 />,
      title: "Smart Inventory",
      description:
        "Track stock levels automatically, get low-stock alerts, and never oversell again",
    },
    {
      icon: <ComplianceAndSalesSectionIcon4 />,
      title: "Customer Management",
      description:
        "Keep a full history of every customer, track repeat buyers, and build lasting relationships",
    },
    {
      icon: <ComplianceAndSalesSectionIcon5 />,
      title: "KRA eTIMS Ready",
      description:
        "Fully integrated with KRA eTIMS — issue compliant e-receipts and submit returns without lifting a finger",
    },
    {
      icon: <ComplianceAndSalesSectionIcon6 />,
      title: "Multi-Branch Support",
      description:
        "Manage multiple locations from one dashboard — stock, sales, and staff all in one place",
    },
  ];

export default function ComplianceAndSalesSection({
  items = complianceAndSalesSectionIcons,
}: {
  items?: ComplianceAndSalesSectionIconItemProps[];
}) {
  return (
    <div className="bg-ploy-background-secondary max-lg:py-20 lg:py-28">
      <div className="w-full max-w-[75rem] mx-auto px-6 MuiContainer-root MuiContainer-maxWidthLg">
        <div className="flex flex-col gap-16">
          <div className="text-center flex flex-col items-center gap-4">
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <h2 className="leading-snug font-extrabold text-[2.75rem] md:max-lg:text-3xl md:max-lg:leading-snug">
                {"Compliance and Sales, Together"}
              </h2>
            </div>
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <h6 className="text-ploy-text-secondary leading-normal font-bold text-lg max-w-[37.5rem]">
                {
                  "Everything your business needs — built for Kenya, built for eTIMS"
                }
              </h6>
            </div>
          </div>
          <div className="w-[calc(100%_+_24px)] flex flex-wrap -ml-6 -mt-6 MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
            {items.map((item, index) => (
              <ComplianceAndSalesSectionIconItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
