import { useState, useEffect } from "react";

const FriendsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Response is not ok");
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchFriends();
  }, []);

  return (
    <>
      <h2 className="friends-title">User's Friends</h2>
      <ul className="friends-list">
        {data.map((friend) => (
          <li key={friend.name}>{friend.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
