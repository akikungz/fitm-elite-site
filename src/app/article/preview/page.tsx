import Image from "next/image";
import { cn } from "@/lib/utils";
// import Editor from "@/components/Editor";

export default function ArticlePreview() {
    return (
        <>
            <div
                className={cn(
                    "relative w-full",
                    "h-64 bg-gray-200 rounded-lg overflow-hidden"
                )}
            >
                <Image
                    src="/images/image_5.jpg"
                    alt="Article Preview"
                    width={0}
                    height={0}
                    layout="fill"
                    objectFit="cover"
                />

                <div
                    className={cn(
                        "absolute bottom-0 py-1 w-full h-16",
                        "bg-gray-700/50 backdrop-blur-[2px] text-white"
                    )}
                >
                    <div className="flex flex-row justify-between items-center container mx-auto px-4">
                        <div className="flex flex-col">
                            <span className="text-green-500 text-2xl font-bold line-clamp-1 text-ellipsis">Article Title</span>
                            <span className="text-gray-100 text-sm">Article Category</span>
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-white text-xs text-end">Author</span>
                                <span className="text-gray-200 text-xs text-end">Role</span>
                            </div>
                            <Image src="/images/people/thitipong-t.jpg" alt="Avatar" width={40} height={40} className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-4 mx-auto flex flex-col gap-4 items-center">
                <p className="indent-8">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Libero donec faucibus fusce id dolor odio dui conubia. Mauris sagittis duis nisl lobortis viverra per. Venenatis natoque eros aptent; hac conubia ultrices commodo semper. Placerat tortor pulvinar parturient natoque habitasse. Integer platea mus dui ex euismod ad. Fusce augue auctor pellentesque montes dui gravida sodales torquent placerat. Lectus conubia torquent ullamcorper luctus convallis nascetur luctus imperdiet.
                </p>

                <p className="indent-8">
                    Sapien placerat aptent euismod ac, potenti iaculis nibh facilisis. In ad maximus finibus mauris tempor cursus. Vehicula orci rhoncus elit tortor mus lacus dis potenti ipsum. Eget semper tincidunt conubia sollicitudin scelerisque neque. Porttitor integer lectus cubilia cras justo tempor. Neque aliquam etiam velit habitasse nec venenatis malesuada curae. Commodo dictum consequat vulputate ornare proin fermentum tempor morbi.
                </p>

                <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="relative aspect-video h-32 sm:h-64 lg:h-96">
                        <Image src="/images/image_5.jpg" alt="Image" width={0} height={0} layout="fill" objectFit="cover" className="object-cover w-full" />
                    </div>
                    <span className="text-gray-300 text-sm">Simple description</span>
                </div>
                
                <p className="indent-8">
                    Natoque vitae ut molestie aptent interdum cras metus. Ultricies inceptos odio nisi at bibendum quis. Aptent finibus congue imperdiet lorem posuere sed augue sociosqu. Netus augue ad habitasse hac mus feugiat. Non aptent libero vitae aptent auctor felis pulvinar vulputate. Neque facilisi venenatis lectus augue at. Fermentum quisque orci a sapien facilisis. Vestibulum vulputate eleifend scelerisque ridiculus nostra quam elementum imperdiet. Elit tempus mollis nibh mattis; rutrum amet.
                </p>
            </div>
        </>
    )
}