import React, { useEffect, useState} from 'react';
import DataTable from 'react-data-table-component'; // https://react-data-table-component.netlify.app/?path=/docs/api-columns--page Component Docs
import styles from '@/styles/datatable.module.css'
import Image from 'next/image';
import logo from '../../public/static/ABlogo.png'
import SearchBox from '@/components/datatableComponents/SearchBox'
import tableData from '@/components/datatableComponents/tableData';
import EInput from '@/components/EInput';



const DataTablePage = () => {
    console.table(tableData);
    const [rowDataToEdit, setRowDataToEdit] = useState(null)
    const columns = [
        { name: 'Model', selector: row => row.model, sortable: true },
        { name: 'Property', selector: row => row.property, sortable: true },
        { name: 'Default', 
            cell: (row, index, column) => <EInput onChange={(value) => handleRowEdit(value, index, column.name)} initial={row.default} />,
        },
        { name: 'TW',
            cell: (row, index, column) => <EInput onChange={(value) => handleRowEdit(value, index, column.name)} initial={row.tw} />,
        },
    ];
    const listWithKey = tableData.map(record => (
        {
            id:`${record.id}`,
            transKey:`${record.model}-${record.property}-${record.default}`,
            model:`${record.model}`,
            property:`${record.property}`,
            default:`${record.default}`,
            tw:`${record.tw}`,
        }
    ));

    const [data, setData] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        if (rowDataToEdit) {
            const updatedData = data.filter(({ id }) => id !== rowDataToEdit.id).concat([rowDataToEdit]).sort((a,b) => Number(a.id) - Number(b.id))
            setData(updatedData)
        }
    }, [rowDataToEdit])

    useEffect(()=> {
        setData(listWithKey)
    },[]);

    const handleRowEdit = (value, rowIdx, columnName) => {
        const translationToEdit = filteredTranslations[rowIdx]
        let updatedRow;
        switch (columnName.toLowerCase()) {
            case "default":
                updatedRow = {...translationToEdit, default: value }
                break
            case "tw":
                updatedRow = {...translationToEdit, tw: value }
                break;
            default:
                break;
        }
        setRowDataToEdit(updatedRow)
    }

    const updateTranslation = async () => {
        // TODO: PUT updated translation data
        const API_URL = "https://api-url-here"
        try {
            const response = await fetch(API_URL, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rowDataToEdit)
            })
            const updatedData = await response.json()
            console.log(updatedData)
        } catch (err) {
            console.error(err)
        }
    }

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
                // pagination
            />
        </div>
    </div>
  );
};

export default DataTablePage;