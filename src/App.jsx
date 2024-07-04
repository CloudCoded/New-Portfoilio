import { lazy, Suspense } from "react";
import "./App.css";

const HeroComponent = lazy(() => import("./sections/Hero/Hero"));
const ProjectsComponent = lazy(() => import("./sections/Projects/Projects"));
const SkillsComponent = lazy(() => import("./sections/Skills/Skills"));
const ContactComponent = lazy(() => import("./sections/Contact/Contact"));
const FooterComponent = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <HeroComponent />
        <ProjectsComponent />
        <SkillsComponent />
        <ContactComponent />
        <FooterComponent />
      </Suspense>
    </>
  );
}

export default App;
