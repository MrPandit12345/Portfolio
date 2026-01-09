import About from "../_component/About";
import Journey from "../_component/Journey";
import Projects from "../_component/Projects";
import Contact from "../_component/Contact";
import Navbar from "../_component/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />

      <main className="pt-12">
        <section
          id="about"
          className="scroll-mt-28 px-6 py-12"
        >
          <About />
        </section>

        <section
          id="journey"
          className="scroll-mt-28 px-6 py-8 mt-16"
        >
          <Journey />
        </section>

        <section
          id="projects"
          className="scroll-mt-28 px-6 py-6 mt-6"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="scroll-mt-28 px-6 py-8 mt-6"
        >
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Page;
