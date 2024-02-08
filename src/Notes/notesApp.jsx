
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import NoteContainer from "./NoteContainer/NoteContainer";
import Sidebar from "./Sidebar/Sidebar";

import "./notesApp.css";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const formatDate = (timestamp) => {
    if (!timestamp || isNaN(timestamp.toDate())) return "";
  
    const date = timestamp.toDate();
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata", // Set the time zone to India
    };
  
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, setUser]);

  const mainuser = user?.displayName;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mainuser) {
          const q = collection(db, `notes.${mainuser}`);
          const unsub = onSnapshot(q, (querySnapshot) => {
            let notesArray = [];
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              const formattedDate = formatDate(data.time); // Format the server timestamp
              notesArray.push({ ...data, id: doc.id, time: formattedDate });
            });
            setNotes(notesArray);
          });
          return () => unsub();
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchData();
  }, [mainuser]);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);

    deleteDoc(doc(db, `notes.${mainuser}`, id));
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;

    setNotes(tempNotes);

    addDoc(collection(db, `notes.${mainuser}`), {
      text,
      time: serverTimestamp(),
      completed: false,
    });
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default NotesApp;
