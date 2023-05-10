import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import { iconsList } from '../icons';

const NavigationItem = ({ menuItem }) => {
  const { asPath } = useRouter();
  const { href, name, children } = menuItem;
  const { IoIosArrowDown } = iconsList;

  return children?.length > 0 ? (
    <Popover className="relative">
      {({ open }) => (
        <Fragment>
          <Popover.Button className="inline-flex items-center text-sm xl:text-base font-normal py-2 pl-3 outline-none focus:outline-none">
            <span>{name}</span>
            <IoIosArrowDown className="ml-2 h-4 text-slite-300 transition duration-150 ease-in-out group-hover:text-opacity-80" />
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
            <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-56 border-0 rounded-xl max-w-56 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-50">
                <div className="relative grid gap-1 p-2 px-2 lg:grid-cols-1 bg-white w-auto rounded-xl">
                  {children?.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className={`${
                        asPath === href
                          ? 'bg-white border-2 border-amber-500 text-amber-500 rounded-full flex items-center transition duration-150 ease-in-out hover:bg-ambers-500 hover:text-white focus:outline-none focus-visible:ring'
                          : 'flex items-center border-2 border-transparent rounded-full transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring'
                      }`}
                    >
                      <div className="ml-3">
                        <p className="text-sm py-2 font-normal">{name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  ) : (
    <Link
      href={href}
      target={href === 'http://190.114.255.247:195' ? '_blank' : ''}
      className={`${
        asPath === href
          ? 'border-b-2 border-amber-500'
          : 'border-b-2 border-b-transparent'
      } inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5`}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;
