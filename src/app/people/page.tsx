import PeopleItem from "@/components/People";
import { peoples } from "@/data/people";
import { Divider } from "@mantine/core";
import Hero from "@/components/Hero";

export default function People() {
  return (
    <>
      <Hero
        title={
          <>
            Who we are <br />
          </>
        }
        description="We are diverse group of thinkers and inventors"
      />

      {/* People */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-green-500 px-4">Professors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {peoples
            .filter(({ group }) => group == "Professor")
            .map((people, index) => (
              <PeopleItem key={index} people={people} />
            ))}
        </div>

        <div className="mx-auto container">
          <Divider my="md" mx="xl" />
        </div>

        <h2 className="text-4xl font-bold text-green-500 px-4">Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {peoples
            .filter(({ group }) => group == "Student")
            .map((people, index) => (
              <PeopleItem key={index} people={people} />
            ))}
        </div>

        <div className="mx-auto container">
          <Divider my="md" mx="xl" />
        </div>

        <h2 className="text-4xl font-bold text-green-500 px-4">Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {peoples
            .filter(({ group }) => group == "Alumni")
            .map((people, index) => (
              <PeopleItem key={index} people={people} />
            ))}
        </div>
      </div>
    </>
  );
}
