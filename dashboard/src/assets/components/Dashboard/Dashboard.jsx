
import './style.css'
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
const Dashboard =()=>{
    return(

        <>
        <div className='dashboard'>
            <Header />
            <div className='app'>
                <SideBar />
                <Main />
            </div>
        </div>

       
        </>
    )
}

export default Dashboard