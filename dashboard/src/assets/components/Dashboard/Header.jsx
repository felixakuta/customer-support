
import logo from '../Dashboard/images/icon.png'
import Notification from '../Dashboard/images/Notification.png'
import profile from '../Dashboard/images/profile.png'

const Header =()=>{
    return(

        <>
        <header>
            <div className='logo'>
                <img src={logo} alt='logo' width={50} /><h3>Moneyway</h3>

            </div>
            <div className='profile-content'>
                <img src={Notification} alt='' width={20} />
                <div className='alertIcon'></div>
                <div className='profile-container'>
                    <div className='profile'>
                    <img src={profile} alt=''  />
                        </div>
         
                    <span>Felix</span>
                </div>

            </div>
        </header>

       
        </>
    )
}

export default Header


