import styles from './styles.module.css';

export type FirstFeatureItemProps = {
  title: string;
  description: string;
  active: boolean;
  onClick: any;
};

const FirstFeatureItem = ({
  title,
  description,
  active,
  onClick
}: FirstFeatureItemProps) => {
  return (
    <div className={active ? styles['item-active'] : styles['item-inactive']}>
      <button
        className="font-display text-lg text-white"
        onClick={() => onClick}
      >
        <span className="absolute inset-0 rounded-r-none rounded-l-xl"></span>
        {title}
      </button>
      <p className="mt-2 block text-sm text-white">{description}</p>
    </div>
  );
};

export default FirstFeatureItem;
