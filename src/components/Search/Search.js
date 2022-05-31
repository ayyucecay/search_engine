import React from "react";
import styles from "./Search.module.scss";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Search = ({ setSearch, updatePageNumber, setOpen }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };

    return(
        <form className={`${styles.search} `} style={{flex:"2", margin:"auto"}}>
            <input
                onChange={(e) => {
                    if(e.target.value.length>0){
                        setOpen(true)
                    }
                    updatePageNumber(1);
                    setSearch(e.target.value);
                }}
                placeholder="Search for characters"
                className={styles.input}
                type="text"
            />
            <button
                onClick={searchBtn}
                className={`${styles.btn} btn fs-5`}
            >
               Search
            </button>
        </form>
    )
};

export default Search;