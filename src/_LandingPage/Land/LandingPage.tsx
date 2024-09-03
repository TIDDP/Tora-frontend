import About from '../../component/About';
import Features from '../../component/Features';
import Header from '../../component/Header';
import Herosection from '../../component/Herosection';
import { Route, Routes } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className=''>
        <Header/>
        <Routes>
            <Route path='/herosection' element={<Herosection/>}/>
            <Route path='/features' element={<Features/>}/>
             <Route path='/about' element={<About/>}/>
        </Routes>
        <Herosection/>
         <About/>
        <Features/>


    </div>
  )
}

export default LandingPage
