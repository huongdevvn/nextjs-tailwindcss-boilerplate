import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import CloseIcon from '@/public/assets/close-icon.svg';
import Logo from '@/public/assets/logo.svg';
import MenuIcon from '@/public/assets/menu-icon.svg';
import styles from './styles.module.css';

const Header = () => {
  const [isOpenPopperMenu, setIsOpenPopperMenu] = useState(false);

  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between ">
          <div className="flex items-center md:gap-x-12">
            <a href="#">
              <Logo className="h-10 w-auto" />
            </a>
            <div className="hidden md:flex md:gap-x-6">
              <a className={styles['nav-item']} href="/features">
                Features
              </a>
              <a className={styles['nav-item']} href="/testimonials">
                Testimonials
              </a>
              <a className={styles['nav-item']} href="/pricing">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a className={styles['nav-item']} href="/sign-in">
                Sign in
              </a>
            </div>

            <a className={styles['getting-started-today']} href="/sign-up">
              Get started
              <span className="hidden lg:inline">&nbsp;today</span>
            </a>

            <div className="md:hidden">
              <Popover.Root modal onOpenChange={setIsOpenPopperMenu}>
                <Popover.Trigger>
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center ">
                    {isOpenPopperMenu ? (
                      <CloseIcon className="h-3.5 w-3.5 stroke-slate-700" />
                    ) : (
                      <MenuIcon className="h-3.5 w-3.5 stroke-slate-700" />
                    )}
                  </div>
                </Popover.Trigger>

                <Popover.Portal>
                  <div className="absolute inset-0 order-1 bg-slate-300/50">
                    <Popover.Content className="w-screen px-4">
                      <div className="mt-4 flex flex-col gap-y-2 rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
                        <a href="#" className="p-2">
                          Features
                        </a>
                        <a href="#" className="p-2">
                          Testimonials
                        </a>
                        <a href="#" className="p-2">
                          Pricing
                        </a>
                        <hr className="m-2 border-slate-300/40"></hr>
                        <a href="#" className="p-2">
                          Sign in
                        </a>
                      </div>
                    </Popover.Content>
                  </div>
                </Popover.Portal>
              </Popover.Root>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
