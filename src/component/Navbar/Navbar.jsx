import logo from "../../assets/LOGO.png"

const Navbar = () => {
    return (
        <div className="w-full h-[150px] bg-transparent flex justify-between items-center px-[150px] ">
            <div>
                <img src={logo} alt="" className="w-[160px] h-[145px]" />
            </div>

            <ul className="flex gap-[40px] font-Poppins text-[18px] font-[600]">
                <li><a href="">HOME</a></li>
                <li><a href="">JUICE</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">ABOUT US</a></li>

                <div className="ml-[50px] ">
                    <input type="text" placeholder="Serach"  className="w-[209px] h-[46px] rounded-[41px] pl-4 focus:outline-none bg-white bg-opacity-[50%] text-black text-opacity-[40%]" />
                </div>
            </ul>

        </div>
    )
}

export default Navbar