import {ReactElement} from 'react'
import Headr from '../header/Headr'
import BottomHeader from '../header/BottomHeader'
import Footer from '../footer/Footer'


interface Props{
    children: ReactElement;
}
const RootlayOut = ({children}:Props) => {
  return (
    <div>
      <Headr />
      <BottomHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RootlayOut
