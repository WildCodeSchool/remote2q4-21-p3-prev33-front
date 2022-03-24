import { Link } from "react-router-dom";
import "./AdminPanel.css";
import AddCarrousel from "./AddCarrousel";
import AddFiles from "../../files/AddFiles";

const AdminPanel = () => (
  <div className="adminPanel">
    <h1>Bienvenue sur votre espace Admin</h1>
    <AddCarrousel />
    <AddFiles />
  </div>
);

export default AdminPanel;
