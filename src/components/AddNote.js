import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    addNote(note.title, note.description, note.tag);
    props.showAlert("Note Added Successfully", "success")
    setNote({ title: "", description: "", tag: "" })
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center ">
        <div className="card col-10 shadow p-3 mb-5 bg-white rounded">
          <h2>Add a Note</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
            </div>
            <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-outline-dark" onClick={handleClick}>Add Note</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AddNote;
