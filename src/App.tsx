import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { SkinQuiz } from './pages/SkinQuiz';
import { SkinResult } from './pages/SkinResult';
import { Treatments } from './pages/Treatments';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/skin-test" element={<SkinQuiz />} />
        <Route path="/skin-result" element={<SkinResult />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
