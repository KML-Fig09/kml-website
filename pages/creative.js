import Layout from '/components/Layout';

const creativeProjects = [
  {
    title: "Academic Design Projects",
    images: ["/images/DMLogoTransp2.png", "/images/Eli3.png", "/images/MindMazeStudiosLogo.png", "/images/SCupNoodleVideo3.mp4", "/images/_4c769aae-83d8-47b8-a885-67f346de956a.jpeg", "/images/_9b291970-b3a9-4693-870c-e7cd112fd8ea.jpeg"],
    description: "Character designs, logos, and video game additions, made for an academic group project wherein we developed a use case indie fantasy game, as well as images generated for use in a project aimed at developing a personal start-up business from start to finish with minimal human involvement and maximum LLM leverage."
  },
  {
    title: "Personal Design Concepts",
    images: ["/images/sentimentproBTS.png", "/images/sentimentproUIWIP.png", "/images/RB Banner With Name.jpg"],
    description: "Designs ranging from concept designs for mobile and web interfaces focused on accessibility, user experience, and improving pre-existing frameworks, to banners made for personal use. Notably, the SentimentPro UI design was inspired by a technical project, wherein the constraints of PowerApps left me frustrated. It's still a WIP, but the concept is sleek, easy-to-use, with a cool colour palette.",
  },
  {
    title: "Sticker Design Collection",
    images: ["/images/SleepySlothPin1.png", "/images/Kakashi.png", "/images/Moth5NoBack.png", "/images/Panda2Cut.png", "/images/Snail4NoBack.png", "/images/Shield1.png"],
    description: "A series of vibrant and unique sticker designs featured on a personal Redbubble shop, hobby only. Most commonly sketched with pen and paper before digitisation.",
  },
];

export default function Creative() {
  return (
    <Layout>
      <section className="bg-background-dark text-foreground-light max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Creative Portfolio</h2>
        <div className="space-y-10">
          {creativeProjects.map((project, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <p className="text-lg mt-2">{project.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {project.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={project.title}
                    className="w-full rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
