import { useState } from 'react';
import Image from 'next/future/image';
import FirstFeatureItem from './item';

const data = [
  {
    title: 'Payroll',
    description: `Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.`
  },
  {
    title: 'Claim expenses',
    description: `All of your receipts organized into one place, as long as you don't mind typing in the data by hand.`
  },
  {
    title: 'VAT handling',
    description: `We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.`
  },
  {
    title: 'Reporting',
    description: `Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.`
  }
];

const FirstFeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="features-1"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="font-display text-5xl tracking-tight text-white">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren&rsquo;t that picky about minor
            details like tax compliance.
          </p>
        </div>
        <div className="grid grid-cols-12 items-center pt-16">
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
        </div>
      </div>
    </section>
  );
};

export default FirstFeaturesSection;
