export const Button = ({ children }) => (
  <button
    className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[207px] relative gap-2.5 px-[54px] rounded-[5px] bg-[#ffc958] min-w-[207px] min-h-[60px]"
  >
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#32327a] uppercase">
      {children}
    </p>
  </button>
)