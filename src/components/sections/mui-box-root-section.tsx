import MuiBoxRootSectionIcon1 from "../svgs/mui-box-root-section-icon-1";
import MuiBoxRootSectionIcon2 from "../svgs/mui-box-root-section-icon-2";

/**
 * @ployComponent
 * @ployComponentId mui-box-root-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from semantic markup
 */
export default function MuiBoxRootSection() {
  return (
    <div className="border-solid border-ploy-neutral-primary-s3/20 bg-ploy-background-primary border-b">
      <div className="w-full mx-auto MuiContainer-root MuiContainer-maxWidthLg min-[1200px]:max-w-[75rem] max-md:px-4 md:px-6">
        <div className="flex justify-between items-center max-md:gap-2 max-md:py-4 md:gap-4 md:py-6">
          <div>
            <div className="flex items-center max-md:gap-1 md:gap-3">
              <a
                href="https://www.quicksalespos.com/"
                style={{ fontVariationSettings: "inherit" }}
                className="text-[rgb(0,167,111)] [font-weight:inherit] contents MuiLink-root MuiLink-underlineHover hover:underline"
              >
                <img
                  src="https://storage.googleapis.com/ployai/f8da281c-999c-42f7-846c-6d3f46384194/user/dfb6e86f-slurp-quicksales-logo.webp"
                  alt="QuickSales-POS Logo"
                  className="object-contain max-md:w-8 max-md:h-8 md:w-11 md:h-11 overflow-clip"
                />
              </a>
              <h5 className="text-nowrap leading-normal font-extrabold whitespace-nowrap md:max-lg:text-xl md:max-lg:leading-normal lg:text-2xl lg:leading-normal">
                {"QuickSales- "}
                <span
                  style={{
                    animationName: "moveGradient",
                    animationDuration: "3s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    backgroundImage:
                      "linear-gradient(90deg, var(--ploy-accent-primary-500), var(--ploy-accent-secondary-500), var(--ploy-accent-primary-500))",
                    backgroundPosition: "77.2147% 50%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-nowrap bg-[length:200%_100%]"
                >
                  {"POS"}
                </span>
              </h5>
            </div>
          </div>
          <div>
            <div className="flex items-center max-md:gap-1 md:max-lg:gap-2 lg:gap-4">
              <button
                tabIndex={0}
                type="button"
                className="appearance-none text-[rgb(255,179,0)] leading-[1.71429] font-semibold text-sm h-12 min-w-16 relative justify-center items-center cursor-pointer select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-2.5 py-2 rounded-lg MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeLarge MuiButton-textSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:bg-ploy-background-accent-primary/10 max-md:hidden"
                data-ploy-component-type="button"
                data-ploy-component-variant="primary"
              >
                {"Sign In "}
                <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
              </button>
              <button
                tabIndex={0}
                type="button"
                className="appearance-none border-solid border-[rgb(255,179,0)] text-[rgb(255,179,0)] leading-[1.71429] font-semibold text-sm h-12 min-w-16 relative justify-center items-center cursor-pointer select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-4 py-1.5 rounded-lg border-2 MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:border-[rgb(255,111,0)] hover:bg-ploy-background-accent-primary/10 hover:shadow-[currentcolor_0px_0px_0px_0.5px] hover:text-[rgb(255,111,0)] max-lg:hidden"
                data-ploy-component-type="button"
                data-ploy-component-variant="outline"
              >
                {"Sign Up "}
                <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
              </button>
              <a
                tabIndex={0}
                href="https://wa.me/254740194874"
                target="_blank"
                className="flex bg-[rgb(255,179,0)] text-ploy-text-inverse leading-[1.71429] font-semibold text-sm h-12 min-w-16 relative justify-center items-center select-none transition-[background-color,box-shadow,border-color,color] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1),cubic-bezier(0.4,0,0.2,1)] px-4 py-2 rounded-lg MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedInherit MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorInherit MuiButton-disableElevation hover:bg-[rgb(255,111,0)] hover:shadow-[0px_4px_16px_rgba(255,179,0,0.4)] max-md:hidden"
                data-ploy-component-type="button"
                data-ploy-component-variant="primary"
              >
                <span className="flex -ml-1 mr-2 MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge">
                  <MuiBoxRootSectionIcon1 />
                </span>
                {" Contact "}
                <span className="pointer-events-none absolute z-0 block rounded-lg inset-0 overflow-hidden" />
              </a>
              <button
                tabIndex={0}
                type="button"
                style={{ fontFamily: "Arial" }}
                className="flex appearance-none text-[rgb(255,179,0)] text-2xl text-center relative shrink-0 justify-center items-center cursor-pointer select-none transition-[background-color] p-2 rounded-full MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium min-[600px]:hidden hover:bg-transparent max-md:flex md:hidden"
              >
                <MuiBoxRootSectionIcon2 />
                <span className="pointer-events-none absolute z-0 block rounded-full inset-0 overflow-hidden" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
