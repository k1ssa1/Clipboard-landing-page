import google from '../assets/logo-google.png'
import ibm from '../assets/logo-ibm.png'
import microsoft from '../assets/logo-microsoft.png'
import hp from '../assets/logo-hp.png'
import vector from '../assets/logo-vector-graphics.png'

const Sponsors = () => {
    return (  
        <div className='flex flex-row justify-around mt-24 mb-10 mx-14 py-10'>
            <img src={google} alt="google" className='w-48 h-14'/>
            <img src={ibm} alt="ibm" className='w-48 h-14'/>
            <img src={microsoft} alt="microsoft" className='w-48 h-14'/>
            <img src={hp} alt="hp" className='w-48 h-14'/>
            <img src={vector} alt="vector" className='w-48 h-14'/>
        </div>
    );
}
 
export default Sponsors;