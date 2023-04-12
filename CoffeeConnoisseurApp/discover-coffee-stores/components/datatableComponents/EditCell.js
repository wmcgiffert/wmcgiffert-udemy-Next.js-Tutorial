import React, { useEffect, useState} from 'react';

//Edit the cell function
const EditCell = ({ rowData, column, updateData }) =>{
    const [ isEditable, setIsEditable ] = useState(false);
    const [ cellValue, setCellValue ] = useState(rowData[column.selector]);
    
    const handleSave = () => {
        setIsEditable(false)
        updateData(rowData.id , column.selector, cellValue);
        return isEditable ? (
            <input
                value={cellValue}
                onChange={(cell)=> setCellValue(cell.target.cellValue)}
                onBlur={handleSave}
                onKeyPress={(press)=> press.key === 'Enter' && handleSave()}
            />
        ):(
            <span onClick={()=> setIsEditable(true)}>
                {rowData[column.selector]}
            </span>
        );
    };
};

export default EditCell;