import './app.scss';
import '@fontsource/poppins';
import Hero from './Components/hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Section2 from './Components/section2/Section2';
import Section3 from './Components/section3/Section3';
import Section4 from './Components/section4/Section4';
import Section5 from './Components/section5/Section5';
import Section6 from './Components/section6/Section6';
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Section4 />
      </section>
      <section>
        <Section5 />
      </section>
      {/* <section>
        <Section6 />
      </section> */}

      {/* <section>Contact</section> */}
      {/* <section></section> */}
    </div>
  );
};

export default App;
