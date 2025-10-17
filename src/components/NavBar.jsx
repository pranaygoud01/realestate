import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineAddHomeWork } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Hamburger toggle
  const menu = [
    {
      name: "Properties",
      submenu: true,
      submenuItems: [
        { name: "Residential", link: "/residential" },
        { name: "Commercial", link: "/commercial" },
        { name: "Land", link: "/land" },
      ],
    },
    { name: "Company", link: "/company" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className='w-full flex justify-center border-b lg:border-0 border-b-neutral-200 bg-white top-0 z-50 fixed h-[70px] '>
      <div className='max-w-7xl w-full h-full flex justify-between items-center px-4'>
        {/* Logo */}
        <div className='text-sm leading-3  font-medium flex flex-col uppercase'>
          Logo
          <span>Estate</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8'>
          {menu.map((item, idx) => (
            <li key={idx} className='relative text-sm group cursor-pointer flex items-center gap-1'>
              {item.name} {item.submenu && <IoIosArrowDown className='inline-block text-[12px]' />}
              {item.submenu && (
                <div className='absolute top-7 left-0 w-32 bg-white p-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300'>
                  <ul className='flex flex-col'>
                    {item.submenuItems.map((subitem, subidx) => (
                      <li key={subidx} className='py-2 px-4 hover:bg-neutral-50'>
                        {subitem.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Enquire Button */}
        <button className='hidden md:flex bg-black text-white flex gap-2 items-center duration-200 cursor-pointer  text-xs px-4 py-2'>
          <MdOutlineAddHomeWork className='inline-block text-[12px]' /> Enquire
        </button>

        {/* Hamburger */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX size={25} /> : <HiOutlineMenu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden w-8/12 border-l border-b border-l-neutral-300 border-b-neutral-300 bg-white  absolute top-[70px] right-0 z-40'>
          <ul className='flex flex-col gap-1 p-4'>
            {menu.map((item, idx) => (
              <li key={idx} className='flex flex-col'>
                <div className='flex justify-between items-center py-2 px-2 cursor-pointer'>
                  {item.name}
                  {item.submenu && <IoIosArrowDown />}
                </div>
                {item.submenu && (
                  <ul className='flex flex-col ml-4'>
                    {item.submenuItems.map((subitem, subidx) => (
                      <li key={subidx} className='py-2 px-2 hover:bg-neutral-50'>
                        {subitem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <button className='border-2 mt-2 flex gap-2 items-center hover:bg-black hover:border-black duration-200 cursor-pointer hover:text-white border-neutral-200 text-xs px-4 py-2'>
              <MdOutlineAddHomeWork className='inline-block text-[12px]' /> Enquire
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
