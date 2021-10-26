import emailjs from 'emailjs-com'
import React from 'react'

const EmailForm = () => {

 const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm('service_ox3a7js', 'confession_room_template', e.target, 'user_ZAAkZDO5mMgnzCLiV5Fga')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
                <form onSubmit={sendEmail}>
                    <div>
                        <input type="text" className="formControl" placeholder="Name" name="name" />
                    </div>
                    <div>
                        <input type="radio" className="formControl" value="yes" name="anonymous" />
                        <span>I want to be anonymous</span>
                    </div>
                    <div>
                        <textarea className="formControl" id="" cols="60" rows="8" placeholder="Copy + paste you confession from above..." name="confession">
                           
                        </textarea>
                    </div>
                    <div>
                        <input type="submit" className="btn" value="Send Message"></input>
                    </div>
                </form>
    )
}

export default EmailForm