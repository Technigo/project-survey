const SignInMember = ({ userEmail, setUserEmail, passcode, setPasscode}) => {

    return ( 
       <>
        <form>
            <input 
                type="text" 
                required
                placeholder="Email"
                value={userEmail}
                onChange={(e)=>setUserEmail(e.target.value)}
            />
            
            <input 
                type="password" 
                required
                placeholder="Passcode"
                value={passcode}
                onChange={(e)=>setPasscode(e.target.value)}
            />
        </form>
        <p className="newbie-guide">Not a member yet 😉? Click continue to book a trial</p>

       </> 
        
     );
}
 
export default SignInMember;