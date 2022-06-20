import React, { Component, useContext } from "react";
import axios from "axios";
import ImageContext, { GalleryContextProvider } from "./ImagesContext";
import "../images.css";
export default class GalleryContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      errorMessage: "",
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/images`)
      .then((res) => {
        let resp = res.data;
        this.setState({ imageData: resp });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  render() {
    console.log(this.state.imageData);
    return (
      <div>
        <GalleryContextProvider value={this.state.imageData}>
          <DisplayImages />
        </GalleryContextProvider>
      </div>
    );
  }
}

function DisplayImages() {
  const imageData = useContext(ImageContext);
  console.log("data:", imageData);
  return (
    <>
      <div className="imageContainer">
        {imageData?.map((ele,ind)=>(<div key={ind} className="image_parent">
             <img src={ele.image_url} alt='images'/>
             <h2>{ele.name}</h2>
             <div  className="imageDiv">{ele.tags?.map((item,i)=>(<div key={i}><p >{item}</p></div>))}</div>
            </div>))}
      </div>
    </>
  );
}
