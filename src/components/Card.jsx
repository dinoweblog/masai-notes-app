import { BsStar, BsStarFill } from "react-icons/bs";

export const Card = ({
  item,
  isBookmark,
  handleDeleteItem,
  handleBookmrks,
}) => {
  return (
    <div className="card" style={{ marginTop: "40px" }}>
      <button
        className="iconBtn"
        onClick={() => {
          handleBookmrks(item.id);
        }}
      >
        {isBookmark ? <BsStarFill /> : <BsStar />}
      </button>

      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <p>{new Date(item.date).toJSON().slice(0, 10)}</p>
      <button
        className="deleteBtn"
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
