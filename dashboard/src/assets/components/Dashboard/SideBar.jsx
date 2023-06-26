import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faSignOut, faTrafficLight, faWallet,faHome } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const SideBar =()=>{
    return(

        <>
        <aside>
            <div className='sdebar-content'>
            <Link className='sidebar-icon blue'>
                    <FontAwesomeIcon icon={faHome} className='icon'/>
                    <div>Dashboard</div>
                </Link>
                <Link className='sidebar-icon '>
                    <FontAwesomeIcon icon={faEye}  className='icon'/>
                    <div>Paymemts</div>
                </Link>
                <Link className='sidebar-icon '>
                    <FontAwesomeIcon icon={faWallet} className='icon'/>
                    <div>Fund Wallet</div>
                </Link>
                <Link className='sidebar-icon '>
                    <FontAwesomeIcon icon={faTrafficLight} className='icon'/>
                    <div>Transfer</div>
                </Link>

            </div>
            <Link className='sidebar-icon '>
                    <FontAwesomeIcon icon={faSignOut} className='icon'/>
                    <div>Logout</div>
                </Link>
            
        </aside>

       
        </>
    )
}

export default SideBar