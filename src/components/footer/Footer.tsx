import Image from "next/image"
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24 px-2 "
       src={logo} alt="Logo"/>
       <p>All right reserved 
        <a className="hover:text-white hover:underline decoration:[1px] cursor-pointer
        duration-500 px-2 text-amazon_yellow font-bold" 
       href="https://ehtisham-personal.web.app/"
       target="_blanks">Syed Ehtisham</a></p>
    </div>
  )
}

export default Footer
