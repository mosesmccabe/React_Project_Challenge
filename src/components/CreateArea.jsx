import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <h1>
        {note.title} {note.content}
      </h1>
      <form>
        <input
          onChange={handleNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleNote}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addNoteFun(note);
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
