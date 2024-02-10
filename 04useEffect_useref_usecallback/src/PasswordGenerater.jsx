import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerater = (props) => {
  const [passowrdGenerater, setPasswordGenerater] = useState({
    password: "",
    passwordLength: 8,
    isContainCharacter: false,
    isContainNumber: false,
  });
  const passwordRef = useRef();
  console.log("Inside may be called");
  useEffect(
    () => getPassword(),
    [
      passowrdGenerater.passwordLength,
      passowrdGenerater.isContainNumber,
      passowrdGenerater.isContainCharacter,
    ]
  );

  const getPassword = useCallback(() => {
    console.log("Inside callback");
    const Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const Numbers = "0123456789";
    const SpecialCharacters = "[]@£!$%^&*(){}<>";
    let finalStr = Alphabets;
    if (passowrdGenerater.isContainNumber) {
      finalStr += Numbers;
    }
    if (passowrdGenerater.isContainCharacter) {
      finalStr += SpecialCharacters;
    }
    let result = "";
    for (let i = 0; i < passowrdGenerater.passwordLength; i++) {
      let pos = Math.floor(Math.random() * finalStr.length + 1);
      result += finalStr[pos];
    }
    setPasswordGenerater({ ...passowrdGenerater, password: result }); // setPasswordGenerater for the caching for callback
  }, [
    passowrdGenerater.passwordLength,
    passowrdGenerater.isContainNumber,
    passowrdGenerater.isContainCharacter,
    setPasswordGenerater,
  ]);

  const copyPassowrdToClipboard = () => {
    passwordRef.current.select();
    console.log(passowrdGenerater.password);
    window.navigator.clipboard.writeText(passowrdGenerater.password);
  };

  return (
    <>
      <h1>PasswordGenerater</h1>
      <input
        type="text"
        value={passowrdGenerater.password}
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPassowrdToClipboard}>Copy</button>
      <hr></hr>
      <input
        type="range"
        value={passowrdGenerater.passwordLength}
        onChange={(e) =>
          setPasswordGenerater({
            ...passowrdGenerater,
            passwordLength: e.target.value,
          })
        }
        min={4}
        max={100}
      />
      <label>Length({passowrdGenerater.passwordLength})</label>
      <br></br>
      <input
        type="checkbox"
        defaultChecked={passowrdGenerater.isContainNumber}
        onChange={() =>
          setPasswordGenerater({
            ...passowrdGenerater,
            isContainNumber: !passowrdGenerater.isContainNumber,
          })
        }
      />
      <label>Number</label>
      <input
        type="checkbox"
        defaultChecked={PasswordGenerater.isContainCharacter}
        onChange={() =>
          setPasswordGenerater({
            ...passowrdGenerater,
            isContainCharacter: !passowrdGenerater.isContainCharacter,
          })
        }
      />
      <label>Character</label>
    </>
  );
};

export default PasswordGenerater;
