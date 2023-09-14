import { useEffect, useState } from "react"
import Navbar from "./Navbar/navbar"
import { Link } from "react-router-dom"
import axios from 'axios'
// Props MockData from HomePage
import {mockEmployees} from './Home';

const User = () => {
  const [users,setUser] = useState([])
// Props - mockData
const [mockData, setMockData] = useState(mockEmployees);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setUser(response.data);
    };

    getUser();
   
  }, []);

  return (
   <div>
      <Navbar/>
      <div className="flex flex-col items-center m-4">
        <h1 className="text-[2rem] font-bold">Generation Thailand</h1>
        <h1 className="text-[1.5rem]">Home - User Sector</h1>
          <div className="flex justify-center m-4 gap-5">
            <Link to='/userpage' className="bg-cyan-800 hover:bg-cyan-600 text-gray-200 drop-shadow-lg px-6 py-2 rounded-full">
            User Home Sector
            </Link>
            <Link to='/adminpage' className="bg-cyan-800 hover:bg-cyan-600 text-gray-200 drop-shadow-lg  px-6 py-2 rounded-full">
            Admin Home Sector
            </Link>
          </div>
      </div>

    {/* table display */}
      <div className="flex justify-center text-center">
          <table  className="border-collapse">
          <caption class="caption-top">
        Table : List of users
      </caption>
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2 bg-gray-800 text-white">Name</th>
                  <th className="w-1/2 px-4 py-2 bg-gray-800 text-white">Last Name</th>
                  <th className="w-1/2 px-4 py-2 bg-gray-800 text-white">Position</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
            
            {/* MockData */}
            {mockData.map((items, index) => (
              <tr className="bg-gray-100" key={index}>
                <td className="border-b px-4 py-2">{items.name}</td>
                <td className="border-b px-4 py-2 ">{items.lastname}</td>
                <td className="border-b px-4 py-2">{items.position}</td>
               
              </tr>
            ))}
            
            {/* APIDATA */}
              {users.map((item,index)=> (
                <tr className="" key={index}>
                  <td className="border-b px-4 py-2">{item.name}</td>
                  <td className="border-b px-4 py-2 ">{item.lastname}</td>
                  <td className="border-b px-4 py-2">{item.position}</td>
                </tr>

              ))}
                
              </tbody>
          </table>
      </div>

  </div>
  )
}

export default User
