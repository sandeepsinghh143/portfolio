import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="mt-20 xl:w-[1160px] m-auto">
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </main>
  );
}
