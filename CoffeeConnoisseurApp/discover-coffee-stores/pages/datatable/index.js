import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styles from '@/styles/datatable.module.css'

const DataTablePage = () => {
    const [data, setData] = useState([]);

    const tableData = [
        { id: 1, name: 'John', age: 28, city: 'New York'},
        { id: 2, name: 'Jane', age: 32, city: 'San Francisco' },
        { id: 3, name: 'Michael', age: 24, city: 'Los Angeles' },
        { id: 4, name: 'Emma', age: 30, city: 'Chicago' },
    ];
    const columns = [
        { name: 'ID', selector: 'id', sortable: true },
        { name: 'Name', selector: 'name', sortable: true },
        { name: 'Age', selector: 'age', sortable: true },
        { name: 'City', selector: 'city', sortable: true },
        { name: 'Edit', selector: 'button', sortable: false}
    ];

    useEffect(()=>setData(tableData),[]);
    

  return (
    <div className={styles.container}>
        <div className={styles.tableContainer}>
            <h1>Data Table</h1>
            <DataTable
                title="Users"
                columns={columns}
                data={data}
            />
        </div>
    </div>
  );
};

export default DataTablePage;