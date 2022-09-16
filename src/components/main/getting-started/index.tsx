const GettingStartedSection = () => {
  return (
    <section id="getting-started" className="bg-blue-600 py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl tracking-tight text-white">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It&rsquo;s time to take control of your books. Buy our software so
            you can feel like you&rsquo;re doing something productive.
          </p>
          <a
            href="/register"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-blue-50"
          >
            Get 6 months free
          </a>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
