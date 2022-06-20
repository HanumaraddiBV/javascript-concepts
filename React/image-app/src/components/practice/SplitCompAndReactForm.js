import React, { Component } from 'react'

export default class SplitCompAndReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        description: "",
        level: "Junior",
        salary: 30000
      },
      jobs: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { name: "", description: "", level: "", salary: 30000 }
    }));
  };

  render() {
    return (
      <div>
      <Form
          handleChange={this.handleChange}
          post={this.state.post}
          handleSubmit={this.handleSubmit}
        />
        <div>
          <ul>
            {this.state.jobs.map((job, index) => (
              <li key={index}>
                <ul>
                  <li >{job.name}</li>
                  <li >{job.level}</li>
                  <li >{job.description}</li>
                  <li >£{job.salary}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}


 const Form =({ handleChange, handleSubmit, post }) => {
  return (
    <div className="form-container">
      <form>
        <div >
          <input
            className="col-12 form-control"
            name="name"
            onChange={handleChange}
            type="text"
            value={post.name}
            placeholder="post name"
          />
        </div>
        <div className="form-group">
          <textarea
            className="col-12 form-control"
            name="description"
            onChange={handleChange}
            type="text"
            value={post.description}
            placeholder="post description"
          />
        </div>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="salary"
            onChange={handleChange}
            type="number"
            value={post.salary}
            placeholder="post salary"
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleChange}
            name="level"
            value={post.level}
          >
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
            <option>Any</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};