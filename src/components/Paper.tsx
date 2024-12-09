import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

export interface PaperProps {
  className?: string;
  data: {
    title: string;
    researcher: string[] | string;
    image?: string;
    publisher: string;
    link: string;
  };
}

export default function Paper(props: PaperProps) {
  return (
    <div
      className={cn(
        "min-h-96 md:min-h-[540px] flex flex-col relative p-6 rounded-[12px]",
        props.className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-[-1] w-full h-full rounded-[12px]",
          "bg-gray-100"
        )}
      />
      <div className="max-w-full">
        <h3 className="text-2xl font-semibold text-wrap min-h-24 line-clamp-3 text-ellipsis mb-2">
          {props.data.title}
        </h3>
        <p className="text-gray-400 text-md text-wrap mb-2">
          {typeof props.data.researcher == "string"
            ? props.data.researcher
            : props.data.researcher.join(", ")}
        </p>
        <p className="text-gray-600 text-md text-wrap">
          Publisher {props.data.publisher}
        </p>
      </div>

      <a href={props.data.link} target="_blank">
        <Button
          className="absolute bottom-6 right-6 bg-green-400 hover:bg-green-500 p-6 rounded-xl"
          variant="ghost"
        >
          <span className="text-xl">Learn more</span>
          <IconArrowRight />
        </Button>
      </a>
    </div>
  );
}
