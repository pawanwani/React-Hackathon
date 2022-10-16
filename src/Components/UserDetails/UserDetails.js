import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './UserDetails.css'
export default function UserDetails(){
    return(
        <div>
            <CircularProgressbar className='user-Loyality-score' value={55} text={<tspan>{"username"}<br/>{"55%"}</tspan>} />
        </div>
    )
}