import { Link } from 'react-router-dom';
import '../../Styles/Header.css'; 
import logo from '../../assets/HeaderLogo.png'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Redberry Logo" />
        </Link>
      </div>
      
      <div className="buttons">
        <button className="btn btn-secondary">თანამშრომლის შექმნა</button>
        <button className="btn btn-primary">+ შექმენი ახალი დავალება</button>
      </div>
    </header>
  );
}

export default Header;