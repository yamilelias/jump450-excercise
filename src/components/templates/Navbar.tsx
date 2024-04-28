import { Button, Link, MenuItem } from '@/components/atoms';

export const Navbar = () => (
  <header
    className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[88px] relative"
  >
    <img
      src="logo.png"
      className="flex-grow-0 flex-shrink-0 w-[76px] h-11 object-cover"
    />
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-12">
      <MenuItem href="#">Our Approach</MenuItem>
      <MenuItem href="#">Success Stories</MenuItem>
      <MenuItem href="#">Blog</MenuItem>
      <MenuItem href="#">Careers</MenuItem>
      <Button>Grow with us</Button>
    </div>
  </header>
)