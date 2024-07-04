const Snippets = () => {
    return ( 
        <div className="grid grid-cols-1 my-24">
            <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-2xl font-bold text-gray-900">Keep track of your snippets</h4>
                <p className="w-1/3 mt-5 text-sm text-gray-400">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything</p>
            </div>
            <div className="mt-24 bg-snipets bg-no-repeat bg-left bg-contain p-16">
                <ul className="float-right mr-56 text-justify w-80">
                    <li className="mb-11">
                        <h6 className="mb-1 font-bold">Quick Search</h6>
                        <p className="text-gray-400 text-sm">Easily search your snippets by content, category, web address, application, and more.</p>
                    </li>
                    <li className="mb-11">
                        <h6 className="mb-1 font-bold">iCloud Sync</h6>
                        <p className="text-gray-400 text-sm">Instantly saves and syncs snippets across all your devices.</p>
                    </li>
                    <li>
                        <h6 className="mb-1 font-bold">Complete History</h6>
                        <p className="text-gray-400 text-sm">Retrieve any snippets from the first moment you started using the app.</p>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Snippets;