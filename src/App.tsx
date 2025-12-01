import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Enterprise } from "./components/Enterprise";
import { DashboardLayout } from "./pages/DashboardLayout";
import { DashboardOverview } from "./pages/DashboardOverview";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TemplatesPage } from "./pages/TemplatesPage";
import { NotFound } from "./pages/NotFound";

const Home = () => (
  <Layout>
    <Hero />
    <Features />
    <Pricing />
    <Enterprise />
  </Layout>
);

import { GridBackground } from "./components/GridBackground";

function App() {
  return (
    <Router>
      <GridBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
