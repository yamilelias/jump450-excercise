export const MainForm = () => (
  <div className="flex justify-center items-center flex-col gap-8">
    <div
      className="flex flex-col justify-center items-center relative gap-6"
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
    <button type="button"
            className="justify-center items-center font-extrabold text-lg text-indigo-800 uppercase w-[400px] h-[63px] bg-gradient-to-r from-yellow-200 to-red-500 hover:bg-gradient-to-l hover:transition-all focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Scale
      my Creative Product
    </button>
  </div>
)