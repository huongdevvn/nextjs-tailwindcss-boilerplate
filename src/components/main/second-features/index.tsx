import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';
import ContactsIcon from 'public/assets/contacts-icon.svg';
import InventoryIcon from 'public/assets/inventory-icon.svg';
import ReportingIcon from 'public/assets/reporting-icon.svg';

const data = [
  {
    id: 'reporting',
    icon: ReportingIcon,
    title: 'Reporting',
    subtitle:
      'Stay on top of things with always up-to-date reporting features.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    screenshot: '/assets/profit-loss.webp'
  },
  {
    id: 'inventory',
    icon: InventoryIcon,
    title: 'Inventory',
    subtitle: `Never lose track of what's in stock with accurate inventory tracking.`,
    description: `We don't offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.`,
    screenshot: '/assets/inventory.webp'
  },
  {
    id: 'contacts',
    icon: ContactsIcon,
    title: 'Contacts',
    subtitle:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description: `This also isn't actually a feature, it's just some friendly advice. We definitely recommend that you do this, you'll feel really organized and professional.`,
    screenshot: '/assets/contacts.webp'
  }
];

const SecondaryFeatureSection = () => {
  return (
    <section
      id="features-2"
      className="relative overflow-hidden pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you&rsquo;d probably be a little confused if we suggested
            you complicate your everyday business tasks instead.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-y-10 lg:hidden">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <div className="mx-auto max-w-2xl">
                  <div className="h-9 w-9 rounded-lg bg-blue-600">
                    <span>{<Icon />}</span>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-display text-xl text-slate-900">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
                <div className="relative mt-10 pb-10">
                  <div className="absolute -inset-x-8 bottom-0 top-8 bg-slate-200" />
                  <div className="w-[52.75rem]">
                    <Image
                      className="relative z-10 rounded-xl shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                      alt="title"
                      width={1688}
                      height={856}
                      loading="lazy"
                      src={item.screenshot}
                    ></Image>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:mt-20 lg:block">
          <Tabs.Root defaultValue="reporting" orientation="horizontal">
            <Tabs.List
              className="grid grid-cols-3 items-start gap-x-8"
              aria-label="tabs list 2"
            >
              {data.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Tabs.Trigger
                    className="group opacity-75 radix-state-active:opacity-100"
                    key={index}
                    value={item.id}
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-500 group-radix-state-active:bg-blue-600">
                      <span>
                        <Icon />
                      </span>
                    </div>
                    <h3 className="mt-6 text-start text-sm font-medium text-slate-600 group-radix-state-active:text-blue-600">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-start font-display text-xl text-slate-900">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 text-start text-sm text-slate-600">
                      {item.description}
                    </p>
                  </Tabs.Trigger>
                );
              })}
            </Tabs.List>
            <div className="mt-20 overflow-hidden rounded-3xl bg-slate-200 px-14 py-16 xl:px-16">
              {data.map((item, index) => {
                return (
                  <Tabs.Content key={index} value={item.id}>
                    <div key={index} className="mx-auto w-[52.75rem] px-5">
                      <Image
                        className="rounded-2xl bg-white shadow-lg shadow-slate-900/10 ring-1 ring-slate-500/10"
                        alt={item.id}
                        src={item.screenshot}
                        width={1688}
                        height={856}
                      ></Image>
                    </div>
                  </Tabs.Content>
                );
              })}
            </div>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default SecondaryFeatureSection;
