
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";


export default function Home() {
  return (
    <main className="font-poppins">
        <div className="bg-gradient-to-r from-cyan-700 to-blue-500">
          <Navigation/>
          <section id='home'>
              <Hero/>
          </section>
        </div>
        <section id="about">
          <About/>
        </section>
        <section id="features">

        </section>
        <section id="team">

        </section>

        <section id="contact">

       </section>

    </main>
  )
}
