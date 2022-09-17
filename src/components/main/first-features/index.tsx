import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';

const data = [
  {
    id: 'payroll',
    title: 'Payroll',
    description: `Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.`,
    screenshot: '/assets/payroll.webp'
  },
  {
    id: 'claim-expenses',
    title: 'Claim expenses',
    description: `All of your receipts organized into one place, as long as you don't mind typing in the data by hand.`,
    screenshot: '/assets/claim-expenses.webp'
  },
  {
    id: 'vat-handling',
    title: 'VAT handling',
    description: `We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.`,
    screenshot: '/assets/vat-handling.webp'
  },
  {
    id: 'reporting',
    title: 'Reporting',
    description: `Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.`,
    screenshot: '/assets/reporting.webp'
  }
];

const FirstFeaturesSection = () => {
  return (
    <section
      id="features-1"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl md:mx-auto md:px-4 md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren&rsquo;t that picky about minor
            details like tax compliance.
          </p>
        </div>

        <Tabs.Root
          defaultValue="payroll"
          orientation="horizontal"
          className="mt-16 rounded-xl bg-white/10 pt-10 ring-1 ring-inset ring-white/10"
        >
          <Tabs.List
            aria-label="tabs list title"
            className="flex justify-center gap-x-4 overflow-x-auto whitespace-nowrap pb-4"
          >
            {data.map((item, index) => {
              return (
                <Tabs.Trigger
                  className="rounded-full py-1 px-4 font-display text-lg text-blue-100 radix-state-active:bg-white radix-state-active:text-blue-600"
                  key={index}
                  value={item.id}
                >
                  {item.title}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {data.map((item, index) => {
            return (
              <Tabs.Content key={index} value={item.id} className="rounded-xl">
                <div className="relative sm:px-6 lg:hidden">
                  <p className="mx-auto mt-2 max-w-2xl text-base text-white sm:text-center">
                    {item.description}
                  </p>
                </div>

                <div className="mt-10 w-[45rem] sm:w-auto lg:w-[67.8125rem]">
                  <Image
                    className="w-full rounded-xl shadow-xl shadow-blue-900/20"
                    alt={item.id}
                    src={item.screenshot}
                    loading="lazy"
                    width={2174}
                    height={1464}
                  ></Image>
                </div>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
        {/* <div className="grid grid-cols-12 items-center pt-16">
          <div className="col-span-5">
            {data.map((item, index) => {
              return (
                <FirstFeatureItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  active={index === activeIndex}
                  onClick={setActiveIndex}
                />
              );
            })}
          </div>
          <div className="col-span-7">
            <div className="relative h-[45.6875rem] w-[67.8125rem] shadow-xl shadow-blue-900/20">
              <Image
                className="rounded-xl shadow-xl shadow-blue-900/20"
                alt="payroll"
                src="/assets/payroll.webp"
                fill
              ></Image>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FirstFeaturesSection;
