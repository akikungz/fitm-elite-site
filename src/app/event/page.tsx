import Image from "next/image";
import Hero from "@/components/Hero";
import { events } from "@/data/events";

export default function Event() {
  return (
    <>
      <Hero
        title={
          <>
            Event by <br />
          </>
        }
        description="We join conferences to help share our ideas"
      />

      <div className="container p-4 mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-4">
        {
          events.map((item, index) => (
            <div key={index} className="col-span-3 flex flex-col gap-2 p-4 justify-between">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={0}
                className="object-cover rounded-[8px] hover:scale-105 transition-transform ease-in-out duration-300"
              />
              <div className="max-w-full">
                <h3 className="text-xl font-semibold text-ellipsis line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-ellipsis text-wrap line-clamp-1">
                  {item.category}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
