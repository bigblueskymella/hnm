import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail=()=>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
      <img src={item?.img} className="product-img"/>
      <div className='blue-word'>{item?.choice == true ? "MD추천" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div className='red-word'>{item?.new == true ? "신제품": ""}</div>
    </div>
  )
}

export default ProductCard
