import { Link } from "react-router-dom";
import "./AdminPanel.css";
import AddCarrousel from "./AddCarrousel";

const AdminPanel = () => (
  <div className="adminPanel">
    <h1>Bienvenue sur votre espace Admin</h1>
    <AddCarrousel />
  </div>
);

export default AdminPanel;
