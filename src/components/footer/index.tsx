import GitHubIcon from '@/public/assets/github-icon.svg';
import Logo from '@/public/assets/logo.svg';
import TwitterIcon from '@/public/assets/twitter-icon.svg';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-8">
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <div className="mt-10 flex justify-center gap-x-6 text-sm">
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
        <div className="flex justify-between border-t border-slate-400/10 py-10">
          <p className="text-sm text-slate-500">
            Copyright © 2022 TaxPal. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <a href="#">
              <TwitterIcon className="h-6 w-6 fill-slate-500 hover:fill-slate-700" />
            </a>
            <a href="#">
              <GitHubIcon className="h-6 w-6 fill-slate-500 hover:fill-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
