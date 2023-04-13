import React, { useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import styles from '@/styles/datatable.module.css'
import Image from 'next/image';
import logo from '../../public/static/ABlogo.png'
import SearchBox from '@/components/datatableComponents/SearchBox'
import tableData from '@/components/datatableComponents/tableData';



const DataTablePage = () => {
    console.table(tableData);
    
    const columns = [
        {
            cell: () => <button onClick={handleButtonClick} className={styles.button}> Edit </button>,
            ignoreRowClick: true, 
            allowOverflow: true, 
            button: true,
        },
        { name: 'Model', selector: row => row.model, sortable: true },
        { name: 'Property', selector: row => row.property, sortable: true },
        { name: 'Default', selector: row => row.default, sortable: true },
        { name: 'EN-GB', selector: row => row.default, sortable: true },
        { name: 'UK-HG', selector: row => row.default, sortable: true },
        { name: 'SP', selector: row => row.default, sortable: true },
        // { name: 'ID', selector: row => row.id, sortable: true },
    ];
    const listWithKey = tableData.map(record => (
        {
            id:`${record.id}`,
            transKey:`${record.model}-${record.property}-${record.default}`,
            model:`${record.model}`,
            property:`${record.property}`,
            default:`${record.default}`,
        }
    ));

    const [data, setData] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(()=>setData(listWithKey),[]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredTranslations = data.filter( translation => {
        return translation.transKey.toLowerCase().includes(searchfield.toLowerCase());
    });

    const handleButtonClick = () => {
		
		console.log('edit');
	};

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
                pagination
                selectableRows
            />
        </div>
    </div>
  );
};

export default DataTablePage;