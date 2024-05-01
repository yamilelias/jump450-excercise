'use client'
import { Navbar } from '@/components/templates';
import { LogoBanner } from '@/components/molecules';
import { MainForm } from '@/components/forms';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

export default function Home() {
  const { track } = useFacebookPixel()

  const handleSubmit = () => {
    track('ViewContent')
  }

  return (
    <div
      className="bg-gradient-to-b from-main-500 to-main-600 lg:px-[150px] px-12 flex py-7 w-[100%]"
    >
      <div className="flex flex-col justify-start items-center">
        <Navbar/>
        <div
          className="flex flex-row flex-wrap lg:justify-between mx-auto mt-20"
        >
          <div
            className="flex flex-col lg:max-w-[50%] justify-start items-start"
          >
            <div
              className="flex flex-col justify-start items-start"
            >
              <div
                className="flex flex-col justify-start items-start"
              >
                <div
                  className="flex flex-col py-[9px] lg:gap-12 gap-4 md:max-w-[80%] sm:max-w-[70%]"
                >
                  <p
                    className="self-stretch text-[45px] font-bold text-left"
                  >
                <span
                  className="self-stretch text-[45px] font-bold text-left text-[#ffc958]"
                >Follow </span
                ><span
                    className="self-stretch text-[45px] font-bold text-left text-white"
                  >this blueprint </span
                  ><span
                    className="self-stretch text-[45px] font-bold text-left text-neutral-100"
                  >
                  to </span
                  ><span
                    className="text-[45px] font-bold text-left text-[#f573b0]"
                  >supercharge </span
                  ><span
                    className="text-[45px] font-bold text-left text-neutral-100"
                  >
                  your </span
                  ><span
                    className="text-[45px] font-bold text-left text-white"
                  >creative production capabilities</span
                  >
                  </p>
                  <p
                    className="text-lg font-bold text-left text-white"
                  >
                <span
                  className="text-lg font-bold text-left text-white"
                >Creative Volume is the single most important predictor of scale across social
                  channels. Use this guide as a roadmap on how to multiply base creatives for an
                  iterative approach to scale.</span
                ><br/>
                  </p>
                </div>
                <div className="relative mt-24">
                  <img
                    src="blueprint.png"
                    className="flex-grow-0 flex-shrink-0 w-[530px] h-[470px] object-cover absolute lg:mt-20 md:mt-8"
                  />
                  <svg
                    width="630"
                    height="50%"
                    viewBox="0 0 856 797"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g filter="url(#filter0_f_813_118)">
                      <ellipse
                        cx="408.5"
                        cy="448.5"
                        rx="335"
                        ry="335.5"
                        fill="#5656BB"
                        fillOpacity="0.5"
                      ></ellipse>
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_813_118"
                        x="-38.9"
                        y="0.599998"
                        width="894.8"
                        height="895.8"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          stdDeviation="56.2"
                          result="effect1_foregroundBlur_813_118"
                        ></feGaussianBlur>
                      </filter>
                    </defs>
                  </svg
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-16"
          >
            <MainForm onSubmit={handleSubmit} />

            <LogoBanner/>
          </div>
        </div>
      </div>
    </div>
  );
}
