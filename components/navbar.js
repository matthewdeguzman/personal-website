import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollClick(sectionName) {
  const element = document.getElementById(sectionName);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    console.log(sectionName);
  }
}

function buttonState(item) {
  return item.current
    ? "bg-gray-900 text-white"
    : "text-black hover:bg-gray-900 hover:text-white";
}
function button(item) {
  return (
    <button
      key={item.name}
      onClick={() => {
        scrollClick(item.name);
      }}
      className={classNames(
        buttonState(item),
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </button>
  );
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white fixed sm:grid sm:grid-rows-1 sm:items-center sm:justify-items-stretch sm:h-12 top-0 w-screen"
    >
      {({ open }) => (
        <>
          <div>
            <div className="relative justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 mt-8 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="grid grid-cols-2 sm:items-center sm:justify-between">
                <div className="hidden sm:ml-2 sm:block">
                  {button(navigation[0])}
                </div>

                <div className="hidden justify-self-end sm:mr-2 sm:block">
                  {navigation.slice(1).map((item) => button(item))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mt-8">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={"#" + item.name}
                  className={classNames(
                    buttonState(item),
                    "block w-full rounded-md px-3 py-2 text-left font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <button
                    onClick={() => {
                      scrollClick(item.name);
                    }}
                  >
                    {item.name}
                  </button>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
