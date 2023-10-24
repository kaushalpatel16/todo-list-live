import React, { useState } from "react";
import "./checkbox.css";
function CheckboxWithImage(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setIsImageVisible(!isImageVisible);
  };

  const toggleImage = () => {
    setIsImageVisible(!isImageVisible);
    setIsChecked(!isChecked);
  };

  return (
    <>
        
            {isChecked ? null : (
            <div className="task-item">  
            <div className="tasktext">{props.task}</div>  
              <input
                className="chkbox"
                type="checkbox"
                onClick={toggleCheckbox}
                checked={isChecked}    
              />
              </div>
            )}

            {isImageVisible ? (
            <div className="task-itemimg">
              <div className="tasktextimg">{props.task}</div> 
                <img
                  className="textimg"
                  src="data:image/png;base64,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"
                  alt="Your Image"
                  onClick={toggleImage}
                />
              </div>
            ) : null}

      
    </>
  );
}
export default CheckboxWithImage;
