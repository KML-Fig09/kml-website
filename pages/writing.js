import Layout from '/components/Layout';

const articles = [
  {
    title: "Developing an Advanced YOLOv5 Object Detection Model to Detect Computer Peripherals in Video Footage, with Tracking Algorithm and Edge Detection Integration",
    description: "Detailed final project report, the culmination of a Master of Science in AI at the University of York. Distinction graded. Available on request.",
    thumbnail: "/images/finalprojectsnippet.png",
  },
  {
    title: "A Critical Reflection on the Societal Implications of the Development and Deployment of AI in the Creative Industries",
    description: "A 13 page thesis surrounding the use of AI in Hollywood, particularly regarding the SAG-AFTRA strikes in 2023, grounded in ethical frameworks typically referred to in Sociology. Distinction graded. Available on request.",
    thumbnail: "/images/sociologythesissnippet.png",
  },
  {
    title: "Leveraging AI for Vegan and Vegetarian Food Product Innovation: The Veggie Noodles Project",
    description: "A report on the use and viability of AI tools to conduct market research, product development, and advertising materials for a prepare-at-home v/ve noodle-in-a-cup project. Distinction graded. Available on request.",
    thumbnail: "/images/veggienoodlessnippet.png",
  },
  {
    title: "RPG Storytelling after the Pandemic",
    link: "https://thestray.org/2023/04/13/video-gaming-after-the-pandemic-why-rpg-storytelling-is-thriving-more-than-ever/",
    thumbnail: "/images/videogamingafterthepandemic.png",
  },
  {
    title: "How to Market a Book",
    link: "https://www.writing.ie/resources/how-to-market-a-book-in-2022-by-kim-littler/",
    thumbnail: "/images/meforwritingie.jpg",
  },
  {
    title: "Five Things to Know About Getting an Audiobook Out Into the World",
    link: "https://www.writing.ie/resources/five-things-to-know-about-getting-an-audiobook-out-into-the-world-by-kim-littler/",
    thumbnail: "/images/meforwritingie.jpg",
  },
  {
    title: "Affect vs Effect",
    link: "https://blog.reedsy.com/affect-vs-effect/",
    thumbnail: "/images/affectvseffect.png",
  },
  {
    title: "Types of Poetry",
    link: "https://blog.reedsy.com/guide/poetry/",
    thumbnail: "/images/typesofpoetry.png",
  },
  {
    title: "The 13 Best Fantasy Map Generators",
    link: "https://blog.reedsy.com/fantasy-map-generators/",
    thumbnail: "/images/mygeneratedmap.jpg",
  },
  {
    title: "Artificial Intelligence in Digital Media: How We Can Shape the Future with AI",
    link: "https://thestray.org/2023/04/04/artificial-intelligence-in-digital-media-how-we-can-shape-the-future-with-ai/",
    thumbnail: "/images/aiguy.jpg",
  }
];

export default function Writing() {
  return (
    <Layout>
      <section className="bg-background-dark text-foreground-light py-10 px-6">
        <h2 className="text-4xl font-bold text-primary-green text-center mb-10">
          Writing Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border-color rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-secondary-dark"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-foreground-light">
                  {article.title}
                </h3>
                <p className="text-text-muted mt-2">{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}

