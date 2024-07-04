import logo from '../assets/logo.svg'

const Header = () => {
    return (  
        <div className="flex flex-col items-center text-center bg-header bg-no-repeat">
            <img src={logo} alt="logo" className='mt-24'/>
            <h2 className='mt-10 text-3xl font-bold text-gray-900'>A history of everything you copy</h2>
            <p className='mt-3 w-1/3 text-gray-400 text-sm'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            <div className="mt-8">
                <button className="mr-2 bg-emerald-500 text-white py-2 px-6 rounded-3xl shadow-md shadow-emerald-500">Download for iOS</button>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-3xl shadow-md shadow-blue-500">Download for Mac</button>
            </div>
        </div>
    );
}
 
export default Header;
