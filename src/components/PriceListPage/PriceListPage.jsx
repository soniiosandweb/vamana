import PriceList from "../Home/PriceList/PriceList"
import MetaData from "../Layouts/MetaData"

const PriceListPage = () => {
    return(

        <>
        <MetaData title={"Price List - Vamana Group Price List"}
                description={"Check out the price list of the luxurious flats at Vamana Group. Choose from various options available as per your budget, affordability and premium living."}
                 />
        <PriceList />
        </>
        
    )
}

export default PriceListPage