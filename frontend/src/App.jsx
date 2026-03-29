import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import "./index.css";
import MassTimings from "./pages/MassTimings";
import Login from "./pages/Login";
import Events from "./pages/Events";
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import GalleryAdmin from "./pages/GalleryAdmin";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import ParishClergy from "./pages/ParishClergy";
import EucharisticAdoration from "./pages/EucharisticAdoration";
import AdorationChapel from "./pages/AdorationChapel";
import Confession from "./pages/Confession";
import ReligiousActivities from "./pages/ReligiousActivities";
import Sacraments from "./pages/Sacraments";
import Baptism from "./pages/Baptism";
import Reconciliation from "./pages/Reconciliation";
import HolyCommunion from "./pages/HolyCommunion";
import Confirmation from "./pages/Confirmation";
import Marriage from "./pages/Marriage";
import HolyOrders from "./pages/HolyOrders";
import AnointingOfTheSick from "./pages/AnointingOfTheSick";
import Zones from "./pages/Zonal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MassTimings" element={<MassTimings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
 <Route path="/newsevents" element={<NewsEvents />} />
 <Route path="/gallery" element={<Gallery />} />
  <Route path="/galleryAdmin" element={<GalleryAdmin />} />
    <Route path="/contact" element={<Contact />} />
      <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/ParishClergy" element={<ParishClergy />} />
       <Route path="/adoration" element={<EucharisticAdoration />} />
       <Route path="/AdorationChapel" element={<AdorationChapel />} />
       <Route path="/religiousactivities" element={<ReligiousActivities />} />
       
<Route path="/confession" element={<Confession />} />
     <Route path="/sacraments" element={<Sacraments />} />
        <Route path="/baptism" element={<Baptism />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
        <Route path="/holy-communion" element={<HolyCommunion />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/holy-orders" element={<HolyOrders />} />
        <Route path="/anointing" element={<AnointingOfTheSick />} />
        <Route path="/zones" element={<Zones />} />
    </Routes>
  );
}

export default App;
