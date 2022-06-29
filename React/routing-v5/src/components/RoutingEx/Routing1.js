import React from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

export default function Routing1() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/setting">Setting</Link>
      <Link to="/Mumbai">Mumbai</Link>
      <Link to="/Chennai">Chennai</Link>
      <Link to="/Jammu">Jammu</Link>
      <Link to="/India/Jammu/hindi">Jammu</Link>

      <h1> route config</h1>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/setting">
          <Settings />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics" component={Topics} />

        <Route exact path="/:city" component={Param}></Route>
        <Route path="/:country/:city/:lang" component={Param}></Route>
      </Switch>
    </div>
  );
}
const Home = () => {
  return "home";
};
const Contact = () => {
  return "contact";
};
const Settings = () => {
  return "setting";
};
const Param = (props) => {
  const hist = props.history;
  console.log(hist);
  let history = useHistory();
  const takeMeHome = () => {
    history.goBack();
  };
  console.log(props);
  let { country, city, lang } = useParams();
  return (
    <div>
      {" "}
      <button onClick={takeMeHome}>home page</button>
      `parameter : ${country} - ${city} - ${lang}`
    </div>
  );
};
//props in class

const Topics = (props) => {
  // const url=props.match.url;
  // const path=props.match.path;
  // console.log(url,path);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <p>
        <Link to={`${url}/page1`}>topic1</Link>
      </p>
      <p>
        <Link to={`${url}/page2`}>topic2</Link>
      </p>
      <Switch>
        <Route exact path={path}>
          <h3>Please select</h3>
        </Route>
        <Route path={`${path}/page1`}>
          <TopicItem />
        </Route>
        <Route path={`${path}/page2`}>
          <TopicItem2 />
        </Route>
      </Switch>
    </div>
  );
};

const TopicItem = () => {
  return <h1>Item</h1>;
};
const TopicItem2 = () => {
  return <h1>Item2</h1>;
};
