import { Fragment } from "react";
import samapleData from '../../data/data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './LoyaleyCustomer.css';

export default function LoyaleyCustomer(){
    console.log("data => ", samapleData);

    return(
        <Fragment>
            <div className="loyalyCOntainer">
                <div className="loyaltyName">
                    Manjunath S
                </div>
               <div className="progressCircle">
                 <CircularProgressbar value={98} text={`text${98}%`} />;
              </div>
            </div>
        </Fragment>
    )
}
