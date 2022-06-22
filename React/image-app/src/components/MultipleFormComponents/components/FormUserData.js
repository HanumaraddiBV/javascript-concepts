import React, { useContext, useState } from "react";
import { Button } from "./Button";
import FormContext from "./FormParentContext";
import Input from "./Input";

export const FormUserData = () => {
  const userData = useContext(FormContext);
  const [userInfo, setUserInfo] = useState({
    mobile: "",
    captcha: (Math.random() * 10000).toFixed(0),
    ...userData,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleClick = () => {
    setUserInfo({ ...userInfo, userDetails: userData });
    const userDataDetails = userInfo;
    console.log("userDataDetails:", userDataDetails);
  };

  return (
    <>
      {!userInfo.nxtButton && (
        <div>
          <Input
            inputType={"text"}
            name={"mobile"}
            title={"Mobile No "}
            placeholder={"Enter Your Mobile Number"}
            onChange={handleChange}
          />
          <Button title={"Submit"} action={handleClick} />
        </div>
      )}
    </>
  );
};
