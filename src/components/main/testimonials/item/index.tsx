import QuoteIcon from '@/public/assets/quote-icon.svg';
import Image from 'next/image';

export type TestimonialItemProps = {
  content: string;
  author: string;
  position: string;
  avatar: string;
};

const TestimonialItem = ({
  content,
  author,
  position,
  avatar
}: TestimonialItemProps) => {
  return (
    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
      <blockquote className="relative">
        <p className="text-lg tracking-tight text-slate-900">{content}</p>
      </blockquote>
      <figcaption className="mt-6 flex justify-between border-t border-slate-100 pt-6">
        <div>
          <div className="font-display text-base text-slate-900">{author}</div>
          <div className="mt-1 text-sm text-slate-500">{position}</div>
        </div>
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            alt={`avatar-${author}`}
            src={avatar}
            objectFit="cover"
            layout="fill"
          ></Image>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialItem;
