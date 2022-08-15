import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/style.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Tentang from "./components/Tentang";
import Faq from "./components/Faq";
import Produk from "./components/Produk";
import Events from "./components/Events";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Navigation />
      </nav>
      <section className="container mx-auto bg-neutral-50 w-full pt-16">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

// <Router>
//       <Navigation />
//       <ul>
//         <li>
//           <Link to="/tentang">Contact</Link>
//         </li>
//       </ul>
//       <section className="container mx-auto bg-neutral-50  h-screen w-full pt-20">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/tentang" element={<Tentang />} />
//         </Routes>
//       </section>
//       <footer>
//         <Footer />
//       </footer>
//     </Router>
