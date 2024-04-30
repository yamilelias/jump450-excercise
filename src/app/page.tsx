import Image from "next/image";
import { Navbar } from '@/components/templates';
import { LogoBanner } from '@/components/molecules';
import { MainForm } from '@/components/forms';

export default function Home() {
  return (
    <div
      className="from-main-500 to-main-600 flex px-[85px] py-7"
    >
      <div className="flex flex-col justify-start items-center">
        <Navbar/>
        <div
          className="flex flex-row flex-wrap w-full"
        >
          <div
            className="flex flex-col max-w-[50%] justify-start items-start"
          >
            <div
              className="flex flex-col justify-start items-start self-stretch"
            >
              <div
                className="flex flex-col justify-start items-start self-stretch"
              >
                <div
                  className="flex flex-col justify-center items-start self-stretch py-[9px] gap-12"
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
                    className="self-stretch text-[45px] font-bold text-left text-[#f573b0]"
                  >supercharge </span
                  ><span
                    className="self-stretch text-[45px] font-bold text-left text-neutral-100"
                  >
                  your </span
                  ><span
                    className="self-stretch text-[45px] font-bold text-left text-white"
                  >creative production capabilities</span
                  >
                  </p>
                  <p
                    className="self-stretch text-lg font-bold text-left text-white"
                  >
                <span
                  className="self-stretch text-lg font-bold text-left text-white"
                >Creative Volume is the single most important predictor of scale across social
                  channels. Use this guide as a roadmap on how to multiply base creatives for an
                  iterative approach to scale.</span
                ><br/>
                  </p>
                </div>
                <svg
                  width="856"
                  height="897"
                  viewBox="0 0 856 897"
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
                      fill-opacity="0.5"
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
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
                <img
                  src="blueprint.png"
                  className="flex-grow-0 flex-shrink-0 w-[530px] h-[470px] object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col max-w-[50%] justify-center items-center gap-16"
          >
            <MainForm />

            <LogoBanner/>
          </div>
        </div>
      </div>
    </div>
  );
}
