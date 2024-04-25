import './app.scss';
import '@fontsource/poppins';
import Hero from './Components/hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Section2 from './Components/section2/Section2';
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
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
      {/* <section></section> */}
    </div>
  );
};

export default App;
