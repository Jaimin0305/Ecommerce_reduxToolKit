import React, { useState } from 'react';
import CardData from './CardData';
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';



const Home = ({items}) => {
  const [cartsData, setCartsData] = useState(CardData);
  const dispatch = useDispatch();


  const send = (e) =>{
    dispatch(addToCart(e))
    toast.success("Item added In Your Cart")
  }

  
  return (
    <>
      <div className="carddata mt-5 mb-5">
        <div className="container">
        <h2 className='text-secondary text-center'>SHOP NOW</h2>
          <div className="row gy-5 gx-5 mt-3">
            {
              items.map((prod, index) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="card box-shad">
                      <img src={prod.imgdata} className="card-img-top" alt="..." style={{height:"280px"}} />
                      <div className="card-body pb-0 d-flex justify-content-between align-items-center">
                        <h5 className="card-title m-0">{prod.name}</h5>
                        <p className='bg-success rating text-white m-0'>{prod.rating} ★</p>
                      </div>
                      <div className="card-body pt-0 pb-0 d-flex justify-content-between mt-1 align-items-center">
                        <p className="card-title m-0">{prod.address}</p>
                        <p className='m-0'>₹ {prod.price}</p>
                      </div>
                      

                    <button onClick={()=> send(prod)} className='btn btn-warning mt-2'>Add To Cart</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;