// import React from "react";
// import Title from "./components/Title";
// import AddTodo from "./components/AddTodo";
// import Todo from "./components/Todo";

// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";

// import {
//   collection,
//   query,
//   onSnapshot,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

// import { db } from "../firebase";

// function todoApp() {

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUser(user);
//       } else {
//         // User is signed out
//         setUser(null);
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => unsubscribe();
//   }, [setUser]); // Include setUser in the dependency array

//   const mainuser= user?.displayName;




//   const [todos, setTodos] = React.useState([]);

//   React.useEffect(() => {
//     const q = query(collection(db, `todos${mainuser}`));
//     const unsub = onSnapshot(q, (querySnapshot) => {
//       let todosArray = [];
//       querySnapshot.forEach((doc) => {
//         todosArray.push({ ...doc.data(), id: doc.id });
//       });
//       setTodos(todosArray);
//     });
//     return () => unsub();
//   }, []);

//   const handleEdit = async (todo, title) => {
//     await updateDoc(doc(db, `todos${mainuser}`, todo.id), { title: title });
//   };
//   const toggleComplete = async (todo) => {
//     await updateDoc(doc(db, `todos${mainuser}`, todo.id), { completed: !todo.completed });
//   };
//   const handleDelete = async (id) => {
//     await deleteDoc(doc(db, `todos${mainuser}`, id));
//   };
//   return (
//     <div className="App">
//       <div>
//         <Title />
//       </div>
//       <div>
//         <AddTodo />
//       </div>
//       <div className="todo_container">
//         {todos.map((todo) => (
//           <Todo
//             key={todo.id}
//             todo={todo}
//             toggleComplete={toggleComplete}
//             handleDelete={handleDelete}
//             handleEdit={handleEdit}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default todoApp;





import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function TodoApp() {
  const [user, setUser] = useState(null);
  const [mainuser, setMainUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setMainUser(user.displayName);
      } else {
        setUser(null);
        setMainUser(null);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mainuser) {
          const q = query(collection(db, `todos.${mainuser}`));
          const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
              todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArray);
          });
          return () => unsub();
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, [mainuser]);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, `todos.${mainuser}`, todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, `todos.${mainuser}`, todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, `todos.${mainuser}`, id));
  };

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo mainuser={mainuser} />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;





