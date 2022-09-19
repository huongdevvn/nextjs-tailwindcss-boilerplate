import Image from 'next/future/image';
import MadeSimpleIcon from 'public/assets/made-simple.svg';
import PlayVideoIcon from 'public/assets/play-video.svg';

const companiesData1 = [
  { name: 'Transistor', image: '/assets/companies/transistor.svg' },
  { name: 'Tuple', image: '/assets/companies/tuple.svg' },
  { name: 'StaticKit', image: '/assets/companies/static-kit.svg' }
];

const companiesData2 = [
  { name: 'Mirage', image: '/assets/companies/mirage.svg' },
  { name: 'Laravel', image: '/assets/companies/laravel.svg' },
  { name: 'Statamic', image: '/assets/companies/statamic.svg' }
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
        <ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              {companiesData1.map((companyItem, index) => {
                return (
                  <li className="flex" key={index}>
                    <Image
                      alt={companyItem.name}
                      src={companyItem.image}
                      width="0"
                      height="0"
                      className="h-auto w-full"
                    ></Image>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12">
              {companiesData2.map((companyItem, index) => {
                return (
                  <li className="flex" key={index}>
                    <Image
                      alt={companyItem.name}
                      src={companyItem.image}
                      width="0"
                      height="0"
                      className="h-auto w-full"
                    ></Image>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
