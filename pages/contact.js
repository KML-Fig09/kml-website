import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-lg text-center mb-10">
          Feel free to reach out through the form below or find me on these platforms:
        </p>

        <div className="flex justify-center space-x-8 mb-10">
          <a href="https://linkedin.com/in/kim-littler" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-lg">LinkedIn</a>
          <a href="https://github.com/KML-Fig09" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-lg">GitHub</a>
          <a href="https://x.com/KimMLittler" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline text-lg">Twitter / X</a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mzzbjwrz"
          method="POST"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
        >
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            required
          />

          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            required
          />

          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}