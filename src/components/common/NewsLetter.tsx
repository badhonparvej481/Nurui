import AnimateInput from "./AnimateInput";

const NewsLetter = () => {
  return (
    <div className="max-w-3xl mx-auto -mt-36  bg-[var(--glass-color)] py-8 rounded-xl hidden xl:flex flex-col items-center justify-center text-center gap-3.5">
      <h6 className="text-3xl font-semibold">{newsLetter?.title}</h6>
      <p className="max-w-lg">{newsLetter?.description}</p>
      <AnimateInput
        className="mx-auto w-full max-w-lg mt-2"
        onBlurTitle="subscribe to our newsletter"
        onFocusTitle="We won't spam you!"
        buttonTitle={newsLetter?.subscribe_button.label}
      />
    </div>
  );
};

export default NewsLetter;

const newsLetter = {
  title: "Subscribe to our newsletter",
  description:
    "Get the latest news and updates from us by subscribing to our newsletter today. We promise not to spam you.",
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
