import Hero from "@/components/Hero";
import Paper from "@/components/Paper";
import { papers } from "@/data/papers";

export default function Research() {
  return (
    <>
      <Hero
        title={
          <>
            Research from <br />
          </>
        }
        description="We are an interdisciplinary research lab"
      />

      <div className="p-4 grid grid-cols-3 md:grid-cols-6 xl:grid-cols-9 gap-4 container mx-auto">
        {papers.map((paper, index) => (
          <Paper key={index} data={paper} className="col-span-3" />
        ))}
      </div>
    </>
  );
}
