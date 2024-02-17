import { useEffect, useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = (props) => {
  // const [userInfo, setUserInfo] = useState({});
  const userInfo = useLoaderData();

  console.log("userInfo ---> ", userInfo);

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = useCallback(() => {
  //   fetch("https://api.github.com/users/Ashutoshsarangi")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("Inside");
  //       setUserInfo(res);
  //     });
  // }, []);

  return (
    <div>
      <h1>Github Followers: {userInfo?.followers}</h1>
      <h1>Github public Repos: {userInfo?.public_repos}</h1>
      <img src={userInfo?.avatar_url} />
    </div>
  );
};

export default Github;
