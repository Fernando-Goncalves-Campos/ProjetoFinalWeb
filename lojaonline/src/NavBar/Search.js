import { memo } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";

function Search({ searchItem, setSearchItem }) {
    //Verifica se esta na página inicial
    let location = useLocation();
    if(location.pathname === "/"){
        return (
            <div id="search">
                <input type="text" id="searchText" defaultValue={searchItem} onChange={(e) => {setSearchItem(e.target.value.toLowerCase())}}></input>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        );
    }

    else{
        return(
            <div id="inviSearch"></div>
        );
    }
}


export default memo(Search);