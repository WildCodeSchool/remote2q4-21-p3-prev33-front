import "./AdminPanel.css";
import AddCarrousel from "./AddCarrousel";
import CarrouselList from "./CarrouselList";
import AddFiles from "../../files/AddFiles";

const AdminPanel = () => (
  <div className="adminPanel">
    <h1>Bienvenue sur votre espace Admin</h1>
    <AddCarrousel />
    <CarrouselList />
    <AddFiles />
  </div>
);

export default AdminPanel;
