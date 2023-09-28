import { useRef, useState } from "react";

export function FormPage() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
  });
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  function onChangeUserInfo(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function send() {
    inputRefs.forEach((inputRef) => {
      if (inputRef.current.value === "") {
        inputRef.current.style.border = "2px solid red";
      } else {
        inputRef.current.style.borderColor = "";
      }
    });
    console.log(userInfo);
  }

  return (
    <>
      <h3>Form Page</h3>
      <input
        onChange={onChangeUserInfo}
        type="text"
        placeholder="Name"
        name="name"
        ref={inputRefs[0]}
        required
      />
      <input
        onChange={onChangeUserInfo}
        type="text"
        placeholder="Surname"
        name="surname"
        ref={inputRefs[1]}
      />
      <input
        onChange={onChangeUserInfo}
        type="number"
        placeholder="Age"
        name="age"
        ref={inputRefs[2]}
      />
      <input
        onChange={onChangeUserInfo}
        type="email"
        placeholder="Email"
        name="email"
        ref={inputRefs[3]}
      />
      <button onClick={send}>Отправить</button>
    </>
  );
}
