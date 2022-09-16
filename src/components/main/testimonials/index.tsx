import TestimonialItem from './item';

const dataCol1 = [
  {
    content: `TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.`,
    author: `Sheryl Berge`,
    position: `CEO at Lynch LLC`,
    avatar: `/assets/avatar-1.webp`
  },
  {
    content: `I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.`,
    author: `Amy Hahn`,
    position: `Director at Velocity Industries`,
    avatar: `/assets/avatar-2.webp`
  }
];

const dataCol2 = [
  {
    content: `The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.`,
    author: `Leland Kiehn`,
    position: `Founder of Kiehn and Sons`,
    avatar: `/assets/avatar-3.webp`
  },
  {
    content: `There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.`,
    author: `Erin Powlowski`,
    position: `COO at Armstrong Inc`,
    avatar: `/assets/avatar-4.webp`
  }
];

const dataCol3 = [
  {
    content: `I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.`,
    author: `Peter Renolds`,
    position: `Founder of West Inc`,
    avatar: `/assets/avatar-5.webp`
  },
  {
    content: `This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.`,
    author: `Amy Hahn`,
    position: `Director at Velocity Industries`,
    avatar: `/assets/avatar-6.webp`
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl tracking-tight text-slate-900">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can&rsquo;t help but fall in
            love with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>

        <ul className="mx-auto mt-20 grid grid-cols-3 gap-8">
          <li>
            <ul className="flex flex-col gap-y-8">
              {dataCol1.map((item, index) => {
                return (
                  <li key={index}>
                    <TestimonialItem
                      key={index}
                      author={item.author}
                      content={item.content}
                      position={item.position}
                      avatar={item.avatar}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-8">
              {dataCol2.map((item, index) => {
                return (
                  <li key={index}>
                    <TestimonialItem
                      key={index}
                      author={item.author}
                      content={item.content}
                      position={item.position}
                      avatar={item.avatar}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-8">
              {dataCol3.map((item, index) => {
                return (
                  <li key={index}>
                    <TestimonialItem
                      key={index}
                      author={item.author}
                      content={item.content}
                      position={item.position}
                      avatar={item.avatar}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
