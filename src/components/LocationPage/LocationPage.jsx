import Location from "../Home/Location/Location"
import MetaData from "../Layouts/MetaData"

const LocationPage = () => {
    return( 
        <>

<MetaData title={"Vamana Group Location Map"}
                description={"Discover the prime location of Vamana Flat. Strategically situated on National Highway with excellent connectivity, enjoy easy access to schools, hospitals, shopping centers, and more."}
                />
        <Location />
        </>
        
    )
}

export default LocationPage