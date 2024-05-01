'use client'
import { Footer, Infographic, Navbar } from '@/components/templates';
import { LogoBanner } from '@/components/molecules';
import { MainForm } from '@/components/forms';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

export default function Home() {
  const { track } = useFacebookPixel()

  const handleSubmit = values => {
    if(values.companySize === '50+') {
      console.log('values', values);
      track('Purchase')
    }
  }

  return (
    <>
      <div
        className="bg-gradient-to-b from-main-500 to-main-600 flex flex-col lg:px-[150px] px-12 flex py-7 w-[100%]"
      >
        <div className="flex flex-col justify-start items-center">
          <Navbar/>
          <div
            className="flex flex-row flex-wrap lg:justify-between mx-auto mt-20"
          >
            <Infographic/>
            <div
              className="flex flex-col justify-start items-start gap-16"
            >
              <MainForm onSubmit={handleSubmit} />

              <LogoBanner/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
