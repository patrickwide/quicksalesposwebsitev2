import HeroSectionIcon1 from "../svgs/hero-section-icon-1";
import HeroSectionIcon2 from "../svgs/hero-section-icon-2";
import HeroSectionIcon3 from "../svgs/hero-section-icon-3";
import HeroSectionIcon4 from "../svgs/hero-section-icon-4";

/**
 * @ployComponent
 * @ployComponentId hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 */
type ListItemProps = {
  className: string;
};

function ListItem({ className }: ListItemProps) {
  return <div className={className} />;
}

export const heroSection: ListItemProps[] = [
  {
    className:
      "bg-zinc-800 w-0.5 h-[13%] absolute -right-0.5 rounded-tr-sm rounded-br-sm top-[22%]",
  },
  {
    className:
      "bg-zinc-800 w-0.5 h-[6%] absolute -left-0.5 rounded-tl-sm rounded-bl-sm top-[18%]",
  },
  {
    className:
      "bg-zinc-800 w-0.5 h-[10%] absolute -left-0.5 rounded-tl-sm rounded-bl-sm top-[27%]",
  },
  {
    className:
      "bg-zinc-800 w-0.5 h-[10%] absolute -left-0.5 rounded-tl-sm rounded-bl-sm top-[40%]",
  },
];

export default function HeroSection({
  items = heroSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <div className="relative max-lg:pt-20 max-lg:pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <div
        style={{
          backgroundImage:
            "radial-gradient(at 50% 0%, rgba(255, 179, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
        className="pointer-events-none h-3/5 absolute top-0 inset-x-0"
      />
      <div className="w-full max-w-[75rem] relative mx-auto px-6 MuiContainer-root MuiContainer-maxWidthLg">
        <div className="w-[calc(100%_+_64px)] flex flex-wrap items-center -ml-16 -mt-16 MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 MuiGrid-spacing-md-8 md:max-lg:w-[calc(100%_+_48px)] md:max-lg:-ml-12 md:max-lg:-mt-12">
          <div className="max-w-[50%] basis-6/12 pl-16 pt-16 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 md:max-lg:max-w-full md:max-lg:basis-full md:max-lg:pl-12 md:max-lg:pt-12">
            <div className="flex flex-col gap-8">
              <div data-ploy-animation-fx-hint="fade-in">
                <div className="text-nowrap border-solid border-ploy-accent-primary/30 bg-ploy-background-accent-primary/10 text-[rgb(255,179,0)] font-bold text-sm whitespace-nowrap h-8 max-w-full inline-flex justify-center items-center transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-3 py-5 rounded-lg MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault hover:bg-gray-600 border">
                  <HeroSectionIcon1 />
                  <span className="text-nowrap block px-3 MuiChip-label MuiChip-labelMedium overflow-hidden">
                    {"KRA eTIMS Certified"}
                  </span>
                </div>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <h1 className="leading-[1.1] font-black text-[3.5rem] tracking-[-1.5px] md:max-lg:text-5xl md:max-lg:leading-[1.1]">
                  <span>
                    {"Making" + " "}
                    <span className="text-[rgb(255,179,0)]">
                      {" " + "Tax Easy"}
                    </span>
                  </span>
                  <span>{" " + "for Kenyan Businesses"}</span>
                </h1>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <h6 className="text-ploy-text-secondary leading-[1.7] font-normal text-lg md:max-lg:text-base md:max-lg:leading-[1.7]">
                  {
                    "Our app talks to KRA for you. Send e-receipts in one click, track your sales, and manage your business — no stress, no fines, everything in one place."
                  }
                </h6>
              </div>
              <div data-ploy-animation-fx-hint="parallax fade-in">
                <div className="flex gap-4">
                  <button
                    tabIndex={0}
                    type="button"
                    className="appearance-none bg-[rgb(255,179,0)] text-ploy-text-inverse leading-[1.71429] font-bold text-base h-12 min-w-[11.25rem] relative flex justify-center items-center cursor-pointer select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-8 py-3.5 rounded-lg MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:bg-[rgb(255,111,0)] hover:shadow-[0px_4px_16px_rgba(255,179,0,0.4)]"
                    data-ploy-component-type="button"
                    data-ploy-component-variant="primary"
                  >
                    <span className="flex -ml-1 mr-2 MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge">
                      <HeroSectionIcon2 />
                    </span>
                    {" Get Started "}
                    <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                  </button>
                  <a
                    tabIndex={0}
                    href="https://wa.me/254740194874"
                    target="_blank"
                    className="border-solid border-[rgb(255,179,0)] text-[rgb(255,179,0)] leading-[1.71429] font-bold text-base h-12 min-w-[11.25rem] relative flex justify-center items-center select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-6 py-3.5 rounded-lg border-2 MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:border-[rgb(255,111,0)] hover:bg-ploy-background-accent-primary/10 hover:shadow-[currentcolor_0px_0px_0px_0.5px] hover:text-[rgb(255,111,0)]"
                    data-ploy-component-type="button"
                    data-ploy-component-variant="outline"
                  >
                    <span className="flex -ml-1 mr-2 MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge">
                      <HeroSectionIcon3 />
                    </span>
                    {" Contact Us "}
                    <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                  </a>
                </div>
                <p className="text-[rgb(255,179,0)] leading-relaxed font-semibold text-sm flex items-center gap-1 mt-3">
                  <HeroSectionIcon4 />
                  {"Free demo account included • No payment required"}
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] flex basis-6/12 justify-center pl-16 pt-16 MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 md:max-lg:max-w-full md:max-lg:basis-full md:max-lg:pl-12 md:max-lg:pt-12">
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <div className="w-[15.625rem] relative mx-auto md:max-lg:w-[13.75rem]">
                <div className="pointer-events-none bg-[rgb(255,179,0)] h-8 absolute opacity-[0.18] blur-[18px] rounded-full -bottom-5 inset-x-[15%]" />
                <div className="bg-ploy-background-inverse relative outline outline-1 outline-[rgba(255,255,255,0.08)] p-2 rounded-[2rem] text-ploy-text-inverse">
                  <div className="bg-ploy-neutral-primary-100 aspect-[9_/_19.5] relative rounded-[1.4375rem] overflow-hidden">
                    <div className="-translate-x-1/2 bg-ploy-background-inverse w-2.5 h-2.5 absolute z-10 rounded-full left-2/4 top-2.5 text-ploy-text-inverse" />
                    <img
                      src="https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/a89af80a-slurp-preview.png"
                      alt="QuickSales-POS dashboard preview"
                      className="w-full h-full object-cover object-[50%_0%] overflow-clip"
                    />
                    <div className="-translate-x-1/2 bg-ploy-background-primary/20 w-20 h-1 absolute z-[5] rounded-sm left-2/4 bottom-1.5" />
                  </div>
                  {items.map((item, index) => (
                    <ListItem key={index} {...item} />
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
