import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ResultScreen.css';
import { useDispatch, useSelector } from 'react-redux';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Items({ currentItems }) {

  const classIdentifiers = {below20 : 'bar-color-red', below70 : 'bar-color-yellow', above70 : 'bar-color-green'};

  return (
    <>
      {currentItems &&
        currentItems.map((item) => {
          const classToBeAdded = item?.loyaltyScore <= 0.2 ? classIdentifiers.below20 : (item?.loyaltyScore <= 0.7 ? classIdentifiers.below70 : classIdentifiers.above70)
          return <div key={item.id} className="circular-progressbar">
            <CircularProgressbar className={classToBeAdded} value={item?.loyaltyScore * 100} text={`${(item?.loyaltyScore * 100).toFixed(0)}%`} />
            <p className="user-name">{item.userId}</p>
          </div>
        }

        )}
    </>
  );
}

export default function MultipleResultScreen({ itemsPerPage }) {

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

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  //const items = useSelector(state => state.Item.Item);
  const state = useSelector(state => state);

  const [usersRange, setusersRange] = useState(null)
  const [items, setItems] = useState(null)

 
  console.log('==> in multiple', state);
  let data = state.Item.Item;
  console.log('item', items)
  const loyaltyRange = state?.selectedOptions?.SearchFilterSelected?.loyaltyScore;
  console.log('loyaltyRange', loyaltyRange)

  useEffect(() => {
    setItems(state.Item.Item);
    if (!isEmpty(state?.selectedOptions?.SearchFilterSelected?.clear)) {
        //setusersRange(null);
        setItems(state.Item.Item);
    } else {
        const helper = items?.filter(dataItem => parseFloat(dataItem?.loyaltyScore) * 100 >= loyaltyRange?.minValue && parseFloat(dataItem?.loyaltyScore) * 100 <= loyaltyRange?.maxValue);
        console.log('helper ', helper)
        if (!isEmpty(loyaltyRange)) {
            // setusersRange(helper)
            setItems(helper);
        }
    }
}, [state])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log('item in tem useeffect', items)
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [items, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className='paginationContainer'>
      <div className='paginationItems'>
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        className="paginationNumber"
        containerClassName="paginationNumberContainer"
        pageLinkClassName="paginationLinkContainer"
        onPageChange={handlePageClick}
        activeClassName="padinationActiveNumber"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}

      />
    </div>
  );
}