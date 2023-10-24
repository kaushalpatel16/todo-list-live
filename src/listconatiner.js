import React, { useEffect, useState } from "react";
import CheckboxWithImage from "./checkbox";
import "./listcontainer.css";
import logo from './img/frontimage.png';

const STORAGE_KEY = "todoList";

export default function ListConatiner() {
  const [btnshown, setbtnshown] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [text, settext] = useState("");
  const [error, seterror] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const lastTaskDate = new Date(localStorage.getItem("lastTaskDate"));
    const today = new Date();
    console.log("hi buddy");
    if (today.getDate() !== lastTaskDate.getDate()) {
      localStorage.removeItem(STORAGE_KEY);
      setTasks([]);
      localStorage.setItem("lastTaskDate", today.toString());
    } else {
      const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (storedTasks) {
        setTasks(storedTasks);
      }
    }
  }, []);
  

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setIsImageVisible(!isImageVisible);
  };

  const toggleImage = () => {
    setIsImageVisible(!isImageVisible);
    setIsChecked(!isChecked);
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
    localStorage.setItem("lastTaskDate", new Date().toString());
    settext("");
  };

  const savedata = (e) => {
    settext(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      if (text === "") {
        setbtnshown(false);
      } else if (tasks.includes(text)) {
        seterror("Error! This Task is already exist");
        setInterval(() => {
          seterror("");
        }, 2000);
      } else {
        handleAddTask(text);
        setbtnshown(false);
      }
    }
  };
  return (
    <>
      <div className="ListConatiner">
        <div className="startcontainer">
          {tasks.length === 0 ? (
            <div className="imgctn">
              <img src={logo}></img>
              <div class="starttext1">A fresh start</div>
              <div class="starttext2">Anything to add ?</div>
            </div>
          ) : (
            <div className="tasklist">
              {tasks.map((task, index) => (
                   <CheckboxWithImage task={task}/>
              ))}
            </div>
          )}
        </div>
      </div>
      {btnshown ? (
        <div className="textarea">
          <input
            type="text"
            style={{ width: '100%',height:'27px'}}
            placeholder='Press "Enter" to exit'
            value={text}
            onChange={savedata}
            onKeyPress={handleKeyPress}
          />
          <div style={{ color: "red" }}>{error} </div>
        </div>
      ) : (
        <div className="btncontainer">
          <button
            className="btn"
            onClick={() => {
              setbtnshown(true);
            }}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}
