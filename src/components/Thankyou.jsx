import { useEffect } from 'react';

export default function Thankyou() {


    useEffect(() => {

     
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16677697257/DBiSCPzj9MsZEOntxZA-',
                'value': 0.0,
                'currency': 'INR'
            });
            console.log('Conversion event sent');
        } else {
            console.error('gtag is not defined');
        }
    }, []); 

    return (
        <div className="container">
            <div className="row">
                <div className="thankyou-text items-center text-4xl font-semibold my-5 text-primary-yellow py-10 text-center">
                    Thank You !!
                </div>
            </div>
        </div>
    );
}
