import { LuMenu } from "react-icons/lu";
import { StateProps } from "../../../type";
import { signOut } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "@/store/NextSlice";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);
  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };
  return (
    <div className='w-full h-10 text-white bg-amazon_light text-sm px-4 flex items-center'>
      <p className='flex items-center gap-1 px-2 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300'>
        <LuMenu /> All
      </p>
      <p className='hidden md:inline-flex items-center px-2 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300'>Todays Deals</p>
      <p className='hidden md:inline-flex items-center px-2 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300'>Customer Service</p>
      <p className='hidden md:inline-flex items-center px-2 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300'>Registry</p>
      <p className='hidden md:inline-flex items-center px-2 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300'>Gift Cart</p>
      <p className='hidden md:inline-flex items-center px-2 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300'>Sells</p>
      
      {/* //////////////////sign out */}

      {userInfo && (
        <button
          onClick={handleSignOut}
          className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
        >
          Sign Out
        </button>
      )}

      
      </div>
  )
}

export default BottomHeader
