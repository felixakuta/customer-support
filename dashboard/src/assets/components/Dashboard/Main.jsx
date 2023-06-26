import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icon1 from '../components/images/icon1.png'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import chart from './images/Chart.png'
import frame from './images/frame.png'

const Main =()=>{
    return(

        <>
        <main>
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <section className="row">
                <div className="card">
                    <div className='card-icon'>
                        <img src={icon1} alt="" />
 
                    </div>
                    <div className='card-details'>
                        <span>Account Balance</span>
                        <h2 style={{marginTop:"2px"}}><strike>N</strike>60,000</h2>
                        <h3 style={{margin:"2px",color:"orange"}}>Welma Bank</h3>
                        <span>095468888888</span>


                    </div>

            </div>
            <div className="card card2">
                    <div className='card-icon'>
                        <FontAwesomeIcon icon={faPaperPlane} className='iconPaper' />
 
                    </div>
                    <div className='card-details'>
                        <span>Account Balance</span>
                        <h2 style={{marginTop:"2px",color:"black"}}><strike>N</strike>65,000</h2>
                        <h3 style={{margin:"2px",color:"#101828"}}>Monthly percentage</h3>
                        <span>0.5% - 2%</span>


                    </div>

            </div>
         

                </section>
                <section>
                <img src={chart} style={{width:"100%",height:"100%"}} />

                </section>
                <section>
                    <img src={frame} style={{width:"100%",height:"100%"}} />

                </section>
           

            </div>
            
        </main>

       
        </>
    )
}

export default Main