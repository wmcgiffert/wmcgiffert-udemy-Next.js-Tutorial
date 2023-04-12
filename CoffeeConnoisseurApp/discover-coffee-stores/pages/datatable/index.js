import React, { useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import styles from '@/styles/datatable.module.css'
import Image from 'next/image';
import logo from '../../public/static/ABlogo.png'
import EditCell from '@/components/datatableComponents/EditCell'
import tableData from '@/pages/datatable/tableData'


const DataTablePage = () => {
    const [data, setData] = useState([tableData]);
    const [ isEditable, setIsEditable ] = useState(false);
    useEffect(()=>setData(tableData),[]);
    
    
    //Column structure rules
    const columns = [
        { name: 'Model', selector: row => row.model, sortable: true },
        { name: 'Property', selector: row => row.property, sortable: true },
        { name: 'Default', selector: row => row.default, sortable: true },
        { name: 'tw',
            cell: (rowData) => (
                <EditCell
                    rowData={rowData}
                    column={{name: 'tw', selector: row => row.default}}
                    updateData={updateData}
                />
            )
        },
    ];

    const EditCell = ({ rowData, column, updateData }) =>{
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
    const updateData = (id, field, value) =>{
        const newData = data.map((row)=>
            row.id === id ?{ ...row, [field]: value} : row
        );
        setData(newData);
    }
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <Image
                height={100}
                width={200}
                src={logo}
                className={styles.img}
                alt='AB Logo'
                priority
            />
            <div className={styles.title}>
                AllianceBernstien
            </div>
        </nav>
        <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
                <h1 className={styles.tableTitle}>Field Translations</h1>
            </div>
            <DataTable
                title="Translation Records"
                columns={columns}
                data={data}
                onRowDoubleClicked={EditCell}
            />
        </div>
    </div>
  );
};

export default DataTablePage;