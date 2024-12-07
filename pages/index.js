import Layout from '/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20 bg-gradient-to-r from-teal-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold">Kim Littler</h1>
        <a className="mt-4 text-xl">AI / ML Consultant and Engineer, and Game Design Enthusiast</a>
      </section>
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          Hi, I&lsquo;m Kim. Nice to meet you!
          <br />
          Highly motivated Artificial Intelligence and Machine Learning Engineer with an MSc in Artificial Intelligence for the Creative Industries (Distinction) from the University of York, where I earned The School Award for achieving the highest grade point average across the course. I specialize in blending technical AI and ML expertise 
          with creative problem-solving. 
          <br /> My unique skillset, combining coding, data handling, and AI proficiency with a background in marketing, SEO, and social media, gives me a unique insight and I am passionate about using this experience to develop strong AI-driven solutions that solve tangible, real-world, problems. 
          <li>
            I also recently appeared on  
            <a 
              href="https://www.futureprint.tech/podcast/what-is-ai-kim-littler" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-500 hover:underline"
            >
            &nbsp;FuturePrint Tech’s Podcast
            </a>, talking about the solutions (and problems) brought about by AI in 2024:
          </li>
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Academic Achievements:</h3>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>MSc in Artificial Intelligence for the Creative Industries: Graduated with Distinction and earned the School Award for Top GPA.</li>
            <li>BA in English Literature (With Placement Year): Graduated with a High 2:1, with a 13-month industry placement in marketing and SEO in-between.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Key Skills:</h3>
          <ul className="grid grid-cols-2 gap-4 mt-4 text-lg">
            <li>Coding Lanugages (Python, HTML, SQL, CSS)</li>
            <li>Machine Learning (PyTorch, TensorFlow)</li>
            <li>Cloud Deployment (GCP, Azure)</li>
            <li>Prompt Engineering (ChatGPT, Gemini, Microsoft Copilot, Claude, GROK)</li>
            <li>Computer Vision Models (YOLO, SSD)</li>
            <li>Collaboration Tools (Git, Jupyter)</li>
            <li>Design (Figma, Canva)</li>
            <li>Marketing and Social Media (Google Suite, Google Analytics, Microsoft Suite)</li>
            <li>Writing for Diverse Audiences</li>
            <li>Search Engine Optimisation (SEO, Ahrefs, Semrush)</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Interests:</h3>
          <p className="mt-4 text-lg">
            Lifelong gamer, competitive fencer, and outdoors enthusiast. Passionate about gaming, learning, and 
            fostering diverse insights and solutions through a high level of communication skill.
          </p>
        </div>
      </section>
    </Layout>
  );
}
