import React, { useState } from 'react'

import { Header } from './Header'
import { FirstQuestion } from './FirstQuestion'
import { Question2 } from './Question2'
import { Question3 } from './Question3'
import { Question4 } from './Question4'
import { Question5 } from './Question5'
import { Summary } from './Summary'

export const Form = () => {
    const [name, setName] = useState('');
    const [gift, setGift] = useState('');
    const [descriptions, setDescription] = useState([]);
    const [userName, setUserName] = useState('');
    const [caption, setCaption] = useState('');
    const [hideForm, setHideForm] = useState()

    const handlerNameChange = newName => {
        setName(newName);
    }

    const handlerGiftChange = newGift => {
        setGift(newGift);
    }

    const handlerDescriptionChange = newDescription => {
        descriptions.includes(newDescription)
             ? setDescription( descriptions.filter(item => item !== newDescription))
             : setDescription( [...descriptions, newDescription] );   
    }

    const handlerUserNameChange = newUserName => {
        setUserName(newUserName);
    }

    const handlerCaptionChange = newCaption => {
        setCaption(newCaption);
    }

    const onSubmit = event => {
        setHideForm(true);
    }

    console.log(descriptions)

    if (hideForm === true){
        return (
            <Summary 
                name={name}
                descriptions={descriptions}
                gift={gift}
                cheesyCaption={caption}
                userName={userName}
            />
        )
    }

    return (
        <form onSubmit={onSubmit}>
            {!hideForm && (
                <>
                    <Header />

                    <FirstQuestion 
                        name={name} 
                        setName={setName} 
                        onNameChange={handlerNameChange}
                    />

                    <Question2
                        name={name}
                        descriptions={descriptions}
                        setDescription={setDescription}
                        onDescriptionChange={handlerDescriptionChange}
                    />

                    <Question3 
                        gift={gift} 
                        setGift={setGift} 
                        onGiftChange={handlerGiftChange}
                    />

                    <Question5 
                        cheesyCaption={caption}
                        onCaptionChange={handlerCaptionChange}
                    />
                
                    <Question4 
                        userName={userName} 
                        setUserName={setUserName} 
                        onUserNameChange={handlerUserNameChange}
                    />
                
                    <input
                        type="submit"
                        value="Send"
                    />

                    <p className="credit">Illustration by Freepik</p>
                </>
            )}
        </form>  
    )
}
