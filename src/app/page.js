
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Team from "./components/team";
import Ending from "./components/ending";


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
          <Features/>
        </section>
        <section id="team">
          <Team/>
        </section>

        <section id="contact">

       </section>
       
      <Ending/>
       
      

    </main>
  )
}
