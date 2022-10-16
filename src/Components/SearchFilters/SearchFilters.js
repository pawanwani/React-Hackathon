import { Fragment, useState } from "react"
import LoyaltyScoreFilter from "../LoyaltyScoreFilter/LoyaltyScoreFilter"
import UserIdSearch from "../UserIdSearch/UserIdSearch"
import './SearchFilters.css'

export default function SearchFilters() {

    const [filterType, setfilterType] = useState("userid");

    const handleChange = (e) => {
        const target = e.target;
        if (target.checked) {
            console.log(e.target.value);
            setfilterType(target.value);
        }
    };

    return (
        <Fragment>
            <div className="search-filter-container">
                <div className="search-heading">
                    Search Filters
                </div>
                <div>
                    <p className="search-text">Search by </p>
                    <div className="radio-container">
                        <div
                            className={`radio ${filterType.toLowerCase().includes("userid")
                                ? "radio-checked"
                                : ""
                                }`}
                        >
                            <label htmlFor="userId" className="userId-radio">
                                User Id
                            </label>
                            <input
                                type="radio"
                                name="filter-radio"
                                value="userid"
                                className="filter-radio"
                                onChange={handleChange}
                                checked={filterType.toLowerCase().includes("userid")}
                                id="userId"
                            />
                        </div>
                        <div
                            className={`radio ${filterType.toLowerCase().includes("loyaltyscore") ? "radio-checked" : ""
                                }`}
                        >
                            <label htmlFor="loyaltyScore" className="loyalty-radio">
                                Loyalty Range
                            </label>
                            <input
                                type="radio"
                                name="filter-radio"
                                value="loyaltyscore"
                                className="filter-radio"
                                onChange={handleChange}
                                checked={filterType.toLowerCase().includes("loyaltyscore")}
                                id="loyaltyScore"
                            />
                        </div>
                    </div>
                </div>
                {filterType.toLowerCase().includes('userid') ?
                    <UserIdSearch />
                    :
                    <LoyaltyScoreFilter />
                }
            </div>
        </Fragment>
    )
}