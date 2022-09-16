import ContactsIcon from 'public/assets/contacts-icon.svg';
import InventoryIcon from 'public/assets/inventory-icon.svg';
import ReportingIcon from 'public/assets/reporting-icon.svg';
import SecondaryFeatureItem from './item';

const data = [
  {
    icon: ReportingIcon,
    title: 'Reporting',
    subtitle:
      'Stay on top of things with always up-to-date reporting features.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.'
  },
  {
    icon: InventoryIcon,
    title: 'Inventory',
    subtitle: `Never lose track of what's in stock with accurate inventory tracking.`,
    description: `We don't offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.`
  },
  {
    icon: ContactsIcon,
    title: 'Contacts',
    subtitle:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description: `This also isn't actually a feature, it's just some friendly advice. We definitely recommend that you do this, you'll feel really organized and professional.`
  }
];

const FeaturesSection2 = () => {
  return (
    <section
      id="features-2"
      className="relative overflow-hidden bg-slate-50 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl tracking-tight text-slate-900">
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you&rsquo;d probably be a little confused if we suggested
            you complicate your everyday business tasks instead.
          </p>
        </div>

        <div className="mt-20 block">
          <div className="grid grid-cols-3 gap-x-8">
            {data.map((item, index) => {
              const Icon = item.icon;
              return (
                <SecondaryFeatureItem
                  key={index}
                  icon={<Icon />}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
