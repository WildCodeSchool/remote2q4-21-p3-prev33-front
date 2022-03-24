import "./AdminPanel.css";
import AddCarrousel from "./AddCarrousel";
import CarrouselList from "./CarrouselList";

const AdminPanel = () => (
  <div className="adminPanel">
    <h1>Bienvenue sur votre espace Admin</h1>
    <AddCarrousel />
    <CarrouselList />
  </div>
);

export default AdminPanel;
