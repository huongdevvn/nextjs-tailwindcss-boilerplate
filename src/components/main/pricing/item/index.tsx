import clsx from 'clsx';
import TickIcon from '@/public/assets/tick-icon.svg';

export type PricingItemProps = {
  name: string;
  description: string;
  price: number;
  benefits: string[];
  isRecommended: boolean;
};

const PricingItem = ({
  name,
  description,
  price,
  benefits,
  isRecommended
}: PricingItemProps) => {
  return (
    <section
      className={clsx('rounded-3xl p-8', isRecommended && 'bg-blue-600')}
    >
      <p className="font-display text-5xl font-light tracking-tight text-white">
        ${price}
      </p>
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          isRecommended ? 'text-white' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      <a
        href="#"
        className={clsx(
          'mt-8 flex items-center justify-center rounded-full py-2 px-4 text-sm',
          'ring-1 ring-slate-700 hover:ring-slate-500 active:ring-slate-700',
          isRecommended && 'bg-white hover:bg-blue-50'
        )}
      >
        <p
          className={clsx(
            isRecommended
              ? 'font-semibold text-slate-900'
              : 'font-normal text-white'
          )}
        >
          Get Started
        </p>
      </a>
      <ul className="mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
        {benefits.map((item, index) => {
          return (
            <li key={index} className="flex">
              <TickIcon
                className={clsx(
                  'h-6 w-6 fill-current',
                  isRecommended ? 'text-white' : 'text-slate-400'
                )}
              />
              <span className="ml-4">{item}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PricingItem;
