import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full min-h-64 p-4 py-8 bg-gray-500">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full container mx-auto">
        <div className="flex flex-row gap-8 justify-between md:justify-start">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image
                src="/images/creativelab.png"
                alt="Creative Lab"
                width={120}
                height={64}
              />
            </Link>

            <div className="flex flex-col gap-2 pl-4">
              {["People", "Research", "Article", "Event"].map((item, index) => (
                <Link
                  href={`/${item.toLowerCase()}`}
                  key={index}
                  className="text-gray-100 hover:text-white hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-16 flex flex-col pr-4 md:pr-0">
            <span className="text-gray-100 -mt-5 font-semibold">
              More ways to explore
            </span>
            <a
              href="https://www.facebook.com/groups/1292355628240051"
              target="_blank"
              className="text-white hover:underline mt-[10px]"
            >
              Facebook Group
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 md:px-4">
          <div className="flex flex-row gap-4 max-h-[72px] md:justify-end items-center">
            <Image
              src="/images/kmutnb.png"
              alt="KMUTNB"
              width={72}
              height={72}
            />
            <Image src="/images/fitm.png" alt="FITM" width={118} height={72} />
            <Image src="/images/knlogo.png" alt="KN" width={72} height={72} />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-white md:text-end">
              {"King Mongkut's University of Technology North Bangkok"}
            </span>
            <span className="text-xs text-gray-200 md:text-end">
              Faculty of Industrial Technology and Management, <br />
              Department of Information Technology
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-white md:text-end">
              FernUniversität in Hagen
            </span>
            <span className="text-xs text-gray-200 md:text-end">
              Lehrgebiet Kommunikationsnetze
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
