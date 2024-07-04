import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'

const Footer = () => {
    return ( 
        <div className='bg-teal-50 flex flex-row justify-around items-center mt-32 py-8'>
            <img src={logo} className='h-14'/>
              <ul className='grid grid-cols-3 gap-x-12 gap-y-4'>
                <li className='hover:text-emerald-500'><a href="">FAQs</a></li>
                <li className='hover:text-emerald-500'><a href="">Privacy Policy</a></li>
                <li className='hover:text-emerald-500'><a href="">Install Guide</a></li>
                <li className='hover:text-emerald-500'><a href="">Contact Us</a></li>
                <li className='hover:text-emerald-500'><a href="">Press Kit</a></li>
              </ul>
              <ul className='grid grid-cols-3 gap-x-5'>
                <li><img src={facebook} alt="facebook"/></li>
                <li><img src={twitter} alt="twitter"/></li>
                <li><img src={instagram} alt="instagram"/></li>
              </ul>
        </div>
     );
}
 
export default Footer;