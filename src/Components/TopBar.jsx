import { FaMagnifyingGlass, FaCircleUser } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

function TopBar({ darkMode }) {
  const inputStyles = {
    borderBottomColor: darkMode ? "#ffffff" : "#000000",
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMailIconClick = () => {
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="fixed top-0 w-[80%] z-50 h-20 bg-white dark:bg-[#51577d] px-10 flex justify-between items-center border-b-2 border-gray-600 dark:border-[#51577d]">
      {/* header-left */}
      <form className="relative w-96 border-solid border border-border-color p-3 rounded-xl">
        <input
          type="text"
          placeholder="Search here..."
          className="ms-2 w-full border-none outline-none dark:bg-transparent text-gray-400 placeholder-gray-400 text-black dark:text-white"
          style={inputStyles}
        />
        <button type="submit" className="absolute right-3 top-3">
          <FaMagnifyingGlass
            size={20}
            className="text-gray-700 hover:text-primary transition-all"
          />
        </button>
      </form>

      {/* header-right */}
      <div className="header-right">
        <div className="flex text-2xl text-gray-200">
          <IoMoonOutline className="cursor-pointer bg-secondary text-black rounded-full h-9 w-9 p-2" />
          <IoIosNotificationsOutline
            className="cursor-pointer bg-secondary text-black rounded-full h-9 w-9 p-2"
            style={{
              color: darkMode ? "#ffffff" : "#000000",
            }}
          />
          <AiOutlineMessage
            className="cursor-pointer bg-secondary text-black rounded-full h-9 w-9 p-2"
            style={{
              color: darkMode ? "#ffffff" : "#000000",
            }}
            // onClick={handleMailIconClick}
          />
          <CiUser
            className="cursor-pointer bg-secondary text-black rounded-full h-9 w-9 p-2"
            style={{
              color: darkMode ? "#ffffff" : "#000000",
            }}
          />
        </div>
        {/* <div>
          <button
            className="cursor-pointer"
            onClick={handleLoginClick}
            style={{ color: "black", "font-weight": "bold" }}
          >
            Login
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default TopBar;
