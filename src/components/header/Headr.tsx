import Image from 'next/image'
import logo from "../../images/logo.png"
import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Iconsssssss
import { BiCaretDown } from "react-icons/bi"
import CartIcon from "../../images/cartIcon.png"
import { HiOutlineSearch } from "react-icons/hi"
import { SlLocationPin } from "react-icons/sl"
import Link from 'next/link'


import { StateProps, StoreProduct } from "../../../type";

import { useSession, signIn, signOut } from "next-auth/react"
import { addUser } from '@/store/NextSlice';



const Headr = () => {
  // const [filteredProducts, setFilteredProducts] = useState(); 
  const { productData, favoriteData, userInfo, allProducts } = useSelector(
    (state: StateProps) => state.next
  );
  const { data: session } = useSession()

  const [allData, setAllData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);


  return (
    <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
      <div className='h-full w-full mx-auto inline-flex  items-center justify-between gap-1 mdl:gap-3 px-4'>
        {/* Logooooooo */}
        <Link
          href='/'
          className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex-item-center justify-center h-[70%]'>
          <Image className='w-28 mt-1 object-cover  ' src={logo} alt="logo image" />
        </Link>

        {/* delivery.............. */}

        <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 
        items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
          <SlLocationPin />
          <div>
            <p>Deliver to</p>
            <p className='text-white font-bold upperCase'>USA</p>
          </div>
        </div>
 {/* serchbar */}
 <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search next_amazon_yt products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
          {/* ========== Searchfield ========== */}
          <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                </div>
          {/* ========== Searchfield ========== */}
        </div>

        {/* sign In............... */}

        {
          userInfo ? 
          (
            <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="userImage"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
          ) : (<div onClick={() => signIn()} className='text-xs text-gray-100 flex flex-col justify-center px-2 border 
              border-transparent
              hover:border-white cursor-pointer duration-300 h-[70%]'>
            <p>Hello, Signin</p>
            <p className='text-white font-bold flex items-center'>
              Account & Lists{" "}
              <span><BiCaretDown /></span></p>
          </div>
          )
        }
        {/* favorite................ */}

        <Link
          href={"/"}
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
        </Link>

        {/* Cart ................ */}


        <Link href={"/Cart"} className='flex items-center px-2  border-transparent
        hover:border-white cursor-pointer duration-300 h-[70%] relative'>

          <Image
            className='w-auto object-cover h-8'
            src={CartIcon}
            alt='CartIcon' />
          <p className='text-white text-xs font-bold mt-3'>Cart</p>
          <span className='absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold'>
            {productData ? productData.length : 0}
          </span>
        </Link>

      </div>
    </div>
  )
}

export default Headr
