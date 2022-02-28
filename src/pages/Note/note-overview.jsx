import React, {useEffect, useState } from "react";

import "./styles.jsx";

import { getNotes, createNote, deleteNote } from "../../services/api";
import {
  RecentWrap,
  Header,
  HR,
  Table,
  TableHRow,
  TableHData,
  TableBRow,
  TableBData,
  Button,
  StyledModal,
  ModalTitle,
  Input,
  TextArea,
  SaveNote,
  CancelButton,
  DeleteButton,
  TableHead,
  TableBody,
} from "./styles";

import Navbar from "../HomePage/HomePage";

let timeout;
export const NoteOverview = () => {
  // const { logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [formFields, setFormFields] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function handleInputChange(e) {
    e.persist();
    setFormFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const newNote = async (title, description) => {
    const response = await createNote(title, description);

    const data = response.data;

    console.log(data)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    newNote(formFields.title, formFields.description);
    toggleModal(event);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteNote(id);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getNotes();
      setNotes(response.data);
      setLoading(false);
    })();
  }, [notes]);

  
  return (
    <>
      <Navbar />
      <RecentWrap>
        <Header>Latest Notes</Header>
        <Button onClick={toggleModal}>New Note</Button>
        <StyledModal open={isOpen} onClose={!isOpen}>
          {/* <Form > */}
          <ModalTitle>Create a new Note</ModalTitle>
          <Input
            name="title"
            placeholder="Note Title"
            onChange={handleInputChange}
            type="text"
            value={formFields.title}
          />
          <TextArea
            name="description"
            placeholder="Note Description"
            onChange={handleInputChange}
            type="text"
            value={formFields.description}
          />
          <SaveNote type="submit" onClick={handleSubmit}>
            Save Note
          </SaveNote>
          <CancelButton onClick={toggleModal}>Cancel</CancelButton>
          {/* </Form> */}
        </StyledModal>
        <HR />
        <Table>
          <TableHead>
            <TableHRow>
              <TableHData>Note ID</TableHData>
              <TableHData>Title</TableHData>
              <TableHData>Description</TableHData>
              <TableHData>Created at</TableHData>
              <TableHData>Actions</TableHData>
            </TableHRow>
          </TableHead>
          {notes.map((item, index) => {
            return (
              <TableBody key={index}>
                <TableBRow>
                  <TableBData>{item.noteId}</TableBData>
                  <TableBData>{item.title}</TableBData>
                  <TableBData>{item.description}</TableBData>
                  <TableBData>{item.createdAt}</TableBData>
                  <TableBData>
                    {/* <Button>Edit Note</Button> */}
                    <DeleteButton onClick={() => handleDelete(item.noteId)}>
                      Delete Note
                    </DeleteButton>
                  </TableBData>
                </TableBRow>
              </TableBody>
            );
          })}
          {/* {notes.map((item, index) => {
            return (
              <MidTable key={index}>
                <MidTableRow>
                  <MidTableDataLeft>Note ID</MidTableDataLeft>
                  <MidTableDataRight>{item.noteId}</MidTableDataRight>
                </MidTableRow>
                <MidTableRow>
                  <MidTableDataLeft>Title</MidTableDataLeft>
                  <MidTableDataRight>{item.title}</MidTableDataRight>
                </MidTableRow>
                <MidTableRow>
                  <MidTableDataLeft>Description</MidTableDataLeft>
                  <MidTableDataRight>{item.description}</MidTableDataRight>
                </MidTableRow>
                <MidTableRow>
                  <MidTableDataLeft>Created at</MidTableDataLeft>
                  <MidTableDataRight>{item.createdAt}</MidTableDataRight>
                </MidTableRow>
              </MidTable>
            );
          })} */}
        </Table>
      </RecentWrap>
      {/* <div className="NoteOverview">
        <FontAwesomeIcon icon={faHardHat} />
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.title} - {note.description}
            </li>
          ))}
        </ul>
        <button type="submit" onClick={handleLogout}>
          teste
        </button>
      </div> */}
    </>
  );
};

export default NoteOverview;
