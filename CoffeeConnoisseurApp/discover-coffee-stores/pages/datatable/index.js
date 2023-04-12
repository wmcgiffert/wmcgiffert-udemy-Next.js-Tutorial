import React, { useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import styles from '@/styles/datatable.module.css'
import Image from 'next/image';
import logo from '../../public/static/ABlogo.png'
import SearchBox from '@/components/datatableComponents/SearchBox'


const DataTablePage = () => {
    //Data
    const tableData = [
        {id: 1, model: 'FundInfo', property: 28, default: 'New York'},
        {id: 2, model: 'FundInfo', property: 32, default: 'San Francisco' },
        {id: 3, model: 'FundInfo', property: 24, default: 'Los Angeles' },
        {id: 4, model: 'FundFilter', property: 31, default: 'Chicago' },
        {id: 5, model: 'FundFilter', property: 32, default: 'Nashville' },
        {id: 6, model: 'FundFilter', property: 33, default: 'Boston' },
        {id: 7, model: 'FundFilter', property: 34, default: 'Atlanta' },
        {id: 8, model: 'FundInfo', property: 35, default: 'Birmingham' },
        {id: 9, model: 'FundInfo', property: 36, default: 'Charlotte' },
        {id: 10, model: 'KeyFacts', property: 25, default: 'Denver' },
        {id: 11, model: 'KeyFacts', property: 26, default: 'Charleston' },
        {id: 12, model: 'KeyFacts', property: 27, default: 'New Mexico City' },
        {id: 13, model: 'KeyFacts', property: 29, default: 'Dallas' },
        {id: 14, model: 'KeyFacts', property: 20, default: 'Miami' },
    ] 
    //Table structure rules
    const columns = [
        { name: 'Model', selector: row => row.model, sortable: true },
        { name: 'Property', selector: row => row.property, sortable: true },
        { name: 'Default', selector: row => row.default, sortable: true },
        // { name: 'EN-GB', selector: row => row.default, sortable: true },
        // { name: 'UK-HG', selector: row => row.default, sortable: true },
        // { name: 'SP', selector: row => row.default, sortable: true },
        {
            name: 'TW',
            cell: (rowData) => (
                <EditCell
                    rowData={rowData}
                    column={{name: 'TW', selector: row => row.default, sortable: true}}
                    updateData={updateData}
                />
            )

        },

    ];

    //Edit the cell function
    const EditCell = ({ row, column, updateData }) =>{
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
                    onKeyDown={(press)=> press.key === 'Enter' && handleSave()}
                />
            ):(
                <span onClick={()=> setIsEditable(true)}>
                    {rowData[column.selector]}
                </span>
            );
        };
    };

    //Makes a translationKey for the from the orginal data
    const listWithKey = tableData.map(record => (
        {
            id:`${record.id}`,
            transKey:`${record.model}-${record.property}-${record.default}`,
            model:`${record.model}`,
            property:`${record.property}`,
            default:`${record.default}`,
        }
    ));

    //state for data and the searchbox
    const [data, setData] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    
    //updates data with new data with translationKey data
    useEffect(()=>setData(listWithKey),[]);
    
    //searchbox entered into the text and filter by text change
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };
    const filteredTranslations = data.filter( translation => {
        return translation.transKey.toLowerCase().includes(searchfield.toLowerCase());
    });
    
    //update edited data
    useEffect((data)=> {
        const [] id, field, value ] = data
        const newData = data.map((row)=>
            row.id === id ?{ ...row, [field]: value} : row
        );
        setData(newData);
    },[])

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
                <SearchBox searchChange = {onSearchChange} />
            </div>
            <DataTable
                title="Translation Records"
                columns={columns}
                data={filteredTranslations}

            />
        </div>
    </div>
  );
};

export default DataTablePage;