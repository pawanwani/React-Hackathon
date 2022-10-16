import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux";
import { SetSearchOptions } from "../../hooks/api/ApiCalls";
import './UserIdSearch.css';

export default function UserIdSearch() {

    const data= useSelector(state => state.Item.Item);

    const dispatch = useDispatch();

    const handledropdown = (e) => {
        console.log(e.target.value);
        SetSearchOptions(dispatch, { userId: e.target.value, loyaltyScore: null,clear: null });
    }

    return (
        <Fragment>
            <div className="userid-container">
                <div className="userid-search">
                    <select name="userIdSearch" id="userIdSearch" defaultValue={'Select or type user id'} onChange={handledropdown}>
                        <option disabled={true} className="options" >Select or type user id</option>
                        {data.map((dataItem, index) =>
                            <option className="options" key={index} value={dataItem?.userId}>{dataItem?.userId}</option>
                        )}
                    </select>
                </div>
            </div>
        </Fragment>
    )
}