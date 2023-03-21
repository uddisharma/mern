import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
// import { Link } from "react-router-dom";

import { HiOutlineLogin, HiShoppingCart } from "react-icons/hi";
import Cart from "../Pages/Cart";
import { useSelector } from "react-redux";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import { Logo } from "../../public/Mockups"

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Your Orders", href: "#" },
  { name: "Sign out", href: "#" },
];
const products = [
  {
    name: "Ance",
    description: "Speak directly to your customers",
    link: "/acne",
    icon: ChartPieIcon,
  },
  {
    name: "Alopecia areata",
    description: "Your customers’ data will be safe and secure",
    link: "/alopecia",
    icon: ChartPieIcon,
  },
  {
    name: "Atopic dermatitis (eczema)",
    description: "Connect with third-party tools",
    link: "/eczema",
    icon: ChartPieIcon,
  },
  {
    name: "Psoriasis",
    description: "Build strategic funnels that will convert",
    link: "/psariasis",
    icon: ChartPieIcon,
  },
  {
    name: "Raynaud’s phenomenon",
    description: "Build strategic funnels that will convert",
    link: "/raynaud-syndrome",
    icon: ChartPieIcon,
  },
  {
    name: "Rosacea",
    description: "Build strategic funnels that will convert",
    link: "/rosacea",
    icon: ChartPieIcon,
  },
  {
    name: "Skin cancer",
    description: "Build strategic funnels that will convert",
    link: "/skin-cancer",
    icon: ChartPieIcon,
  },
  {
    name: "Vitiligo",
    description: "Build strategic funnels that will convert",
    link: "/vitiligo",
    icon: ChartPieIcon,
  },
  {
    name: "Actinic prurigo (AP)",
    description: "Build strategic funnels that will convert",
    link: "actinic",
    icon: ChartPieIcon,
  },
  {
    name: "Argyria",
    description: "Build strategic funnels that will convert",
    link: "/argyria",
    icon: ChartPieIcon,
  },
  {
    name: "Chromhidrosis",
    description: "Build strategic funnels that will convert",
    link: "/chromhidrosis",
    icon: ChartPieIcon,
  },
  {
    name: "Epidermolysis bullosa",
    description: "Build strategic funnels that will convert",
    link: "/epidermolysis",
    icon: ChartPieIcon,
  },
  {
    name: "Harlequin ichthyosis",
    description: "Build strategic funnels that will convert",
    link: "/harlequin",
    icon: ChartPieIcon,
  },
  {
    name: "Lamellar ichthyosis",
    description: "Build strategic funnels that will convert",
    link: "/lamellar",
    icon: ChartPieIcon,
  },
  {
    name: "Necrobiosis lipoidica",
    description: "Build strategic funnels that will convert",
    link: "/necroboisis",
    icon: ChartPieIcon,
  },
];
const services = [
  {
    name: "PCD 3rd  Party",
    description: "Get a better understanding of your traffic",
    link: "/service/pcd",
    icon: ChartPieIcon,
  },
  {
    name: "Contract Manufacturing",
    description: "Speak directly to your customers",
    link: "/service/contract",
    icon: ChartPieIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", link: "service/contact", icon: PlayCircleIcon },
  { name: "Contact sales", link: "service/pcd", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const item = useSelector((state) => state.cart);
  return (
    <header className="bg-[#f7fafc]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MITS Spectra</span>
            <Link to="/">
              <img
                className="h-12 w-25"
                src="https://res.cloudinary.com/dvuphar2o/image/upload/v1679116392/ak5a3rzzdsls1wvzg1qb.png"
                alt="not found"
              />
            </Link>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group
          // style={{ border: "2px solid red" }}
          className="hidden lg:flex lg:gap-x-10"
        >
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-black">
              Skin Disorders
              <ChevronDownIcon
                className="h-7 w-7 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.link}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-black">
              Services
              <ChevronDownIcon
                className="h-7 w-7 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.link}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/products"
            className="text-xl font-semibold leading-6 text-black"
          >
            Our Products
          </Link>
          <Link
            to="/contact"
            className="text-xl font-semibold leading-6 text-black"
          >
            Contact
          </Link>
        </Popover.Group>

        {!isAuthenticated && (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="text-xl font-semibold leading-6 text-gray-900">
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button>
                    <span className="sr-only">Open user menu</span>
                    <HiOutlineLogin />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <button
                      onClick={() => loginWithRedirect()}
                      className="block px-4 py-2 text-sm  m-auto text-gray-700 text-center"
                    >
                      User
                    </button>
                    <Link
                      className="block px-4 py-2 text-sm text-gray-700"
                      to="/admin/login"
                    >
                      Admin
                    </Link>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* <span aria-hidden="true">&rarr;</span> */}
            </button>
          </div>
        )}
        {isAuthenticated && (
          <>
            {/* <h1>{user.name}</h1> */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="text-xl font-semibold leading-6 text-gray-900">
                {/* Log out <span aria-hidden="true">&rarr;</span>{" "}
                <span className="text-[#4299e1]">{user.name}</span> */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.picture}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700"
                        to="/user/profile"
                      >
                        Your Profile
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700"
                        to="/user/orders"
                      >
                        Your Orders
                      </Link>
                      <Link
                        className="block px-4 py-2 text-sm text-gray-700"
                        onClick={() =>
                          logout({
                            logoutParams: {
                              returnTo: window.location.origin,
                            },
                          })
                        }
                        // to="/"
                      >
                        Logout
                      </Link>
                      {/* </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </button>
            </div>
          </>
        )}
        {isAuthenticated && (
          <Link
            to="/cart"
            className="text-xl ml-10 font-semibold leading-6 text-gray-900"
          >
            <HiShoppingCart /> <Cart />
          </Link>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MITS Spectra</span>
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/dvuphar2o/image/upload/v1679116392/ak5a3rzzdsls1wvzg1qb.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Skin Disorders
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            link={item.link}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...services].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            link={item.link}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/* <a
                  link="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Derma Frachise
                </a> */}
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  React Us
                </Link>
              </div>

              {!isAuthenticated ? (
                <div className="py-6">
                  <button
                    //   link="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => loginWithRedirect()}
                  >
                    <HiOutlineLogin />
                  </button>
                </div>
              ) : (
                <div className="py-6">
                  <button
                    //   link="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {user.name}
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            <Link to="/user/profile">
                              <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Your Profile
                              </Disclosure.Button>
                            </Link>
                          </Disclosure.Panel>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            <Link to="/user/orders">
                              <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Your Orders
                              </Disclosure.Button>
                            </Link>
                          </Disclosure.Panel>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            <Link to="/">
                              <Disclosure.Button
                                onClick={() =>
                                  logout({
                                    logoutParams: {
                                      returnTo: window.location.origin,
                                    },
                                  })
                                }
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                Logout
                              </Disclosure.Button>
                            </Link>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
