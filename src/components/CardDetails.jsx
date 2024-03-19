import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart,removeToCart, removeSingleItem,emptyCart } from '../redux/features/cartSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



const CardDetails = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const { carts } = useSelector((state) => state.allCart);
  console.log(carts);
  const dispatch = useDispatch();




  const handleIncrement = (e) =>{
      dispatch(addToCart(e))
  }

  const handleDecrement = (e) =>{
    dispatch(removeToCart(e))
    toast.success("Item Removed from Cart")
    

}

  const removeitem = (e) =>{
  dispatch(removeSingleItem(e))
}

const clearCart = () =>{
  dispatch(emptyCart())
  toast.success("Your Cart is Empty")
  
}

const total= ()=>{
  let totalprice = 0
  carts.map((ele,index)=>{
    totalprice = ele.price * ele.qnty + totalprice
  });
  setTotalAmt(totalprice)
}

const totalquantity = ()=>{
  let totalqty = 0
  carts.map((ele,index)=>{
    totalqty = ele.qnty + totalqty

  });
  setTotalQty(totalqty)
}

useEffect(()=>{
  total()
},[total])

useEffect(()=>{
  totalquantity()
},[totalquantity])

  return (
    
    <>
      <div className="cart mt-5">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-8">
              <div className="card">
                <div className="card-header bg-dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className='m-0 text-white'>Cart Calculation({carts.length})</h5>
                    {
                      carts.length > 0 ? <button onClick={clearCart} className='btn btn-danger'><h6 className='m-0 text-center'><MdDeleteForever /> Empty Cart</h6></button> : ""
                    }
                  </div>
                </div>
                <div className="card-body">
                  {
                    carts.length === 0 ?
                      <div className="empty">
                        <div className="row justify-content-center">
                          <div className="col-8 text-secondary text-center">
                            <h1>🛒</h1>
                            <h4>Your Cart is Empty</h4>
                            <Link to={"/"} className='btn btn-success mt-3'>Continue Shopping</Link>
                          </div>
                        </div>
                      </div>
                      :
                      <div className="cart-table">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-3"><h5>Action</h5></div>
                              <div className="col-3"><h5>Product</h5></div>
                              <div className="col-3"><h5>Name</h5></div>
                              <div className="col-3"><h5>Price</h5></div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <div className="col-6"><h5>Qty</h5></div>
                              <div className="col-6 text-end"><h5>Total Amount</h5></div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="cart-items">

                          {
                            carts.map((prod, index) => {
                              return (
                                <div key={index} className="sitem row align-items-center mb-3">

                                  <div className="col-6">

                                    <div className="row align-items-center">
                                      <div className="col-3"><button onClick={() =>handleDecrement(prod.id)} className='btn btn-danger ps-2 pe-2 pt-1 pb-1'> <h4><MdDeleteForever /></h4></button></div>
                                      <div className="col-3 imgs"><img src={prod.imgdata} alt="" /></div>
                                      <div className="col-3"><p className='m-0'>{prod.name}</p></div>
                                      <div className="col-3"><p className='m-0'>₹ {prod.price}</p></div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="row align-items-center">
                                      <div className="col-6"><div className="p-qty d-flex">
                                        <button onClick={prod.qnty <=1 ? ()=> handleDecrement(prod.id):() =>removeitem(prod)} className='btn btn-primary ps-3 pe-3'>-</button>
                                        <input className="qty-text" type="text" value={prod.qnty} disabled />
                                        <button onClick={() =>handleIncrement(prod)} className='btn btn-primary ps-3 pe-3'> +</button>
                                      </div></div>
                                      <div className="col-6 text-end"><p className='m-0'>₹ {prod.qnty * prod.price}</p></div>
                                    </div>
                                  </div>
                                </div>


                        )
                                  })
                                }
                        </div>




                        <hr />
                        <div className="cart-total">
                          <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6">
                              <div className="row ">
                                <div className="col-6"><h5 className='m-0'>Items In Cart : <span className='text-danger'>{totalQty}</span></h5></div>
                                <div className="col-6"><h5 className='m-0'>Total Price: <span className='text-danger'>₹ {totalAmt}</span></h5></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDetails;