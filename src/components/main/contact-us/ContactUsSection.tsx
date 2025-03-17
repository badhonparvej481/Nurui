import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import ShinyInput from "@/components/common/ShinyInput";
import ShinyTextArea from "@/components/common/ShinyTextArea";
import ButtonBackgroundShineButton from "@/components/common/ButtonBackgroundShine";
const ContactUsSection = () => {
  return (
    <div className="container pt-6 lg:pt-12 flex flex-col lg:flex-row gap-8 xl:gap-14 2xl:gap-24">
      <div className="lg:w-1/3 bg-gradient-to-t from-[var(--glass-color)] via-[var(--glass-color)] to-[var(--primary-color-2)] rounded-2xl p-6 2xl:p-14 space-y-8 lg:space-y-10">
        <h3 className="text-2xl font-black text-[var(--primary-color)]">
          Get in touch
        </h3>
        <div className="space-y-1">
          <h4 className="text-xl font-bold">Visit us</h4>
          <p>{getInTouch?.visit_us?.description}</p>
          <p className="font-bold">{getInTouch?.visit_us?.address}</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold">Chat to us</h4>
          <p>{getInTouch?.chat_to_us?.description}</p>
          <p className="font-bold">{getInTouch?.chat_to_us?.email}</p>
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold">Call us</h4>
          <p>{getInTouch?.call_us?.description}</p>
          <p className="font-bold">{getInTouch?.call_us?.phone}</p>
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
            placeholder="John Doe"
            type="text"
            name="first_name"
            required
          />
        </fieldset>
        <fieldset className="space-y-2">
          <label className="capitalize font-semibold">Last name</label>
          <ShinyInput placeholder="Doe" type="text" name="last_name" required />
        </fieldset>
        <fieldset className="space-y-2 col-span-full">
          <label className="capitalize font-semibold">Company name</label>
          <ShinyInput
            placeholder="Your company"
            type="text"
            name="company_name"
            required
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
            placeholder="Your phone number"
            type="tel"
            name="phone_number"
            required
          />
        </fieldset>
        <fieldset className="space-y-2 col-span-full">
          <label className="capitalize font-semibold">Message</label>
          <ShinyTextArea
            placeholder="Your message"
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
    </div>
  );
};

export default ContactUsSection;

const getInTouch = {
  visit_us: {
    description: "Come say hello at our office HQ.",
    address: "67 Wisteria Way Croydon South VIC 3136 AU",
  },
  chat_to_us: {
    description: "Our friendly team is here to help.",
    email: "hello@paysphere.com",
  },
  call_us: {
    description: "Mon-Fri from 8am to 5pm",
    phone: "(+995) 555-56-55-55",
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
