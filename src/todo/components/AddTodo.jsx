



import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'; // Update the path to match your project structure

function AddTodo() {


  
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, `todos.${mainuser}`), {
        title,
        completed: false,
      });

      setTitle('');
    } catch (error) {
      console.error('Error adding document:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter your todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
