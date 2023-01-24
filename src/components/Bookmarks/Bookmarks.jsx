import { useEffect, useState } from "react";
import "./style.css";

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

  if (data.length === 0) return <h2>Empty!</h2>;

  return (
    <div style={{}}>
      <h2>Bookmarks</h2>

      <div className="bookmarks">
        {data.map((item) => (
          <div className="card">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{new Date(item.date).toJSON().slice(0, 10)}</p>
            <button
              className="removeBtn"
              onClick={() => {
                handleRemoveItem(item.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
