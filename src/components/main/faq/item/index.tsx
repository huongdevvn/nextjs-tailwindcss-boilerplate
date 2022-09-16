export type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <li>
      <h3 className="font-display text-lg leading-7 text-slate-900">
        {question}
      </h3>
      <p className="mt-4 text-sm text-slate-700">{answer}</p>
    </li>
  );
};

export default FAQItem;
