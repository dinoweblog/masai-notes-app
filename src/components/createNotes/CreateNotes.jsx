import "./style.css";

export const CreateNotes = ({ handleChange, handleSubmit, inputData }) => {
  return (
    <div>
      <h2>Create Notes</h2>
      <form action="" onSubmit={handleSubmit} onChange={handleChange}>
        <input
          value={inputData.title}
          className="inputArea"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          value={inputData.desc}
          className="inputArea"
          type="text"
          name="desc"
          placeholder="Description"
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
