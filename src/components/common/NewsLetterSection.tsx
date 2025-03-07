import AnimateInput from "./AnimateInput";

const NewsLetterSection = () => {
  return (
    <section className="container bg-gradient-to-r from-[var(--glass-color)] via-[var(--glass-color)] to-[var(--primary-color-2)] py-20 px-20 rounded-xl hidden xl:flex flex-col items-start justify-center text-left gap-3.5">
      <h6 className="text-4xl font-bold">{newsLetter?.title}</h6>
      <p className="max-w-2xl">{newsLetter?.description}</p>
      <AnimateInput
        className="w-full max-w-2xl mt-2"
        onBlurTitle="subscribe to our newsletter"
        onFocusTitle="We won't spam you!"
        buttonTitle={newsLetter?.subscribe_button.label}
      />
    </section>
  );
};

export default NewsLetterSection;

const newsLetter = {
  title: "Subscribe to our newsletter",
  description:
    "Get the latest news and updates from us by subscribing to our newsletter today. We promise.",
  subscribe_button: {
    label: "Subscribe",
    action: "subscribe",
  },
  input_field: {
    placeholder: "subscribe to our newsletter",
    onFocus: {
      action: "setPlaceholder",
      value: "We won't spam you!",
    },
    onBlur: {
      action: "setPlaceholder",
      value: "subscribe to our newsletter",
    },
  },
};
