import React, { Component } from "react";

export default class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
    };
  }
  handleChange = (e) => {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };
  render() {
    console.log(this.state);
    return (
      <div
        style={{ display: "flex", flexDirection: "column", margin: "center" }}
      >
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={this.handleChange}
        />
        {this.state.image && (
          <img
            src={this.state.image}
            alt="images"
            style={{ width: "400px", height: "400px" }}
          />
        )}
      </div>
    );
  }
}









// const[image,setImg] = useState({name:'')
// setImg({...image,name: e.target.value})   ===> image='reddy'