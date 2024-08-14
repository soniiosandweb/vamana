import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber, isValidPhoneNumber} from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const EnquireForm = ({title, setOpen}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [termsValue, setTermsValue] = useState(false);
    const [termsCheck, setTermsCheck] = useState(false);
    const [mobileNumber, setMobileNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if(mobileNumber){
            if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
                setPhoneError("Please Enter Valid Mobile Number.");

                setTimeout(() => {
                    setPhoneError('');
                }, 5000);

                return false;
            }
        }

        setLoading(true);

        axios({
            method: "post",
            data: JSON.stringify({
                    name: name,
                    mobileNumber: mobileNumber,
                    email: email,
                }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {
            //handle success
            if (response.data.status === 0) {
                setLoading(false);
                setFormSuccess("THANK YOU! Our Team Will Contact You Shortly!");
                resetForm();
                setTimeout(() => {
                    setFormSuccess('');
                    if(setOpen){
                        setOpen(false);
                    }
                }, 10000);
                
            } else {
                setLoading(false);
                setFormError("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 10000);
            }
        })
        .catch(function (response) {
            //handle error
            setLoading(false);
            console.log(response);
            setFormError("Some error occured");
            resetForm();
            setTimeout(() => {
                setFormError('');
            }, 5000);
        });

    }

    const CheckboxChange = (e) => {
       
        setTermsValue(!termsValue); 
        setTermsCheck(!termsValue);
        
    }

    const resetForm = () =>{
        setName("")
        setMobileNumber('');
        setEmail('');
        setTermsValue(false); 
        setTermsCheck(false);
    }

    return(
        <form className="enquire-form py-6"  onSubmit={handleSubmit}>
            <div className="form-section text-left">
                {formError && (
                    <p className="text-red-400 py-2.5 text-md">{formError}</p>
                )}

                {formSuccess && (
                    <p className="text-green-700 py-2.5 text-md">{formSuccess}</p>
                )}

                <p className="text-2xl font-extrabold capitalize mb-2.5">{title}</p>
                <div className="py-2">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="py-2">
                    <PhoneInput
                        type="tel" 
                        id="mobile-number"
                        name="mobile-number"
                        placeholder="Contact Detail (Optional)"
                        className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                        country="IN"
                        defaultCountry="IN"
                        value={mobileNumber}
                        onChange={setMobileNumber}
                        limitMaxLength={true}
                        national="true"
                        international={false}
                    />
                    {phoneError && (
                        <p className="text-red-400 text-sm">{phoneError}</p>
                    )}
                </div>
                <div className="mt-2.5 flex items-center gap-5 justify-center">
                    <input type="submit" value="Get New Price List" className={`w-max text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-yellow cursor-pointer'}`} disabled={loading} />
                    {loading && (
                        <CircularProgress
                            sx={{
                            color: (theme) =>
                                theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                            }}
                            size={35}
                            thickness={4}
                            value={100}
                        />
                    )}
                </div>
                <p className='mt-5'><input type='checkbox' required className='align-middle size-4' name="termsCheck" checked={termsCheck} value={termsValue} onChange={(e) => CheckboxChange(e)}/> *I authorize to contact me via any method and consent to data use, ignoring DNC/NDNC.</p>
            </div>
        </form>
    )
}

export default EnquireForm