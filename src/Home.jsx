
// GITHUB REPO : https://github.com/auyatip/ReactCRUD
// Vercel : https://react-crud-roan.vercel.app/


import { Link } from "react-router-dom"
import Navbar from "./Navbar/navbar"
import Admin from './adminpage'

export const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center m-4">
        <h1 className="text-[2rem] font-bold">Generation Thailand</h1>
        <h1 className="text-[1.5rem]">React Assessment</h1>
        <div className="flex justify-center m-4 gap-5">
          <Link to='/userpage' className="bg-cyan-800 hover:bg-cyan-600 text-gray-200 drop-shadow-lg px-6 py-2 rounded-full">
          User Home Sector
          </Link>
          <Link to='/adminpage' className="bg-cyan-800 hover:bg-cyan-600 text-gray-200 drop-shadow-lg  px-6 py-2 rounded-full">
          Admin Home Sector
          </Link>
        </div>
    </div>
    </>
  )
}


export default Home
