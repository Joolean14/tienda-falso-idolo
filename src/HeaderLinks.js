import './Header-links.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';


function HeaderLinks() {
    return (
        <div className='header-links'>
            <div className='icons-container'>
                <div className='icon'>
                    <SearchIcon></SearchIcon>
                </div>
                <div className='icon'>
                    <PersonOutlineIcon></PersonOutlineIcon>
                </div>
                <div className='icon'   >
                    <LocalMallIcon></LocalMallIcon>
                </div>
            </div>
            <div className='section-links-container'>
                <Link className='section-link' to=''>APPAREL</Link>
                <Link className='section-link' to=''>MUSIC</Link>
                <Link className='section-link' to=''>OTHER</Link>
            </div> 
        </div>
    );
}

export default HeaderLinks;

