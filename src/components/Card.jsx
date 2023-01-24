import { BsStar, BsStarFill } from "react-icons/bs";

export const Card = ({ item, isBookmark, handleDeleteItem }) => {
  return (
    <div className="card" style={{}}>
      <button className="iconBtn">
        {isBookmark ? <BsStarFill /> : <BsStar />}
      </button>

      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <p>{item.date}</p>
      <button onClick={() => [handleDeleteItem(item.id)]}>Delete</button>
    </div>
  );
};