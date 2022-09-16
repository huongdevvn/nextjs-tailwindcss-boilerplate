export type SecondaryFeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

const SecondaryFeatureItem = ({
  icon,
  title,
  subtitle,
  description
}: SecondaryFeatureItemProps) => {
  return (
    <div className="relative opacity-75 hover:opacity-100">
      <div className="h-9 w-9 rounded-lg bg-slate-500">
        <span>{icon}</span>
      </div>
      <h3 className="mt-6 text-sm font-medium text-slate-600">
        {title}
        <button>
          <span className="absolute inset-0"></span>
        </button>
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">{subtitle}</p>
      <p className="mt-4 text-sm text-slate-600">{description}</p>
    </div>
  );
};

export default SecondaryFeatureItem;
