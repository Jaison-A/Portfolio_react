import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import CertificationDetail from './components/CertificationDetail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // ✅ wrap everything
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:id', element: <ProjectDetail /> },
      { path: '/certifications', element: <Certifications /> },
      { path: '/certifications/:id', element: <CertificationDetail /> },
      { path: '/contact', element: <Contact /> },
    ],
    errorElement: <h1>404 error page not fount</h1>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
