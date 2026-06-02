import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Advantage from './components/Advantage/Advantage.jsx';
import Partner from './components/Partner/Partner.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="advantage" element={<Advantage />} />
      <Route path="partner" element={<Partner />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
