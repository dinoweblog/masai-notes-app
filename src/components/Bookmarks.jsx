import { useEffect, useState } from "react";

export const Bookmarks = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    setData([...(JSON.parse(localStorage.getItem("notes")) || [])]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Bookmarks</h2>
    </div>
  );
};
