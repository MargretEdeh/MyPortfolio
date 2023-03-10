import "./App.css";
import { lazy, Suspense, useState } from "react";
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Footer = lazy(() => import("./components/Footer"));
const Blog = lazy(() => import("./components/Blog"));
const Repos = lazy(() => import("./components/Repos"));

// import Header from './components/Header';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
// import Footer from './components/Footer';
// import Blog from './components/Blog';
function App() {
  const [showContact, setShowContact] = useState(false);
  const toogleContact = () => {
    setShowContact(!showContact);
  }
  return (
    <div className="  mx-auto max-w-full  ">
      <Suspense
        fallback={
          <div>
            <div className="w-28 h-28 bg-pink-600 rounded-full mx-auto my-60 shadow-xl animate-ping"></div>
          </div>
          
        }
      >
        <Header showContact={showContact} setShowContact={setShowContact} toogleContact={toogleContact} />
        <Home showContact={showContact} setShowContact={setShowContact} toogleContact={toogleContact} />
        <AboutMe />
        <Projects />
        <Blog />
        <Repos />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
