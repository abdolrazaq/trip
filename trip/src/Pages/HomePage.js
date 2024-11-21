import Header from '../Components/Header/Header'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Blog from '../Components/Blog/Blog'
import About from '../Components/About/About'
import Slider from '../Components/Slider/Slider'
import LocationMap from '../Components/LocationMap/LocationMap'




const Homepage = () => {
    return (
        <>
            <Header />
            <Popular />
            <Offers />
            <About />
            <Blog />
            <Slider />
            <LocationMap/>
           
            
        </>
    )
}
export default Homepage