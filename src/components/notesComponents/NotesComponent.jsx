import { useState, useEffect } from "react";
import { Card } from "../Card";
import { CreateNotes } from "../createNotes/CreateNotes";
import "./style.css";

export const NotesComponent = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    desc: "",
    date: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const getData = () => {
    setData([...(JSON.parse(localStorage.getItem("notes")) || [])]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);

    const preData = JSON.parse(localStorage.getItem("notes")) || [];

    preData.push({ ...inputData, date: new Date(), id: preData.length + 1 });

    localStorage.setItem("notes", JSON.stringify(preData));

    setInputData({
      title: "",
      desc: "",
      date: "",
    });
    getData();
  };

  const handleDeleteItem = (id) => {
    const preData = JSON.parse(localStorage.getItem("notes")) || [];

    const filter = preData.filter((item) => item.id !== id);

    localStorage.setItem("notes", JSON.stringify(filter));
    getData();
  };

  const handleBookmrks = (id) => {
    const preData = JSON.parse(localStorage.getItem("bookmarks")) || [];

    const filter = data.filter((item) => item.id === id);

    preData.push(filter[0]);

    localStorage.setItem("bookmarks", JSON.stringify(preData));
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <CreateNotes
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputData={inputData}
      />
      <div className="container">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            isBookmark={true}
            handleDeleteItem={handleDeleteItem}
            handleBookmrks={handleBookmrks}
          />
        ))}
      </div>
    </div>
  );
};
