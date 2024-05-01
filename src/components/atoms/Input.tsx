interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: any) => void;
}

export const Input = ({ id, label, type, placeholder, onChange }: InputProps) => (
  <div
    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[501px] relative gap-3"
  >
    <label
      className="flex-grow-0 flex-shrink-0 h-[37px] text-lg font-bold text-left text-white"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      onChange={onChange}
      className="text-lg text-left placeholder:text-white placeholder:opacity-[0.26] text-white flex justify-start items-center w-[501px] h-[61px] relative gap-[21px] px-[22px] py-2 rounded-[7px] bg-white/[0.08]"
      type={type}
      placeholder={placeholder}
    >
    </input>
  </div>
)