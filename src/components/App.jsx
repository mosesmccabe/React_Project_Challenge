import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([]);

  function addNote(note) {
    setNoteArr((prevValue) => [...prevValue, note]);
  }

  function deleteItem(id) {
    setNoteArr((prevValue) => prevValue.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addNoteFun={addNote} />
      {noteArr.map((item, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteItem}
          title={item.title}
          content={item.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
