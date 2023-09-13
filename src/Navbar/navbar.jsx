import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
       
       <nav className="relative flex w-full flex-nowrap items-center justify-between bg-gray-800 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-end px-3">
                  <Link to='/' 
                  className="bfont-medium text-xl px-3 py-2 text-white rounded-lg hover:bg-slate-300 hover:duration-300 hover:text-slate-900" 
                  type="button">
                    Home
                    </Link>

                  <Link to='/owner' 
                  className="bfont-medium text-xl px-3 py-2 text-white rounded-lg hover:bg-slate-300 hover:duration-300" 
                  type="button">
                    Owner
                    </Link>
                </div>
        </nav>
    </div>
  )
}

export default Navbar
