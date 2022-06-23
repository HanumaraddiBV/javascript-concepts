import React, { useContext, useState } from "react";
import { Button } from "./Button";
import FormContext from "./FormParentContext";
import Input from "./Input";

export const FormUserData = () => {
  const userData = useContext(FormContext);
  const [userInfo, setUserInfo] = useState({
    mobile: "",
    captcha: (Math.random() * 10000).toFixed(0),
    mobSubmit: false,
    ...userData,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleClick = () => {
    setUserInfo({ ...userInfo, mobSubmit: true });
  };

  return (
    <>
      {!userInfo.nxtButton && !userInfo.mobSubmit && (
        <div>
          <Input
            inputType={"text"}
            name={"mobile"}
            title={"Mobile No "}
            placeholder={"Enter Your Mobile Number"}
            onChange={handleChange}
          />
          <h3>{userInfo.captcha}</h3>
          <Button title={"Submit"} action={handleClick} />
        </div>
      )}
      {userInfo.mobSubmit && (
        <div>
          <h3>{userInfo.name}</h3>
          <h3>{userInfo.email}</h3>s
          <h3>{userInfo.city}</h3>
          <h3>{userInfo.mobile}</h3>
        </div>
      )}
    </>
  );
};
