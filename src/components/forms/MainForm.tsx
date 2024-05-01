import { Dropdown, Input } from '@/components/atoms';

const companySizes = [
  '0-10',
  '10-25',
  '25-49',
  '50+',
]

const currentMarketingChallenges = [
  'Brand Awareness',
  'Lead Generation',
  'Sales Enablement',
  'Content Marketing',
  'Customer Retention',
  'Other',
]

export const MainForm = () => (
  <div className="flex justify-center items-center flex-col gap-8">
    <div
      className="flex flex-col justify-center items-center relative gap-6"
    >
      <Input label="What is your name?" type="text" placeholder="i.e John Ford" />
      <Input label="What is your company email?" type="text" placeholder="Type your answer" />
      <Dropdown id="company-size" label="How large is your company?" options={companySizes} placeholder="Total Employee Size"/>
      <Dropdown id="marketing-challenges" label="Current Marketing Challenges" options={currentMarketingChallenges} placeholder="Choose multiple options"/>
    </div>
    <button type="button"
            className="justify-center items-center font-extrabold text-lg text-indigo-700 uppercase w-[400px] h-[63px] bg-gradient-to-r from-yellow-200 to-red-500 hover:bg-gradient-to-l hover:transition-all focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Scale
      my Creative Product
    </button>
  </div>
)