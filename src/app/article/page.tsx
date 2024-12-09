import ArticlePreview from "@/components/ArticlePreview";
import Hero from "@/components/Hero";

export default function Article() {
  return (
    <>
      <Hero
        title={
          <>
            Article library in <br />
          </>
        }
        description="We share our knowledges everytime"
      />

      <div className="container p-4 mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-4">
        {
          Array(12).fill(0).map((_, index) => (
            <ArticlePreview
              title="Article Title"
              description="Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ipsum finibus at; feugiat rutrum a. Facilisi fermentum arcu elementum nostra justo. Urna suscipit pellentesque ullamcorper pharetra condimentum a luctus? Feugiat nisi integer laoreet nam fringilla; tempus a nascetur scelerisque. Scelerisque risus pharetra eget gravida dapibus commodo adipiscing senectus dictum."
              image="/images/image_5.jpg"
              className="col-span-3"
              link="/article/preview"
              key={index}
            />
          ))
        }

      </div>
    </>
  );
}
