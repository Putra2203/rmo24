import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Lomba from "./components/Lomba";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Lomba />
      </div>

    </>
  );
};

export default App;
