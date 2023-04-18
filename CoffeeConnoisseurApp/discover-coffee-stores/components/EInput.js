import React, { useState } from "react";
const EInput = ({ initial, onChange }) =>{
    const [value, setValue] = useState(initial);
    const [isEditable, setIsEditable] = useState(false);

    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handleChange = (e) =>{
        setValue(e.target.value);
        onChange(e.target.value)
    };

    const handleBlur = () =>{
        setIsEditable(false);
    };

    return(
        <div>
            {isEditable?(
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ):(
                <span onClick={toggleEdit}>{value}</span>
            )}
        </div>
    );
};


export default EInput;