import devicesImage from "../assets/image-devices.png"

const clipboardAccess = () => {
    return ( 
        <div className="flex flex-col items-center mt-32 text-center justify-center">
            <h4 className="text-xl font-bold">Access Clipboard Anywhere</h4>
            <p className="mt-2 w-1/2 text-sm text-gray-400">Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks</p>
            <img src={devicesImage} alt="devices_image" className="mt-16"/>
        </div>
     );
}
 
export default clipboardAccess;