import axios from 'axios';
import React, { Component } from 'react'
import UserContextProvider from '../Users/UserContextProvider';
import { ProductProvider } from './ProductContext';
// import ProductDisplay from './ProductDisplay';

export default class ProductConetxtProvider extends Component {
constructor(props){
    super(props);
    this.state={
        productList: [],
        errorMessage:'',
    }
}
    componentDidMount(){
        axios.get(`https://fakestoreapi.com/products`).then((res)=>{
            let resp = res.data;
            // console.log('resp:', resp)
            this.setState({productList: resp})
            
        })
        .catch((e)=>{
            this.setState({errorMessage: e.message})
        })
    }
    render() {
    //   console.log('productList:', this.state.productList)
    return (
      <div>
        <ProductProvider value={this.state.productList}>
            {/* <ProductDisplay/> */}
            <UserContextProvider/>
        </ProductProvider>
      </div>
    )
  }
}
