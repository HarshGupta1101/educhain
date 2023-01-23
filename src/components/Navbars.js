import React from 'react';
import styled from 'styled-components';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { Button } from "react-bootstrap";

const Navbars = ({ currentUser, nearConfig, wallet }) => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();

  const handleUser = (e) => {
    if (currentUser && e.target.textContent === 'Logout') {
      (function signOut() {
        wallet.signOut();
        window.location.replace(
          window.location.origin + window.location.pathname
        );
      })();
    } else if (!currentUser && e.target.textContent === 'Login') {
      (function signIn() {
        wallet.requestSignIn(nearConfig.contractName, 'NEAR');
      })();
    }
  };

  return (
    <NavbarWrapper className='bg-white flex'>
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to='/' className='navbar-brand text ls-1 fw-8'>
            <span>E</span>du<span>C</span>hain
          </Link>

          <div className='navbar-btns flex'>
            <Link to='/' className='cart-btn'>
              Home
            </Link>
            <Link to='/about' className='cart-btn'>
              About Us
            </Link>
            <Link to='/courses' className='cart-btn'>
              Courses
            </Link>
            <Button onClick={handleUser}>
                {currentUser ? "Logout" : "Login"}
            </Button>
            <Link to='/cart' className='cart-btn1'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button
              type='button'
              className='sidebar-open-btn'
              onClick={() => openSidebar()}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  .cart-btn1 {
    margin-right: 18px;
    font-size: 24px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cart-btn {
    margin-right: 20px;
    font-size: 18px;
    font-weight: 500; 
  }
  .cart-btn:hover {
    color
  }

  .sidebar-open-btn {
    display: none;
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 500px) {
    .sidebar-open-btn {
      display: none;
      transition: all 300ms ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
    .cart-btn {
      display : none;
    }
  }
`;

export default Navbars;
