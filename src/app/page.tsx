import Image from "next/image";
import { Navbar } from '@/components/templates';
import { Button, Logo, MenuItem } from '@/components/atoms';
import { LogoBanner } from '@/components/molecules';

export default function Home() {
  return (
    <div
      className="from-main-500 to main-600 flex flex-col justify-start items-center relative overflow-hidden gap-[70px] px-[85px] py-7"
    >
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[1061px] gap-20">
        <Navbar/>
        <div
          className="flex justify-start items-end flex-grow-0 flex-shrink-0 w-[1293px] relative gap-[136px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[742px] w-[661px] gap-[85px]"
          >
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[27px]"
            >
              <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative"
              >
                <div
                  className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[59px] py-[9px]"
                >
                  <p
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left"
                  >
                <span
                  className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left text-[#ffc958]"
                >Follow </span
                ><span
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left text-white"
                  >this blueprint </span
                  ><span
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left text-neutral-100"
                  >
                  to</span
                  ><br/><span
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left text-[#f573b0]"
                  >supercharge </span
                  ><span
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left text-neutral-100"
                  >
                  your </span
                  ><span
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-40 text-[45px] font-bold text-left text-white"
                  >creative production capabilities</span
                  >
                  </p>
                  <p
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-[127px] text-lg font-bold text-left text-white"
                  >
                <span
                  className="self-stretch flex-grow-0 flex-shrink-0 w-[661px] h-[127px] text-lg font-bold text-left text-white"
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
            className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-[813px] w-[612px] absolute left-[743.5px] top-0 gap-8"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[716px] w-[501px] relative gap-5"
            >
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[501px] relative gap-3"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[233px] h-[37px] text-lg font-bold text-left text-white"
                >
                  What is your name?
                </p>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[501px] gap-[15px]"
                >
                  <div
                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[501px] h-[61px] relative gap-[21px] px-[22px] py-2 rounded-[7px] bg-white/[0.08]"
                  >
                    <p className="flex-grow-0 flex-shrink-0 opacity-[0.26] text-lg text-left text-white">
                      i.e John Ford
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[439px] h-[37px] text-lg font-bold text-left text-white"
                >
                  What is your company email?
                </p>
                <div
                  className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[15px]"
                >
                  <div
                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[501px] h-[61px] relative gap-[21px] px-[22px] py-2 rounded-[7px] bg-white/[0.08]"
                  >
                    <p className="flex-grow-0 flex-shrink-0 opacity-[0.26] text-lg text-left text-white">
                      Type your answer
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[439px] h-[37px] text-lg font-bold text-left text-white"
                >
                  How large is your company?
                </p>
                <div
                  className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[61px] relative px-[22px] py-2 rounded-[7px] bg-white/[0.08]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-white">
                    Total Employee Size
                  </p>
                  <div
                    className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[35px] w-[35px] relative gap-2.5 p-2.5 rounded-[3px]"
                  >
                    <p
                      className="flex-grow-0 flex-shrink-0 w-4 h-[30px] text-lg font-black text-left text-[#e4e4e4]"
                    ></p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3"
              >
                <p
                  className="flex-grow-0 flex-shrink-0 w-[439px] h-[37px] text-lg font-bold text-left text-white"
                >
                  Current Marketing Challenges
                </p>
                <div
                  className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[61px] relative px-[22px] py-2 rounded-[7px] bg-white/[0.08]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-white">
                    Choose multiple options
                  </p>
                  <div
                    className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[35px] h-[35px] gap-2.5 p-2.5 rounded-[3px]"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[30px] h-[60px] gap-[66px]"
            ></div>
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[63px] absolute left-[50px] top-[547px] gap-2.5 px-[54px] rounded-[5px]"
              // style="background: linear-gradient(to right, );"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#32327a]">
                SCALE MY CREATIVE PRODUCTION
              </p>
            </div>

            <LogoBanner/>
          </div>
        </div>
      </div>
    </div>
  );
}
