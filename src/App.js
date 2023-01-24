import "./App.css";
import { lazy, Suspense } from "react";
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Footer = lazy(() => import("./components/Footer"));
const Blog = lazy(() => import("./components/Blog"));

// import Header from './components/Header';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
// import Footer from './components/Footer';
// import Blog from './components/Blog';
function App() {
  return (
    <div className=" container mx-auto ">
      <Suspense
        fallback={
          <div>
            <div className="w-28 h-28 bg-pink-600 rounded-full mx-auto my-60 shadow-xl animate-ping"></div>
          </div>
          
        }
      >
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Blog />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
