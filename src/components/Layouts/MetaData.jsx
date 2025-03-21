import { Helmet } from "react-helmet"

const MetaData = ({ title, description, keywords, canonicalUrl }) => {
    return(
        <Helmet>
            <title>{title}</title>
            {description && (
                <meta name='description' content={description} />
            )}

            {keywords && (
                <meta name="keywords" content={keywords} />
            )}

            {canonicalUrl &&
                <link rel="canonical" href={canonicalUrl ? canonicalUrl : "https://vamanaresidences.com/" } />
            }

            
            
        </Helmet>
    )
}

export default MetaData