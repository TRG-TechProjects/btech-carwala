import React, { useState , useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {

  // dark mode feature
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")? 
    localStorage.getItem("theme"):"light");

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  }, [theme]);

  // AOS initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
  });
  AOS.refresh();
  }, []);

  return (
    // <div>
    //   <Navbar theme={theme} setTheme={setTheme} />
    //   <Hero theme={theme}/>
    //   <About />
    //   <Services />
    //   <CarList />
    //   <Testimonial />
    //   <AppStoreBanner />
    //   <Contact />
    //   <Footer /> 
    // </div>

    <div>
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Add id="" to allow scrolling */}
      <div id='hero'><Hero theme={theme}/></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="cars"><CarList /></div>
      <div id="reviews"><Testimonial /></div>
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// className="bg-white dark:bg-black dark:text-white"