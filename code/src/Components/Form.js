import React, { useState } from 'react'
import { PersonalInfo } from './PersonalInfo';
import { SignUpInfo } from './SignUpInfo';
import { OtherInfo }  from './OtherInfo';
import { Review } from './Review';

export const Form = ({showModal, setShowModal}) => {

    const [page, setPage] = useState(0);
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        destination: "", //radio
        lastName: "", //radio
        username: "", //radio
        nationality: "",
        other: "",
    });

    const FormTitles = ["Who are you?", "Preferred destination?", "Other", "Review"]

    const PageDisplay = () => {
        if(page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <Review formData={formData} setFormData={setFormData} />;
        }
    }

    return (
        <>

        {showModal? ( <div className="form" showModal={showModal}>
            <div className="progressbar">
                <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div> 
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                <closeModalButton className="x"
                onClick={() => setShowModal (prev => !prev)}
                />
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button disabled = {page == 0} onClick={() => {setPage((currPage) => currPage - 1)}}>Prev</button>
                    <button
                     onClick={() => {
                         if(page === FormTitles.length -1){
                            alert("FORM SUBMITTED")
                            console.log(formData);
                         } else{
                            setPage((currPage) => currPage + 1);
                         }
   
                    }}
                    >
                    {page === FormTitles.length -1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div> 
        ) :null}

        </>
    );
}