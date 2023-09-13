import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar/navbar'

const Edit = () => {
    const [data,setData] = useState([])
    const {id}= useParams()
    const navigate = useNavigate();

// IsValidate 
  const IsValidate = () => {
    if (!data.name || !data.lastname || !data.position) {
      alert('โปรดกรอกข้อมูลทุกช่อง');
     return false;
    }
    return true;
  }
  
    const EditData = async (name,lastname,position) => {
        if(IsValidate()) {
        const response = await axios.put(
            `https://jsd5-mock-backend.onrender.com/members/`,
          {
            id: id,
            name: name,
           lastname: lastname,
           position: position
          }
        );
        
        setData(response.data)
        navigate('/adminpage')
    }
    };

    return (
        <>
            <Navbar/>
            <div className='mt-6'>
                <h1 className="mx-12 my-2">Edit User Here : </h1>
                <div className="flex gap-4 mx-12">
                    
                    <input class=" col-start-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" 
                    id="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e)=> setData({...data,name:e.target.value})}/>

                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" 
                    id="lasname"
                    placeholder="Last Name"
                    value={data.lastname}
                    onChange={(e)=> setData({...data,lastname:e.target.value})}/>

                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" 
                    id="position" 
                    placeholder="Position"
                    value={data.position}
                    onChange={(e)=> setData({...data,position:e.target.value})}/>

                    <button 
                    className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-1"
                    onClick={()=>EditData(data.name,data.lastname,data.position)}>
                        UPDATE
                    </button>
                    <Link to="/adminpage" 
                    className="focus:outline-none pt-2 text-white bg-red-700 hover:bg-red-800 rounded-lg px-4 ">
                        CANCEL
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Edit