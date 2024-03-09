import { useRef, useEffect, useState } from "react";

export const useFormInputs = () => {
  const ref = useRef("This is a ref");
  const [user, setUser] = useState({
    prefer: { both: true },
    fileUpload: "singleFileUpload",
    vegitable: "corn",
  });

  console.log(user);

  const updateCheckBox = (e) => {
    setUser({
      ...user,
      prefer: { ...user.prefer, [e.target.value]: e.target.checked },
    });
  };

  const updateRadioBtn = (e) => {
    setUser({
      ...user,
      fileUpload: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log("I am inside --> ", e.target.value);
    setUser({ ...user, vegitable: e.target.value });
  };

  useEffect(() => {
    // No .subscribe is only Available for the Spreadsheet only other it don't have the .subscribe
    // ref.current.subscribe((value) => {
    //   console.log("value --> ", value);
    // });
    // return () => {
    //   ref.current.unsubscribe();
    // };
  }, []);

  return { user, updateCheckBox, updateRadioBtn, handleChange };
};
