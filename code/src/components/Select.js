

export const Select = () => {
    const [location, setLocation] = useState("")
    values[0] = location
  
    // const handleSubmit = (evt) => {
    //   evt.preventDefault()
    //   alert(`Submitting Name ${name}`)
  
    return (
      // <form onSubmit={handleSubmit}>
      <label>
        My city:
        <select
          onChange={e => setLocation(e.target.value)}
          value={location}
  
  
        >
          <option value="">Select location</option>
          <option value="stockholm">Stockholm</option>
          <option value="oslo">Oslo</option>
          <option value="london">London</option>
        </select>
      </label>
      // <input type="submit" value="Submit" />
      // </form>
    )
  
  }

  export const Form = () => {
    const [done, setDone] = useState(false)
    const inputRef = useRef()
    // var hasName = (name === 'true') ? 'Y' :'N';
    const handleSubmit = (evt) => {
      evt.preventDefault()
      inputRef.current.className += " noShow"
      
      // alert(`Submitting Name ${values.toString()}`) 
      
    }
    return (
      <section>
        <form className="myForm" onSubmit={handleSubmit} ref={inputRef}>
          <h1>I love you</h1>
          < Text />
          <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
        </form>
        {done && <Radio />}
  
      </section>
  
    )
  
  }
  