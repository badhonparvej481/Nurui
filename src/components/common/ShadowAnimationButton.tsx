const ShadowAnimationButton = () => {
  return (
    <button
      className="relative px-8 py-3 bg-[var(--primary-color-3)] text-[var(--primary-color)] font-semibold rounded-lg border-2 border-[var(--primary-color-2)] hover:border-[var(--primary-color)] transition-all duration-300 
    hover:shadow-[0_0_20px_10px_var(--primary-color-2)] active:scale-95 active:shadow-[0_0_10px_5px_var(--primary-color-2)] group"
    >
      <span className="flex items-center space-x-2">
        <span>Subscribe</span>
      </span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--primary-color-2)] to-[var(--primary-color-3)]" />
    </button>
  );
};

export default ShadowAnimationButton;
