import Image from "next/image";
import { cn } from "@/lib/utils";

export interface PeopleProps {
  people: {
    name: string;
    role: string;
    image: string;
    email: string;
    group: "Professor" | "Student" | "Alumni";
  };
}

export default function People({ people }: PeopleProps) {
  return (
    <div
      className={cn(
        "aspect-square w-full rounded-[12px] overflow-hidden",
        "bg-gradient-to-br from-gray-900/50 to-gray-900/10",
        "relative"
      )}
    >
      <div className="absolute w-full h-full top-0 left-0 z-0 rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={`/images/people/${people.image}`}
            alt="Person"
            width={0}
            height={0}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-500 to-40% rounded-b-lg" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col items-end z-10 backdrop-blur-[2px] p-4 pt-2 w-full">
        <span className="text-2xl font-medium line-clamp-1 overflow-hidden text-ellipsis text-green-500">
          {people.name}
        </span>
        <span className="text-gray-50 line-clamp-1 overflow-hidden text-ellipsis">
          {people.role}
        </span>
        <a
          href={`mailto:${people.email}`}
          target="_blank"
          className="text-gray-50 text-sm line-clamp-1 overflow-hidden text-ellipsis"
        >
          {people.email}
        </a>
      </div>
    </div>
  );
}
