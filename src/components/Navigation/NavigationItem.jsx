import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import { iconsList } from '../icons';

const NavigationItem = ({ menuItem }) => {
  const { asPath } = useRouter();
  const { href, name } = menuItem;

  return (
    <Link
      href={href}
      className={`${
        asPath === href
          ? 'border-b-2 border-orange-500'
          : 'border-b-2 border-b-transparent'
      } inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5`}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;
