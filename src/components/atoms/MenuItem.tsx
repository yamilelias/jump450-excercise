import { ReactNode } from 'react';

interface MenuItemProps {
  href: string;
  children: ReactNode;
}

export const MenuItem = ({ href, children }: MenuItemProps) => (
  <a href={href} className="block py-2 px-3 rounded my-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:dark:hover:bg-transparent">{children}</a>
)