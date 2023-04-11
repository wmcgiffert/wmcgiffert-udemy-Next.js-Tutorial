import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styles from '@/styles/datatable.module.css'
import Image from 'next/image';
import logo from '../../public/static/ABlogo.png'
import SearchBox from '@/components/datatableComponents/SearchBox'

const DataTablePage = () => {
    const tableData = [
        { id: 1, model: 'FundInfo', property: 28, value: 'New York'},
        { id: 2, model: 'FundInfo', property: 32, value: 'San Francisco' },
        { id: 3, model: 'FundInfo', property: 24, value: 'Los Angeles' },
        { id: 4, model: 'FundFilter', property: 31, value: 'Chicago' },
        { id: 5, model: 'FundFilter', property: 32, value: 'Nashville' },
        { id: 6, model: 'FundFilter', property: 33, value: 'Boston' },
        { id: 7, model: 'FundFilter', property: 34, value: 'Atlanta' },
        { id: 8, model: 'FundInfo', property: 35, value: 'Birmingham' },
        { id: 9, model: 'FundInfo', property: 36, value: 'Charlotte' },
        { id: 10, model: 'KeyFacts', property: 30, value: 'Denver' },
        { id: 11, model: 'KeyFacts', property: 30, value: 'Charleston' },
        { id: 12, model: 'KeyFacts', property: 30, value: 'New Mexico City' },
        { id: 13, model: 'KeyFacts', property: 30, value: 'Dallas' },
        { id: 14, model: 'KeyFacts', property: 30, value: 'Miami' },
    ];
    const columns = [
        // { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Model', selector: row => row.model, sortable: true },
        { name: 'Property', selector: row => row.property, sortable: true },
        { name: 'Value', selector: row => row.value, sortable: true },
        { name: 'EN-GB', selector: row => row.value, sortable: true },
        { name: 'UK-HG', selector: row => row.value, sortable: true },
        { name: 'SP', selector: row => row.value, sortable: true },
        // { name: 'Edit', selector: row => row.edit, sortable: false}
    ];
    const listWithKey = tableData.map(record => (
        {
            id:`${record.id}`,
            transKey:`${record.model}-${record.property}-${record.model}`,
            model:`${record.model}`,
            property:`${record.property}`,
            value:`${record.value}`,
        }
    ));
    console.log(listWithKey)

    const [data, setData] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(()=>setData(listWithKey),[]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };
    const filteredTranslations = data.filter( translation => {
        return translation.transKey.toLowerCase().includes(searchfield.toLowerCase());
    });


 

  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <Image
                height={100}
                width={200}
                src={logo}
                className={styles.img}
                alt='AB Logo'
            />
            <div className={styles.title}>
                AllianceBernstien
            </div>
        </nav>
        <div className={styles.tableContainer}>
            <div className={styles.tableHeader}>
                <h1 className={styles.tableTitle}>AB Translations</h1>
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