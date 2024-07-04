import blacklist from '../assets/icon-blacklist.svg'
import book from '../assets/icon-text.svg'
import preview from '../assets/icon-preview.svg'

const Tools = () => {
    return ( 
        <div className='mt-10 mb-10'>
            <div className='grid grid-cols-1 text-center mt-10'>
                <h4 className='text-xl font-bold'>Supercharge your Workflow</h4>
                <p className='mt-2 text-sm text-gray-400'>We've got the tools to boost your productivity so you can focus on the important tasks.</p>
            </div>
            <div className='mt-10 mx-32'>
                <ul className='flex flex-row justify-center items-center'>
                    <li className='py-4 px-10 mx-2 text-center flex flex-col items-center justify-center'>
                        <img src={blacklist} alt="book_icon" className='h-8'/>
                        <h6 className='mt-4 font-bold'>Create blacklists</h6>
                        <p className='mt-4 w-80 text-gray-400 '>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </li>
                    <li className='py-4 px-10 mx-2 text-center flex flex-col items-center justify-center'>
                        <img src={book} alt="text_icon" className='h-8'/>
                        <h6 className='mt-4 font-bold'> Plain text snippets</h6>
                        <p className='mt-4 w-96 text-gray-400 '>Remove unwanted formatting from copied text for a consistent look</p>
                    </li>
                    <li className='py-4 px-10 mx-2 text-center flex flex-col items-center justify-center'>
                        <img src={preview} alt="preview_icon" className='h-8'/>
                        <h6 className='mt-4 font-bold'>Sneak preview</h6>
                        <p className='mt-4 w-96 text-gray-400 '>Quick preview of all snippets on your Clipboard for east access.</p>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Tools;