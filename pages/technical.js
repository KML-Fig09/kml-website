import Layout from '/components/Layout';

const projects = [
  {
    name: "Advanced YOLOv5 Model with CBAM for Detecting, Tracking, and Visually Highlighting, Gaming Computer Peripherals in Livestreams",
    description: "Developed a custom YOLOv5 model with a CBAM module, trained on 7 combined and augmented Roboflow datasets.",
    features: [
      "Utilised Python datamanagement techniques to combine, augment, and clean, 7 Roboflow datasets, to make the trained model more robust.",
      "Modified YOLOv5 architecture to include an additional CBAM module, improving the model's ability to prioritise in training.",
      "Integrated SAM segmentation and tracking pipeline.",
      "Applied PyTorch and TensorFlow frameworks.",
      "Researched and authored an in-depth 39 page technical report detailing every iteration of the project. (Available upon request.)",
    ],
    image: "/images/HeadphoneHighlight.png",
    github: "https://github.com/KML-Fig09/YOLOV5-CBAM-Object-Detection",
  },
  {
    name: "Current WIP: Large Language Model Personal Project.",
    description: "Training an LLM on all existing documentation surrounding popular MMORPG 'Throne and Liberty' to generate high-level optimised character builds.",
    features: [
      "TBA.",
    ],
    image: "",
    github: "TBA",
  },
  {
    name: "Spotify Predictive Model",
    description:
      "Built regression and Random Forest models for predicting user trends using Spotify API integration.",
    features: [
      "Explored feature engineering techniques.",
      "Demonstrated scalability with large datasets.",
      "Integrated Spotipy API Successfully.",
    ],
    image: "/images/spotipylogo.png",
    github: "https://github.com/KML-Fig09/Spotify-Song-Predictor",
  },
  {
    name: "Automated Sentiment Analysis Tool using Microsoft Azure and PowerApps.",
    description:
      "Built a use case sentiment analysis tool using Microsoft Azure and PowerApps; to take product or service reviews and output positive or negative sentiment scores for marketing purposes.",
    features: [
        "Explored cloud based dataset and server management.",
        "Leveraged multiple ML and data management skills and applications for a single project.",
        "Later expanded on PowerApps's somewhat limited UI Design using Figma Wireframe strategies.",
    ],
    image: "/images/sentimentanalysisscreencap.png",
    github: "add app python code to github",
  },
  {
    name: "AI-empowered Startup Business Use Case",
    description: "Leverages multiple LLMs to develop a use case business from original idea, through market research and initial business plan, to final marketing materials (such as Instagram images and short clips).",
    features: [
      "Utilised prompt engineering skills to leverage ChatGPT, Microsoft CoPilot, Gemini, RunwayML, and Dall-E.",
      "Managed Microsoft CoPilot and GPT back-and-forth collaboration to improve prompts and generate iterative business plans, user profiles, and market research; as well as precise prompt for Dall-E and RunwayML.",
    ],
    image: "/images/veggienoodlessnippet.png",
    github: "add readme to github",
  }
];

export default function TechnicalPortfolio() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Technical Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="mt-2">{project.description}</p>
                <ul className="list-disc list-inside mt-4">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-teal-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
          {/* Placeholder for future projects */}
          <div className="border rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
            <p className="text-gray-600">Future projects incoming!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
