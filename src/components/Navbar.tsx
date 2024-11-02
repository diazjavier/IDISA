"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    ["Inicio", "/"],
    ["Quienes somos", "/about"],
    ["Servicios", "/services"],
    ["Proyectos", "/projects"],
    ["Noticias", "/news"],
    // ["Contacto", "/contacts"],
  ];

  return (
    <div className="w-full shadow-lg hover:shadow-xl bg-slate-300 dark:bg-trueGray-950">
      <nav className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-900 dark:text-gray-100">
              <span>
                <Image
                  src="/img/Logo_IDISA_4.jpg"
                  width="32"
                  alt="N"
                  height="32"
                  className="w-8 rounded-lg"
                />
              </span>
            <span>IDISA</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/contacts" className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md md:ml-5">
                Contacto
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-indigo-700 rounded-md lg:hidden hover:text-indigo-900 hover:bg-indigo-200 focus:text-indigo-900 focus:bg-indigo-200 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>

                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item[1]} className="w-full px-4 py-2 -ml-4 text-indigo-900 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item[0]}
                      </Link>
                    ))}
                    <Link href="/contacts" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-900 rounded-md lg:ml-5">         
                        Contacto
                    </Link>
                  </>
                </DisclosurePanel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu[1]} className="inline-block px-4 py-2 text-lg font-normal text-indigo-900 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

