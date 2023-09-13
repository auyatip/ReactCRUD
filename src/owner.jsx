import Navbar from "./Navbar/navbar"

const Owner = () => {
  return (
  <>
        <Navbar/>
    <div className="flex flex-col items-center mt-4">
        <h1 className="text-[2rem] font-bold ">03_AuieAthip</h1>
        <div className="max-w-[500px] mb-4">
          <img className="rounded-xl w-full mt-2 shadow-md max-h-[350px] object-cover" src="../img/owner.jpg" alt="" />
        </div>
        <div className="max-w-lg flex flex-col text-center">
          <h2 >History</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quod quia impedit quas voluptates, doloribus fugiat minus ea sint qui unde facere doloremque earum asperiores. Facere asperiores exercitationem excepturi eaque.</p>
        </div>
    </div>
  </>
  )
}

export default Owner