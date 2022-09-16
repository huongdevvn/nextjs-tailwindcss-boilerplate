import PricingItem from './item';

const data = [
  {
    name: `Starter`,
    description: `Good for anyone who is self-employed and just getting started.`,
    price: 9,
    benefits: [
      `Send 10 quotes and invoices`,
      `Connect up to 2 bank accounts`,
      `Track up to 15 expenses per month`,
      `Manual payroll support`,
      `Export up to 3 reports`
    ],
    isRecommended: false
  },
  {
    name: `Small business`,
    description: `Perfect for small / medium sized businesses.`,
    price: 15,
    benefits: [
      `Send 25 quotes and invoices`,
      `Connect up to 5 bank accounts`,
      `Automated payroll support`,
      `Export up to 12 reports`,
      `Bulk reconcile transactions`,
      `Track in multiple currencies`
    ],
    isRecommended: true
  },
  {
    name: `Enterprise`,
    description: `For even the biggest enterprise companies.`,
    price: 39,
    benefits: [
      `Send unlimited quotes and invoices`,
      `Connect up to 15 bank accounts`,
      `Track up to 200 expenses per month`,
      `Automated payroll support`,
      `Export up to 25 reports, including TPS`
    ],
    isRecommended: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-slate-900 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl tracking-tight text-white">
            Simple pricing, for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn&rsquo;t matter what size your business is, our software
            won&rsquo;t work well for you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-3 gap-x-8">
          {data.map((item, index) => {
            return (
              <PricingItem
                key={index}
                name={item.name}
                price={item.price}
                description={item.description}
                benefits={item.benefits}
                isRecommended={item.isRecommended}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
