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
          I am a highly motivated AI and Machine Learning Researcher with an MSc in Artificial Intelligence for the 
          Creative Industries (Distinction) from the University of York. I specialize in blending technical expertise 
          with creative problem-solving, focusing on developing AI-driven solutions that make a difference. 
          <br />
          <li>
            Recently appeared on:  
            <a 
              href="https://www.futureprint.tech/podcast/what-is-ai-kim-littler" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-500 hover:underline"
            >
            &nbsp;FuturePrint Tech’s Podcast
            </a>, discussing “What is AI?”
          </li>
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Academic Achievements:</h3>
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>MSc in Artificial Intelligence for the Creative Industries: Graduated with Distinction and earned the School Award for Top GPA.</li>
            <li>BA in English Literature (With Placement Year): Graduated with a High 2:1, and worked as a Content Marketer for Reedsy for 13 months.</li>
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
            Lifelong gamer, competitive fencer, and creative writer. Passionate about gaming, strategic thinking, and 
            fostering diverse ideas through a high level of communication skill.
          </p>
        </div>
      </section>
    </Layout>
  );
}
