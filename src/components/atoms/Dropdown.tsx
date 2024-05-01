import { useState } from 'react';
import { Dropdown as FlowDropdown } from 'flowbite'

export const Dropdown = ({ id, options, label, placeholder, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleClick = (e) => {
    console.log('e', e.target);
    setSelectedOption(e.target.value);
    onChange(e);
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
        <p
          className="flex-grow-0 flex-shrink-0 w-[439px] h-[37px] text-lg font-bold text-left text-white"
        >
          {label}
        </p>
        <button id={`${id}-button`} data-dropdown-toggle={id}
                className="text-lg justify-between text-left placeholder:text-white placeholder:opacity-[0.26] text-white flex justify-start items-center w-[501px] h-[61px] relative gap-[21px] px-[22px] py-2 rounded-[7px] bg-white/[0.08]"
                type="button">{selectedOption}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
      </div>
      <div id={id}
           className="w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {options.map(option => (
            <li key={option} onClick={handleClick}>
              <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{option}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}