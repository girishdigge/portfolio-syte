import './app.scss';
import Hero from './Components/hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import '@fontsource/poppins';
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>Services</section>
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
