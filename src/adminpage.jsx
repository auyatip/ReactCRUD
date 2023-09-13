import { useEffect, useState } from "react"
import Navbar from "./Navbar/navbar"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { v4 as uuidv4} from 'uuid';
import Edit from "./edit";
 const Admin = () => {
// input to api
  const [name,setName]= useState('')
  const [lastname,setLastname]= useState('')
  const [position,setPosition]= useState('')
// showEdit
  // const [showEdit,setShowEdit] = useState(false)

// IsValidate 
  const IsValidate = () => {
    if (!name || !lastname || !position) {
      alert('โปรดกรอกข้อมูลทุกช่อง');
     return false;
    }
    return true;
  }

// Add Data
  const AddData = async(name,lastname,position) => {
    const request = {
      id: uuidv4(),
      name: name,
      lastname: lastname,
      position: position
    };
    if (IsValidate()){
      await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        request
      );
      location.reload();
    }
    
  }

// Keep Data from api
  const [users,setUser] = useState([])

//GET DATA FROM API
    useEffect(() => {
        const getUser = async () => {
          const response = await axios.get(
            "https://jsd5-mock-backend.onrender.com/members"
          );
          setUser(response.data);
        };
    
        getUser();
      }, []);
      

//Delete Data
    const DeleteData = async(id) => {
      const confirm = window.confirm("Would You like to Delete?");
      if(confirm){
        const respone = await axios.delete(
          `https://jsd5-mock-backend.onrender.com/member/${id}`
        )
        location.reload();
      }
    }



  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-[2rem] font-bold">Generation Thailand</h1>
        <h1 className="text-[1.5rem]">Home - Admin Sector</h1>
          <div className="flex justify-center m-4 gap-5">
            <Link to='/userpage' className="bg-cyan-800 hover:bg-cyan-600 text-gray-200 drop-shadow-lg px-6 py-2 rounded-full">
            User Home Sector
            </Link>
            <Link to='/adminpage' className="bg-cyan-800 hover:bg-cyan-600 text-gray-200 drop-shadow-lg  px-6 py-2 rounded-full">
            Admin Home Sector
            </Link>
          </div>
      </div>

    {/* Form Input User */}
    <h1 className="mx-12 my-2">Create User Here</h1>
      <div className="flex gap-4 mx-12">
        
        <input class=" col-start-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text" 
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e)=> setName(e.target.value)}/>

        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text" 
        id="lasname"
        placeholder="Last Name"
        value={lastname}
        onChange={(e)=> setLastname(e.target.value)}/>

        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text" 
        id="position" 
        placeholder="Position"
        value={position}
        onChange={(e)=> setPosition(e.target.value)}/>

        <button className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-1"
        onClick={()=>AddData(name,lastname,position)}>ADD
        </button>
      </div>
    
    {/* Edit Form Input display */}
    {/* {showEdit ? <Edit/>:''}
      <button onClick={()=>setShowEdit(!showEdit)} className="border">Show</button> */}
    {/* Table of User */}
      <div className="flex justify-center text-center m-10 ">
          <table  className="border-collapse">
          <caption class="caption-top">
        Table : List of users
      </caption>
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2 bg-gray-800 text-white">Name</th>
                  <th className="w-1/2 px-4 py-2 bg-gray-800 text-white">Last Name</th>
                  <th className="w-1/2 px-4 py-2 bg-gray-800 text-white">Position</th>
                  <th className="w-1/2 px-4 py-2 bg-gray-800 text-white">Action</th>
                  <th className="w-1/2 px-4 py-2 bg-gray-800 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
              {users.map((item,index)=> (
                <tr className="bg-gray-100" key={index}>
                  <td className="border-b px-4 py-2">{item.name}</td>
                  <td className="border-b px-4 py-2 ">{item.lastname}</td>
                  <td className="border-b px-4 py-2">{item.position}</td>
                  
                  <td className="border-b px-4 py-2">
                    <Link to={`/edit/${item.id}`} class="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 rounded-lg px-2 py-1">
                          Edit
                    </Link>  
                    
                  </td>
                  <td className="border-b px-4 py-2">
                      <button onClick={()=>DeleteData(item.id)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 rounded-lg px-2 py-1">
                        Delete
                        </button>
                  </td>
                </tr>

              ))}
              
              </tbody>
          </table>
          
      </div>


    </div>
  )
}
export default Admin
