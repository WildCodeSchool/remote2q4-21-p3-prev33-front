import "./AdminPanel.css";
import AddCarrousel from "./AddCarrousel";
import CarrouselList from "./CarrouselList";
import AddFiles from "./AddFiles";
import FilesList from "./FilesList";

const AdminPanel = () => (
  <div className="adminPanel">
    <h1>Bienvenue sur votre espace Admin</h1>
    <AddCarrousel />
    <CarrouselList />
    <AddFiles />
    <FilesList />
  </div>
);

export default AdminPanel;
