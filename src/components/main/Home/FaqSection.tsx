const FaqSection = () => {
  const roundedButton = (idx: number) => (
    <button key={idx} className="bg-slate-400 px-2 py-1">
      getting started
    </button>
  );

  return (
    <section className="container flex items-center gap-6">
      {/* description */}
      <div className="w-1/3 min-h-96 space-y-3.5">
        <h3 className="text-5xl font-bold ">FAQs</h3>
        <p className="text-lg">
          Everything you need to know about features, membership, and
          troubleshooting.
        </p>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => roundedButton(i))}
        </div>
      </div>
      {/* question */}
      <div className="w-2/3 bg-red-100 min-h-96"></div>
    </section>
  );
};

export default FaqSection;
