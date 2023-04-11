import React from "react";
import styles from "@/components/datatableComponents/SearchBox.module.css";

const SearchBox = ({ searchChange }) => {
    return(
        <div className={styles.container}>
            <input
                className={styles.textBox}
                type="search" 
                placeholder="Search" 
                onChange={searchChange}
                />
        </div>
    );
};

export default SearchBox;