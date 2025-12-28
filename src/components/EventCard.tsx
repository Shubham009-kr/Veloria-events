import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
        <Image src={image} alt={title} width={410} height={300} className="poster"/>
        <div className="flex flex-row gap-2">
            <Image src="/icons/pin.svg" alt="Location Icon" width={14} height={14} />
            <p>{location}</p>
        </div>
        <p>{title}</p>
        <div className="datetime">
            <Image src="/icons/calendar.svg" alt="Calendar Icon" width={14} height={14} />
            <p>{date}</p>
            <Image src="/icons/clock.svg" alt="Clock Icon" width={14} height={14} />
            <p>{time}</p>
        </div>
    </Link>
  )
}

export default EventCard