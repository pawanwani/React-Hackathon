import { Fragment, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './LoyaltyScoreFilter.css';
import { SetSearchOptions } from "../../hooks/api/ApiCalls";
import { useDispatch } from "react-redux";

export default function LoyaltyScoreFilter() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const dispatch = useDispatch();

    const handleSearchButton = () => {
        //send values min and max values to resultcount
        SetSearchOptions(dispatch, { userId: null, loyaltyScore: { minValue, maxValue }, clear:null });
    }

    const handleClearButton = () => {
        SetSearchOptions(dispatch, { userId: null, loyaltyScore: null, clear : true });
    }

    return (
        <Fragment>
            <div className="loyalty-filter-container">
                Loyalty Score Filter
            </div>
            <div className="multiRangeSlider-container">
                <MultiRangeSlider
                     ruler = {false}
                     label = {false}
                    onChange={(e) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                        console.log('e.minValue in on change',e.minValue)
                        console.log('e.maxValue in on change',e.maxValue)
                    }}
                ></MultiRangeSlider>
            </div>
            <div className="min-max-values">
                Min : {minValue} &nbsp;&nbsp;&nbsp; Max : {maxValue}
            </div>
            <div className="button-container">
                <div className="search-button-container">
                    <button onClick={handleSearchButton}>Search</button>
                </div>
                <div className="Clear-button-container">
                    <button onClick={handleClearButton}>Clear</button>
                </div>
            </div>
        </Fragment>
    )
}