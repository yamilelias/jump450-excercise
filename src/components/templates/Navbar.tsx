import { Button, Link, MenuItem } from '@/components/atoms';

export const Navbar = () => (
  <nav
    className="bg-transparent w-full"
  >
    <div className="flex flex-wrap items-center justify-between mx-auto">
      <img
        src="logo.png"
        className="h-11 object-cover"
      />
      <button data-collapse-toggle="navbar-default" type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className="hidden w-full lg:block lg:w-auto gap-12" id="navbar-default">
        <ul
          className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <MenuItem href="#">Our Approach</MenuItem>
          <MenuItem href="#">Success Stories</MenuItem>
          <MenuItem href="#">Blog</MenuItem>
          <MenuItem href="#">Careers</MenuItem>
          <Button>Grow with us</Button>
        </ul>
      </div>
    </div>
  </nav>
)