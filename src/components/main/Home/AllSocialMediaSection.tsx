import Gravity, { MatterBody } from "@/components/common/Gravity";
import SectionIntro from "@/components/common/SectionIntro";
import ShinyInput from "@/components/common/ShinyInput";
import AmazonSesIcon from "@/components/icons/AmazonSesIcon";
import DiscordIcon from "@/components/icons/DiscordIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import KikIcon from "@/components/icons/KikIcon";
import LineIcon from "@/components/icons/LineIcon";
import MastodonIcon from "@/components/icons/MastodonIcon";
import MessengerIcon from "@/components/icons/MessangerIcon";
import OutlookIcon from "@/components/icons/OutlookIcon";
import ProtonMailIcon from "@/components/icons/ProtonMail";
import SignalIcon from "@/components/icons/SignalIcon";
import SkypeIcon from "@/components/icons/SkypeIcon";
import SlackIcon from "@/components/icons/SlackIcon";
import SnapChatIcon from "@/components/icons/SnapChatIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import ViberIcon from "@/components/icons/ViberIcon";
import WeChatIcon from "@/components/icons/WeChatIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import YahooIcon from "@/components/icons/YahooIcon";
import ZohoMailIcon from "@/components/icons/ZohoMailIcon";

export default function Preview() {
  const icons = [
    {
      icon: (
        <TelegramIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <LineIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
    {
      icon: (
        <EmailIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
    {
      icon: (
        <WhatsappIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <InstagramIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <MessengerIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <DiscordIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <FacebookIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <YahooIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
    {
      icon: (
        <SnapChatIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <ViberIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
    {
      icon: (
        <SlackIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
    {
      icon: (
        <OutlookIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <SkypeIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
    {
      icon: (
        <SignalIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <WeChatIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <MastodonIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <ProtonMailIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <ZohoMailIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <AmazonSesIcon
          isAnimation={false}
          className="rounded-full"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <KikIcon isAnimation={false} className="rounded-full" reSize={true} />
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto h-[50vh] flex flex-col justify-between rounded-2xl border border-[var(--secondary-color)] bg-[var(--secondary-color-4)] pt-10 relative">
      <div>
        <SectionIntro
          title={{
            highLiteWords: "in one place",
            normalWords: "80+ Social Media",
            firstHighLightColor: "text-[var(--secondary-color)]",
          }}
          description="Discover the powerful features designed to make your experience seamless, efficient, and enjoyable. Lorem ipsum dolor sit amet consectetur adipisicing elit."
          sectionGap="pb-7"
        />
        <ShinyInput className="max-w-96 mx-auto" />
      </div>
      <Gravity gravity={{ x: 0, y: 1 }}>
        {icons.map((IconData, index) => {
          const Icon = IconData.icon;
          const randomX = Math.random() * 60 + 20;
          const randomY = Math.random() * 20 + 5;

          return (
            <MatterBody
              key={index}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${randomX}%`}
              y={`${randomY}%`}
            >
              <div>{Icon}</div>
            </MatterBody>
          );
        })}
      </Gravity>
    </div>
  );
}
