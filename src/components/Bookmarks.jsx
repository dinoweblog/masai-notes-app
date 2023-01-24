import { useEffect, useState } from "react";

export const Bookmarks = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    setData([...(JSON.parse(localStorage.getItem("bookmarks")) || [])]);
  };

  const handleRemoveItem = (id) => {
    const preData = JSON.parse(localStorage.getItem("bookmarks")) || [];

    const filter = preData.filter((item) => item.id !== id);

    localStorage.setItem("bookmarks", JSON.stringify(filter));
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Bookmarks</h2>

      {data.map((item) => (
        <div className="card">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <p>{item.date}</p>
          <button
            onClick={() => {
              handleRemoveItem(item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
