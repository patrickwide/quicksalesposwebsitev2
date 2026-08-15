import HeroSectionIcon2 from "../svgs/hero-section-icon-2";
import HeroSectionIcon3 from "../svgs/hero-section-icon-3";
import HelpContactSectionIcon1 from "../svgs/help-contact-section-icon-1";
import HelpContactSectionIcon2 from "../svgs/help-contact-section-icon-2";

/**
 * @ployComponent
 * @ployComponentId help-contact-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from label: Need Help? Contact Us
 */
export default function HelpContactSection() {
  return (
    <div className="max-lg:py-12 lg:py-20">
      <div className="w-full max-w-[75rem] mx-auto px-6 MuiContainer-root MuiContainer-maxWidthLg">
        <div
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--ploy-accent-secondary-500) 0%, var(--ploy-accent-primary-500) 100%)",
          }}
          className="text-ploy-text-primary text-center relative z-0 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)] transition-shadow duration-300 p-12 rounded-2xl MuiCard-root md:max-lg:p-8 overflow-hidden"
        >
          <div className="flex flex-col items-center gap-8">
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <h2 className="text-black leading-snug font-black text-4xl max-w-[37.5rem] md:max-lg:text-3xl md:max-lg:leading-snug">
                {"Switch to eTIMS. Stay Safe."}
              </h2>
            </div>
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <p className="text-black leading-normal font-medium text-lg max-w-[36.25rem] md:max-lg:text-base md:max-lg:leading-normal">
                {
                  "QuickSales-POS makes tax compliance simple for Kenyan businesses. Sell faster, stay KRA-compliant, and manage everything from one app — no stress, no fines."
                }
              </p>
            </div>
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <div className="w-auto flex gap-4">
                <button
                  tabIndex={0}
                  type="button"
                  className="appearance-none border-solid border-black/40 bg-[rgba(0,0,0,0.1)] text-black leading-[1.71429] font-bold text-base h-12 min-w-[11.25rem] relative flex justify-center items-center backdrop-blur-sm cursor-pointer select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-6 py-3 rounded-lg border-2 MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:bg-[rgba(0,0,0,0.18)]"
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
                  className="border-solid border-black/60 text-black leading-[1.71429] font-bold text-base h-12 min-w-[11.25rem] relative flex justify-center items-center select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-6 py-3 rounded-lg border-2 MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:border-[currentcolor] hover:bg-[rgba(0,0,0,0.1)] hover:shadow-[currentcolor_0px_0px_0px_0.5px]"
                  data-ploy-component-type="button"
                  data-ploy-component-variant="outline"
                >
                  <span className="flex -ml-1 mr-2 MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge">
                    <HeroSectionIcon3 />
                  </span>
                  {" Chat on WhatsApp "}
                  <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
                </a>
              </div>
            </div>
            <div data-ploy-animation-fx-hint="parallax fade-in">
              <div className="flex flex-col items-center gap-4">
                <span className="text-black leading-normal font-bold text-xs tracking-[2px] uppercase block opacity-80">
                  {"Need Help? Contact Us"}
                </span>
                <div className="flex items-center gap-4">
                  <a
                    tabIndex={0}
                    href="tel:+254740194874"
                    className="border-solid border-black/60 text-black leading-[1.71429] font-semibold text-sm h-12 min-w-16 relative flex justify-center items-center select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-6 py-2.5 rounded-3xl MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:border-[currentcolor] hover:bg-black hover:shadow-[currentcolor_0px_0px_0px_0.5px] hover:text-[rgb(255,179,0)] border"
                    data-ploy-component-type="button"
                    data-ploy-component-variant="outline"
                  >
                    <span className="flex -ml-1 mr-2 MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge">
                      <HelpContactSectionIcon1 />
                    </span>
                    {" +254 740 194874 "}
                    <span className="pointer-events-none absolute z-0 block rounded-3xl inset-0 overflow-hidden" />
                  </a>
                  <a
                    tabIndex={0}
                    href="mailto:sales@quicksalespos.com"
                    className="border-solid border-black/60 text-black leading-[1.71429] font-semibold text-sm h-12 min-w-16 relative flex justify-center items-center select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-6 py-2.5 rounded-3xl MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:border-[currentcolor] hover:bg-black hover:shadow-[currentcolor_0px_0px_0px_0.5px] hover:text-[rgb(255,179,0)] border"
                    data-ploy-component-type="button"
                    data-ploy-component-variant="outline"
                  >
                    <span className="flex -ml-1 mr-2 MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge">
                      <HelpContactSectionIcon2 />
                    </span>
                    {" sales@quicksalespos.com "}
                    <span className="pointer-events-none absolute z-0 block rounded-3xl inset-0 overflow-hidden" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
