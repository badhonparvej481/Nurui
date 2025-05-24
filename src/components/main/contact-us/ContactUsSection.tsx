import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import ShinyInput from "@/components/common/ShinyInput";
import ShinyTextArea from "@/components/common/ShinyTextArea";
import ButtonBackgroundShineButton from "@/components/common/ButtonBackgroundShine";

const ContactUsSection = () => {
  return (
    <section className="container pt-6 lg:pt-12 flex flex-col lg:flex-row gap-8 xl:gap-14 2xl:gap-24">
      <div className="lg:w-1/3 bg-gradient-to-t from-[var(--glass-color)] via-[var(--glass-color)] to-[var(--primary-color-2)] rounded-2xl p-6 2xl:p-14 space-y-8 lg:space-y-10">
        <h3 className="text-2xl font-black text-[var(--primary-color)]">
          Get in touch
        </h3>
        <div className="space-y-1">
          <h4 className="text-xl font-bold">Chat to us</h4>
          <p>{getInTouch?.chat_to_us?.description}</p>
          <p className="font-bold">{getInTouch?.chat_to_us?.email}</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold">Contribute</h4>
          <p>{getInTouch?.contribute?.description}</p>
          <a
            href={getInTouch?.contribute?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-500 hover:underline"
          >
            GitHub Repository
          </a>
        </div>
        <div className="space-y-3">
          <h4 className="text-xl font-bold">Social media</h4>
          <div className="flex items-center gap-5 *:cursor-pointer">
            {getInTouch?.social_media?.platforms}
          </div>
        </div>
      </div>
      <form className="lg:w-2/3 grid lg:grid-cols-2 gap-6">
        <fieldset className="space-y-2">
          <label className="capitalize font-semibold">First name</label>
          <ShinyInput
            placeholder="Your first name"
            type="text"
            name="first_name"
            required
          />
        </fieldset>
        <fieldset className="space-y-2">
          <label className="capitalize font-semibold">Last name</label>
          <ShinyInput
            placeholder="Your last name"
            type="text"
            name="last_name"
            required
          />
        </fieldset>
        <fieldset className="space-y-2 col-span-full">
          <label className="capitalize font-semibold">Company name</label>
          <ShinyInput
            placeholder="Your organization (optional)"
            type="text"
            name="company_name"
          />
        </fieldset>
        <fieldset className="space-y-2 col-span-full">
          <label className="capitalize font-semibold">Email</label>
          <ShinyInput
            placeholder="Your email address"
            type="email"
            name="email"
            required
          />
        </fieldset>
        <fieldset className="space-y-2 col-span-full">
          <label className="capitalize font-semibold">Phone</label>
          <ShinyInput
            placeholder="Your phone number (optional)"
            type="tel"
            name="phone_number"
          />
        </fieldset>
        <fieldset className="space-y-2 col-span-full">
          <label className="capitalize font-semibold">Message</label>
          <ShinyTextArea
            placeholder="Tell us what you need or suggest!"
            name="message"
            rows={5}
            required
          />
        </fieldset>
        <ButtonBackgroundShineButton
          className="col-span-full"
          title={"send message"}
        />
      </form>
    </section>
  );
};

export default ContactUsSection;

const getInTouch = {
  contribute: {
    description: "Want to help us improve the UI library?",
    link: "https://github.com/your-org/your-ui-library",
  },
  chat_to_us: {
    description: "We’d love to hear your feedback and ideas.",
    email: "support@bytenexia.dev",
  },
  social_media: {
    platforms: [
      <FaFacebook key="facebook" className="text-2xl text-[#1877F2]" />,
      <BsInstagram key="instagram" className="text-2xl text-[#FE0173]" />,
      <BsYoutube key="youtube" className="text-2xl text-[#FF0033]" />,
      <FaXTwitter
        key="twitter"
        className="text-2xl text-[var(--black-color)] dark:text-[var(--white-color)]"
      />,
      <FaLinkedin key="linkedin" className="text-2xl text-[#0073B2]" />,
    ],
  },
};
