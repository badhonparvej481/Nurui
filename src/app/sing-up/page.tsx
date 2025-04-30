import SingInSingUpComponent from "@/components/common/SingInSingupComponent";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return <SingInSingUpComponent data={data} />;
};

export default page;

const data = {
  rightSection: {
    title: "Welcome back",
    subtitle: "Sign up to continue.",
    authOptions: [
      {
        provider: "google",
        label: "Sing up with Google",
        icon: <FcGoogle />,
        action: "google",
      },
      {
        provider: "Facebook",
        label: "Sing up with Facebook",
        icon: (
          <FaFacebook className="text-[#0866FF] bg-[var(--white-color)] rounded-full" />
        ),
        action: "facebook",
      },
    ],
    orText: "Or",
    formFields: [
      {
        label: "Your name:",
        placeholder: "name",
        type: "text",
      },
      {
        label: "Your Email:",
        placeholder: "Email",
        type: "email",
      },
      {
        label: "Your Password:",
        placeholder: "Password",
        type: "password",
      },
    ],
    submitButton: "Sign In",
  },
  leftSection: {
    greeting: "Hello, Friend!",
    description:
      "Register with your personal details to use all of site features",
    buttonText: "Sing in",
    navigation: "/sing-in",
  },
  reverse: true,
};