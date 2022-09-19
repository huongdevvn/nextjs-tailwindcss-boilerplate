import FAQItem from './item';

const faqDataCol1 = [
  {
    question: 'Does TaxPal handle VAT?',
    answer:
      'Well no, but if you move your company offshore you can probably ignore it.'
  },
  {
    question: 'Can I pay for my subscription via purchase order?',
    answer: 'Absolutely, we are happy to take your money in all forms.'
  },
  {
    question: 'How do I apply for a job at TaxPal?',
    answer:
      'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.'
  }
];

const faqDataCol2 = [
  {
    question: 'What was that testimonial about tax fraud all about?',
    answer:
      'TaxPal is just a software application, ultimately your books are your responsibility.'
  },
  {
    question:
      'TaxPal sounds horrible but why do I still feel compelled to purchase?',
    answer:
      'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.'
  },
  {
    question:
      'I found other companies called TaxPal, are you sure you can use this name?',
    answer:
      'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.'
  }
];

const faqDataCol3 = [
  {
    question: 'How do you generate reports?',
    answer:
      'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.'
  },
  {
    question: 'Can we expect more inventory features?',
    answer: 'In life it’s really better to never expect anything at all.'
  },
  {
    question: 'I lost my password, how do I get into my account?',
    answer:
      'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.'
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-32">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can&rsquo;t find what you&rsquo;re looking for, email our
            support team and if you&rsquo;re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul className="flex flex-col gap-y-8">
              {faqDataCol1.map((item, index) => {
                return (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-8">
              {faqDataCol2.map((item, index) => {
                return (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-8">
              {faqDataCol3.map((item, index) => {
                return (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
