import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
    return (
        <header className='w-full py-2 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full max-w-screen mx-auto'>
                <img src={appleImg} alt='Apple Logo' width={14} height={18}/>
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map(
                        (nav) => {
                            return <div key={nav} className="px-5 text-sm cursor-pointer text-gray-500 hover:text-white transition-all" >
                                {nav}
                            </div>
                        }
                    )}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <img src={bagImg} alt="bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

