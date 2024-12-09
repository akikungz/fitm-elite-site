import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

interface ArticlePreviewProps {
    title: string;
    description: string;
    image: string;
    className?: string;
    link: string;
}

export default function ArticlePreview({ title, description, image, className, link }: ArticlePreviewProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden",
                "flex flex-col",
                className
            )}
        >
            <div className="relative h-48 rounded-t-[12px]">
                <Image
                    src={image}
                    alt={title}
                    width={0}
                    height={0}
                    className="object-cover w-full h-full rounded-t-[12px]"
                    layout="fill"
                    objectFit="cover"
                />

                <div className={cn(
                    "absolute bottom-0 px-4 py-1 w-full h-16 flex flex-col",
                    "bg-gray-700/30 backdrop-blur-[2px] text-white"
                )}>
                    <span className="text-green-500 text-2xl font-bold line-clamp-1 text-ellipsis">{title}</span>
                    <span className="text-gray-100 text-sm">Article Category</span>
                </div>
            </div>

            <div className="p-4">
                <p className="text-gray-700 line-clamp-5 text-ellipsis">{description}</p>
            </div>

            <div className="px-4 py-2 flex justify-between items-center bg-gray-700 rounded-b-[12px]">
                <div className="flex flex-row gap-2 items-center">
                    <Image src="/images/people/thitipong-t.jpg" alt="Avatar" width={40} height={40} className="rounded-full" />
                    <div className="flex flex-col">
                        <span className="text-white text-xs">Author</span>
                        <span className="text-gray-200 text-xs">Role</span>
                    </div>
                </div>

                <Button
                    variant="ghost"
                    asChild
                    size="sm"
                    className="pointer-events-auto text-green-500 hover:bg-green-500 hover:text-white rounded-[8px]"
                >
                    <Link href={link}>
                        Read more
                        <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
