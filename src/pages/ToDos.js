import '../ToDo.css';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const ToDOs = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const usersCollectionRef = collection(db, 'ToDo');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const addTask = async () => {
    if (newTask.trim() === '') return; 
    await addDoc(usersCollectionRef, { task: newTask });
    setNewTask('');
    const data = await getDocs(usersCollectionRef); 
    setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'ToDo', id);
    await deleteDoc(taskDoc);
    const data = await getDocs(usersCollectionRef); 
    setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div className="App">
      <div className="container">
        <div
          style={{
            justifyContent: 'space-between',
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '40px',
            display: 'flex',
            marginBottom: '20px',
          }}
        >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="tasks"
            placeholder="Enter Your task"
          />
          <button onClick={addTask} className="add-button">Add</button>
        </div>
        <div>
          {list.map((task) => (
            <div key={task.id} className="taask">
              <p style={{ marginLeft: '15px' }}>{task.task}</p>
              <button
                style={{
                  border: 'none',
                  padding: '10px',
                  color: 'white',
                  backgroundColor: 'red',
                  borderRadius: '4px',
                  cursor:"pointer"
                }}
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDOs;
