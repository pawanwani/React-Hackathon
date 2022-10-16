import { Fragment, useEffect, useState } from "react"
import SearchFilters from "../SearchFilters/SearchFilters";
import './ResultScreen.css';
import { useSelector } from 'react-redux';
import MultipleResultScreen from "./MultipleResultScreen";
import UserIdSearchResultScreen from "./UserIdSearchResultScreen";
import { Pagination } from 'antd';

export default function Resultscreen() {

    const isEmpty = (elementName) => {
        let typeOfElement = typeof elementName;
        if (
          elementName &&
          undefined !== elementName &&
          "undefined" !== elementName &&
          null !== elementName &&
          typeOfElement !== "undefined"
        ) {
          if (typeOfElement === "string") {
            return elementName.trim() === "";
          }
          if (typeOfElement === "object") {
            return Object.entries(elementName).length === 0 ? true : false;
          }
        } else {
          return true;
        }
      };

    const [option, setOption] = useState('multiple');

    const selectedOption = useSelector(state => state.selectedOptions.SearchFilterSelected);
    console.log('selectedOption',selectedOption)
    useEffect(() =>{
        if (!isEmpty(selectedOption)) {
            console.log('selectedOption Check', !isEmpty(selectedOption))
            if (!isEmpty(selectedOption?.userId)) {
                console.log('setting sinf')
                setOption('single');
            } else if (!isEmpty(selectedOption?.loyaltyScore)) {
                console.log('setting multiple')
                setOption('multiple');
            }
        }
    },[selectedOption])
    

    return (
        <div className="main-container">
            <div className="search-container">
                <SearchFilters />
            </div>
            <div className="sub-container">
            {option.includes('single') ?
                <UserIdSearchResultScreen />
                :
                  <MultipleResultScreen itemsPerPage={8}/>
                  
            }

            </div>
        </div>
    )
}