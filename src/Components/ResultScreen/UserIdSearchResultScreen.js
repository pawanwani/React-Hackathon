import { Fragment, useEffect, useState } from "react"
import { CircularProgressbar } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import './UserIdSearchResultScreen.css'
import Userimage from '../../public/images/user-img.png';

export default function UserIdSearchResultScreen() {

    const [userLoyalty, setUserLoyalty] = useState({})
    const [classToBeadded, setClassToBeadded] = useState('');


    const state = useSelector(state => state);

    const data = state.Item.Item;
    const userId = state?.selectedOptions?.SearchFilterSelected?.userId;

    const classIdentifiers = {below20 : 'bar-color-red', below70 : 'bar-color-orange', above70 : 'bar-color-green'}

    useEffect(() => {
        const helper = data.filter(dataItem => dataItem?.userId?.toLowerCase().includes(userId?.toLowerCase()));
        console.log('helper ',helper)
        setUserLoyalty(helper[0]);
        setClassToBeadded(helper[0]?.loyaltyScore <= 0.2 ? classIdentifiers.below20 : (helper[0]?.loyaltyScore <= 0.7 ? classIdentifiers.below70 : classIdentifiers.above70))
    }, [userId])

    return (
        <Fragment>
            {console.log('userLoyalty',userLoyalty)}
            <div className="single-user-loyalty ">
                <CircularProgressbar className={classToBeadded} value={userLoyalty?.loyaltyScore * 100} text={`${(userLoyalty?.loyaltyScore * 100).toFixed(0)}%`} />
                <div className="user-detail-block">
                    <img src={Userimage}></img>
                    <p>{userId}</p>
                </div>
            </div>
        </Fragment>
    )
}