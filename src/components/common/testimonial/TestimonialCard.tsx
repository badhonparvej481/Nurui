/* eslint-disable @next/next/no-img-element */
import { FaQuoteLeft } from "react-icons/fa6";
import RatingStars from "../RatingStars";

interface IProps {
  position: string;
  name: string;
  review: string;
}

export default function TestimonialCard({ position, name, review }: IProps) {
  return (
    <div className="w-52 md:w-full p-4 shadow-2xl rounded-lg bg-[var(--glass-color-2)] border border-[var(--border-color)] relative">
      <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
      <p className="text-text text-[0.9rem] text-center md:text-left">
        {review}
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-5 justify-between gap-3 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-2.5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
            alt=""
            className="size-8 rounded-full"
          />
          <div className="text-center">
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
