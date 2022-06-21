import React, { useContext } from 'react'
import ProductContext from './ProductContext'

export default function ProductDisplay() {
    const productData = useContext(ProductContext)
    console.log('productData:', productData)
  return (
    <div>
        {productData?.map((ele)=>{
            return (
                <div key={ele.id}>
                    <h1>{ele.title}</h1>
                    <img src={ele.image} alt='image'/>
                    <p>{ele.description}</p>
                </div>
            )
        })}
    </div>
  )
}
