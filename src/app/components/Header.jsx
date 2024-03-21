/*
 * @Author: Chen HuaKang
 * @Date: 2024-03-18 13:43:57
 * @LastEditors: Chen HuaKang
 * @LastEditTime: 2024-03-21 17:10:31
 * @Description:
 */

// import { Fragment } from 'react'
// import { nav, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Header = () => {
  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ];
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Image
                className='h-8 w-8'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              <button
                type='button'
                className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>View notifications</span>
                {/* <BellIcon className='h-6 w-6' aria-hidden='true' /> */}
              </button>

              {/* Profile dropdown */}
              <div className='relative ml-3'>
                <div>
                  <a className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Open user menu</span>
                    <Image className='h-8 w-8 rounded-full' src={user.imageUrl} alt='' />
                  </a>
                </div>
                <fragment
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <ul className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className='block px-4 py-2 text-sm text-gray-700'>
                          {item.name}
                        </a>
                        {/* {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )} */}
                      </li>
                    ))}
                  </ul>
                </fragment>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            {/* Mobile menu button */}
            <nava className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              {/* {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )} */}
            </nava>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          {navigation.map((item) => (
            <nava
              key={item.name}
              as='a'
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </nava>
          ))}
        </div>
        <div className='border-t border-gray-700 pb-3 pt-4'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <Image className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-none text-white'>{user.name}</div>
              <div className='text-sm font-medium leading-none text-gray-400'>{user.email}</div>
            </div>
            <button
              type='button'
              className='relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <span className='absolute -inset-1.5' />
              <span className='sr-only'>View notifications</span>
              {/* <BellIcon className='h-6 w-6' aria-hidden='true' /> */}
            </button>
          </div>
          <div className='mt-3 space-y-1 px-2'>
            {userNavigation.map((item) => (
              <nava
                key={item.name}
                as='a'
                href={item.href}
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                {item.name}
              </nava>
            ))}
          </div>
        </div>
      </div>
    </nav>
    // <header className=' bg-white w-full px-6 py-2'>
    //   <nav className=' max-lg:hidden'>
    //     <ul className=' flex items-center'>
    //       {dataMenus.map((menu) => (
    //         <li key={menu.id} className=' hover:bg-cyan-400  px-6 py-2'>
    //           <a href='' className=" w-full h-full">{menu.name}</a>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    //   <div className=""></div>
    // </header>
  );
};

export default Header;
