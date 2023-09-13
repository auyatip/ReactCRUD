import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
       
       <nav className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-800 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-end px-3">
                  
                  <Link to='/' 
                  className="block border-0 bg-transparent px-2 text-neutral-300 hover:underline hover:text-neutral-100" 
                  type="button">

                    Home
                    </Link>

                  <Link to='/owner' 
                  className="block border-0 bg-transparent px-2 text-neutral-300 hover:underline hover:text-neutral-100" 
                  type="button">

                    Owner
                    </Link>

                 
                </div>
        </nav>
    </div>
  )
}

export default Navbar
