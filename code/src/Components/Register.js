

const Register = ({ newEmail, setNewEmail,register, setRegister }) => {

    return ( 
        <div className="register">
            <form>
                <div className="input">
                    <label htmlFor="">Name</label>
                    <input type="text" 
                    required
                    value={ register }
                    onChange={(e)=>setRegister(e.target.value)}/>

                    <label>Email</label>
                    <input type="text" 
                    required
                    value={ newEmail }
                    onChange={(e)=>setNewEmail(e.target.value)}/>
                </div>
            </form>
        </div>
     );
}
 
export default Register;