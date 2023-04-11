import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styles from '@/styles/datatable.module.css'
import Image from 'next/image';
import logo from '../../public/static/ABlogo.png'

const DataTablePage = () => {
    const [data, setData] = useState([]);

    const tableData = [
        { id: 1, name: 'John', age: 28, city: 'New York'},
        { id: 2, name: 'Jane', age: 32, city: 'San Francisco' },
        { id: 3, name: 'Michael', age: 24, city: 'Los Angeles' },
        { id: 4, name: 'Emma', age: 31, city: 'Chicago' },
        { id: 5, name: 'Jake', age: 32, city: 'Nashville' },
        { id: 6, name: 'Chris', age: 33, city: 'Boston' },
        { id: 7, name: 'Doug', age: 34, city: 'Atlanta' },
        { id: 8, name: 'Carli', age: 35, city: 'Birmingham' },
        { id: 9, name: 'Garrett', age: 36, city: 'Charlotte' },
        { id: 10, name: 'Daragh', age: 30, city: 'Denver' },
        { id: 11, name: 'Shelby', age: 30, city: 'Charleston' },
        { id: 12, name: 'Giles', age: 30, city: 'New Mexico City' },
        { id: 13, name: 'Caitlyn', age: 30, city: 'Dallas' },
        { id: 14, name: 'Taylor', age: 30, city: 'Miami' },
    ];
    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Age', selector: row => row.age, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'Edit', selector: row => row.edit, sortable: false}
    ];

    useEffect(()=>setData(tableData),[]);
    

  return (
    <div className={styles.container}>
        <nav className={styles.Nav}>
            <Image
                height={100}
                width={100}
                src={logo}
            />
            <div>
                AB Navbar
            </div>
        </nav>
        <div className={styles.tableContainer}>
            <h1>AB Translations</h1>
            <DataTable
                title="Users"
                columns={columns}
                data={data}
                pagination
                selectableRows
                
            />
        </div>
    </div>
  );
};

export default DataTablePage;