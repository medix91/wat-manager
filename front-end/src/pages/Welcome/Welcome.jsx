import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <img src="../assets/images/logos/wat-logo.png" alt="Logo" className="logo" />
        <h1>WAT Manager</h1>
        <p>Votre assistant pour gérer tâches et portefeuille efficacement.</p>
        <Link to="/register" className="btn-start">Commencer</Link>
        <p className="login-link">
          Déjà client ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
