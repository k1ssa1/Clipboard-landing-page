import computer from '../assets/image-computer.png'

const Snippets = () => {
    return ( 
        <div className="grid grid-cols-1 my-24">
            <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-2xl font-bold text-gray-900 max-sm:w-1/2">Keep track of your snippets</h4>
                <p className="w-1/3 mt-5 text-sm text-gray-400 max-sm:w-1/2">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything</p>
            </div>
            <div className="grid grid-cols-2 py-5 items-center mt-16 max-sm:grid-cols-1">
                <img src={computer} alt="computer" className='relative right-10 max-sm:block max-sm:right-0 max-sm:w-5/6 max-sm:mx-auto'/>
                <ul className="ml-28 max-sm:mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:ml-0 ">
                    <li className="mb-11">
                        <h6 className="mb-1 font-bold">Quick Search</h6>
                        <p className="text-gray-400 text-sm w-80">Easily search your snippets by content, category, web address, application, and more.</p>
                    </li>
                    <li className="mb-11">
                        <h6 className="mb-1 font-bold">iCloud Sync</h6>
                        <p className="text-gray-400 text-sm w-80">Instantly saves and syncs snippets across all your devices.</p>
                    </li>
                    <li>
                        <h6 className="mb-1 font-bold">Complete History</h6>
                        <p className="text-gray-400 text-sm w-80">Retrieve any snippets from the first moment you started using the app.</p>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Snippets;