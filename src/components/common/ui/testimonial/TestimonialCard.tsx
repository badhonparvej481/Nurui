import { FaQuoteLeft } from "react-icons/fa6";
import RatingStars from "../../RatingStars";
import ImageComponent from "../../Image";

interface IProps {
  position: string;
  name: string;
  review: string;
}

export default function TestimonialCard({ position, name, review }: IProps) {
  return (
    <div className="w-52 lg:w-full p-4 shadow-2xl rounded-lg bg-[var(--glass-color)] dark:bg-[var(--glass-color-2)] border border-[var(--border-color)] relative">
      <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
      <p className="text-text text-[0.9rem] text-center lg:text-left">
        {review}
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-5 justify-between gap-3 lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center gap-2.5">
          <ImageComponent
            src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
            alt=""
            className="size-8 rounded-full"
          />
          <div className="text-center lg:text-start">
            <h2 className="text- font-[600]">{name}</h2>
            <p className="text-sm text-[#727272]">{position}</p>
          </div>
        </div>

        <RatingStars size="size-3" />
      </div>
      <FaQuoteLeft className=" absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
    </div>
  );
}
