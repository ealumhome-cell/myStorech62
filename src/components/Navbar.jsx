import { useContext } from 'react';
import GlobalContext from '../state/globalContext'
import { Link } from 'react-router-dom'

import { IconShoppingCart } from '@tabler/icons-react';

// import "./Navbar.css";

function Navbar() {
 const user = useContext(GlobalContext).user
 const cart = useContext(GlobalContext).cart 

 console.log(cart)

  function getTotalItems() {
    let sum = 0;

    for(let i=0; i<cart.length; i++) {
      sum = sum + cart[i].quantity;
    }
  }
}

  return sum;

  const Navbar = ({ currentPage, setCurrentPage }) => {
  // Function to handle navigation
  const navigate = (page) => {
    setCurrentPage(page);
  };
  }

   const navItems = ['Home', 'Catalog', 'About', 'Contact', 'Admin', 'Cart'];

  return (
  
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">
         My Online Store
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to={"/catalog"} className="nav-link">Catalog</Link>
            </li>

            <li className="nav-item">
              <Link to={"/about"} className="nav-link">About</Link>
            </li>

            <li className='nav-item'>
              <Link to={"/admin"} className='nav-link'>Admin</Link>
            </li>
            
            <li className='nav-item'>
              <Link to={"/contacts"} className='nav-link'>Contacts</Link>
            </li>

            <li className='nav-item'>
              <Link to={"/cart"} className='nav-link'>cart</Link>
            </li>

          <div className='d-flex align-items-center gap-2'>
            <div class="twxt-white">ID:{user.id} {user.name}</div>
            <div class="text-white">
              <IconShoppingCart stroke={2} /> {cart.length}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;