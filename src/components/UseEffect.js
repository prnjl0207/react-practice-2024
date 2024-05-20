import { useState, useEffect } from "react";

const UseEffect = () => {
  const githubUser = "https://api.github.com/users/prnjl0207";
  const [user, setUser] = useState({ id: "", name: "", avatarUrl: "" });

  const getUserDetails = async () => {
    const response = await fetch(githubUser);
    const userDetails = await response.json();
    setUser({
      ...user,
      id: userDetails.id,
      name: userDetails.name,
      avatarUrl: userDetails.avatar_url,
    });
  };

  const handleClick = () => {
    console.log("clicked me !!!");
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  //getUserDetails();
  return (
    <>
      <h1>useEffect Hook use for API Calling</h1>
      <h5>User id is {user.id}</h5>
      <h5>User name is {user.name}</h5>
      <img src={user.avatarUrl} alt="user avatar" />
      <button onClick={handleClick}>Click me </button>
    </>
  );
};

export default UseEffect;
