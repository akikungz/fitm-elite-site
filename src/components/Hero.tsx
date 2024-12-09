import SparklesText from "./ui/sparkles-text";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: React.ReactNode;
  description: string;
  main?: boolean;
}

export default function Hero({ title, description, main }: HeroProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full inter",
        "gap-6 container mx-auto relative",
        "transition-all ease-in-out duration-300",
        main
          ? "pt-16 md:pt-16 lg:pt-32 xl:pt-48 pb-32 lg:pb-48 xl:pb-64"
          : "pt-16 pb-32"
      )}
    >
      <h1 className="text-6xl lg:text-8xl font-bold text-center inline-block">
        {title}
        <SparklesText
          text="CreativeLab"
          className="text-green-500 inline text-6xl lg:text-8xl"
        />
      </h1>

      <span className="text-gray-300 inter text-2xl lg:text-4xl text-center px-8 3xl:p-0">
        {description}
      </span>

      <AnimatedGridPattern
        numSquares={300}
        maxOpacity={0.5}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] absolute z-[-1] top-1/2 -translate-y-1/2 w-full"
        )}
      />
    </div>
  );
}
