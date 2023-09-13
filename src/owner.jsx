import Navbar from "./Navbar/navbar"
import owner from '../img/owner.jpg'
const Owner = () => {
  return (
  <>
        <Navbar/>
    <div className="flex flex-col items-center mt-4">
        <h1 className="text-[2rem] font-bold hover:subpixel-antialiased underline">03-AuieAthip / Group B</h1>
        <div className="max-w-[500px] m-4">
          <img className="rounded-xl w-full m-2 shadow-md max-h-[350px] object-cover " src={owner} alt="owner" />
        </div>
        <div className="max-w-lg flex flex-col text-center hover:scale-110 hover:duration-500">
          <h2 >History</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quod quia impedit quas voluptates, doloribus fugiat minus ea sint qui unde facere doloremque earum asperiores. Facere asperiores exercitationem excepturi eaque.</p>
        </div>
    </div>
  </>
  )
}

export default Owner