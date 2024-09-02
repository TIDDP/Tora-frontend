import { Routes , Route } from "react-router-dom"
import LandingPage from "./_LandingPage/Land/LandingPage"
import SigninForm from "./_auth/forms/SigninForm"
import { Home } from "./_Root/Pages"
import SignupForm from "./_auth/forms/SignupForm"
import LandingLayout from "./_LandingPage/LandingLayout"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_Root/RootLayout"


const App = () => {
  return (
    <main className="font-Poppins">
        <Routes>
            {/* public routes */}
            {/* landing page route */}
            <Route element={<LandingLayout/>}>
            <Route index element = {<LandingPage/>}/>
            </Route>
            {/* auth routes */}
            <Route element ={<AuthLayout/>}>
            <Route path="/signin" element = {<SigninForm/>}/>
            <Route path="/signup" element = {<SignupForm/>}/>
            </Route>
            {/* private routes */}
            <Route element={<RootLayout/>}>
            <Route path="/home" element = {<Home/>}/>
            </Route>

        </Routes>

    </main>
  )
}

export default App
