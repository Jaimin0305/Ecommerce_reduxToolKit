import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardData from './CardData';



const Header = ({setData}) => {
  const location = useLocation()

  const {carts} = useSelector((state)=>state.allCart);


  const filterbycaetory = (category)=>{
    const element = CardData.filter((product) => product.address === category)
    setData(element);
  }


  return (
    <>
      <div className="header bg-dark pt-2 pb-2 sticky-top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6"><h1 className='text-white'><Link to={"/"}>Ecommerce</Link></h1></div>
            <div className="col-6"><div className="cart text-white text-end">
              <Link to={'/cart'} type="button" className="btn btn-primary position-relative">
              

              <FaCartShopping />
              

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {carts.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link></div></div>
          </div>
        </div>
      </div>

      
      <div className="navbar-menu bg-secondary text-white pt-3 pb-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-2"><h6 className='m-0 '>Filter by Category -{'>'} </h6></div>
            <div className="col-2"><h6 className='m-0 pointer' onClick={() => setData(CardData)}>No Filter</h6></div>
            <div className="col-2"><h6 className='m-0 pointer' onClick={() => filterbycaetory('DELL')}>DELL</h6></div>
            <div className="col-2"><h6 className='m-0 pointer' onClick={() => filterbycaetory('APPLE MAC')}>APPLE MAC</h6></div>
            <div className="col-2"><h6 className='m-0 pointer' onClick={() => filterbycaetory('HP')}>HP</h6></div>
            <div className="col-2"><h6 className='m-0 pointer' onClick={() => filterbycaetory('ASUS')}>ASUS</h6></div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Header;