import './Nav.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import data from '../../public/data.csv';
export default function Navbar (){
    return(
        <header className='navbar'>
                <div className='navbar__title navbar__item'><img src='https://cdn-icons-png.flaticon.com/512/4501/4501249.png' alt='Logo' title='Elite Loyalty Gauge'/><span>Elite Loyalty Gauge</span></div>
                <Link to="/"> <div className='navbar__item'><img className='download__img' title="Download Sample data" src="https://cdn-icons-png.flaticon.com/512/747/747589.png" alt="Home" /></div></Link>
                <Link to={data} target="_blank"><div className='navbar__item'  download><img className='download__img' title="Download Sample data" src="https://cdn-icons-png.flaticon.com/512/5490/5490449.png" alt="Dowload Smaple Data" /></div></Link>
        </header>
    )
}