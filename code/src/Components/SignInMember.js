const SignInMember = ({ userEmail, setUserEmail, passcode, setPasscode}) => {

    return ( 
       <div className="memberSignIn">
        <form>
            <label>Email:</label>
            <input 
                type="text" 
                required
                value={userEmail}
                onChange={(e)=>setUserEmail(e.target.value)}
            />
            <label htmlFor="">Passcode:</label>
            <input 
                type="password" 
                required
                value={passcode}
                onChange={(e)=>setPasscode(e.target.value)}
            />
        </form>
        

        <p className="newbie-guide">Not a member yet 😉? Click continue to book a trial</p>
       </div> 
        
     );
}
 
export default SignInMember;