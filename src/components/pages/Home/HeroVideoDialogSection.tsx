import { HeroVideoDialog } from "@/components/common/HeroVideoDialog";

const HeroVideoDialogSection = () => {
  return (
    <section className="relative max-w-5xl mx-[1.1rem] md:mx-[1.3rem] lg:mx-[1.5rem] xl:mx-auto">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
};

export default HeroVideoDialogSection;
