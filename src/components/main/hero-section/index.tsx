import LaravelCompanyIcon from 'public/assets/companies/laravel.svg';
import MirageCompanyIcon from 'public/assets/companies/mirage.svg';
import StatamicCompanyIcon from 'public/assets/companies/statamic.svg';
import StaticKitCompanyIcon from 'public/assets/companies/static-kit.svg';
import TransistorCompanyIcon from 'public/assets/companies/transistor.svg';
import TupleCompanyIcon from 'public/assets/companies/tuple.svg';
import MadeSimpleIcon from 'public/assets/made-simple.svg';
import PlayVideoIcon from 'public/assets/play-video.svg';

const companiesData1 = [
  { name: 'Transistor', icon: <TransistorCompanyIcon /> },
  { name: 'Tuple', icon: <TupleCompanyIcon /> },
  { name: 'StaticKit', icon: <StaticKitCompanyIcon /> }
];

const companiesData2 = [
  { name: 'Mirage', icon: <MirageCompanyIcon /> },
  { name: 'Laravel', icon: <LaravelCompanyIcon /> },
  { name: 'Statamic', icon: <StatamicCompanyIcon /> }
];

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="mx-auto max-w-7xl px-4 pt-20 pb-16 text-center sm:px-6 lg:pt-32"
    >
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Accounting
        <span className="relative whitespace-nowrap text-blue-600">
          <MadeSimpleIcon className="absolute top-2/3 left-0 order-1 h-[0.58em] w-full fill-blue-300/70" />
          <span className="relative order-2"> made simple</span>
        </span>
        <span> for small businesses.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 ">
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don&rsquo;t get audited.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          href="/register"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 hover:text-slate-100"
        >
          Get 6 months free
        </a>
        <a
          href="/watch"
          className="inline-flex items-center gap-x-3 rounded-full px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300"
        >
          <PlayVideoIcon className="h-3 w-3 fill-blue-600 group-active:fill-current" />
          <span>Watch video</span>
        </a>
      </div>
      <div className="mt-36">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul className="mt-8 flex justify-center gap-x-8 sm:flex-col sm:items-center sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              {companiesData1.map((companyItem, index) => {
                return <li key={index}>{companyItem.icon}</li>;
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12">
              {companiesData2.map((companyItem, index) => {
                return <li key={index}>{companyItem.icon}</li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
