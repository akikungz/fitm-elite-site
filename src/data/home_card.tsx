const Background = ({ url }: { url: string }) => (
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
    style={{
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  />
);

export const home_cards = [
  {
    name: "People",
    description: "We are diverse group of thinkers and inventors",
    className: "col-span-3",
    background: <Background url="/images/image_1.jpg" />,
    Icon: undefined,
    href: "/people",
    cta: "Learn more"
  },
  {
    name: "Research",
    description: "We are an interdisciplinary research lab",
    className: "col-span-3",
    background: <Background url="/images/image_2.jpg" />,
    Icon: undefined,
    href: "/research",
    cta: "Learn more"
  },
  {
    name: "Article",
    description: "We share our knowledges everytime",
    className: "col-span-3",
    background: <Background url="/images/image_3.jpg" />,
    Icon: undefined,
    href: "/article",
    cta: "Learn more"
  },
  {
    name: "Event",
    description: "We host conferences to help share our ideas",
    className: "col-span-3",
    background: <Background url="/images/image_4.jpg" />,
    Icon: undefined,
    href: "/event",
    cta: "Learn more"
  }
];
