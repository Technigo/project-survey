export const Better = ({ better, setBetter }) => {
    const handleBetterChange = (event) => {
      setBetter(event.target.value);
    }
    return (
  
  <label for="better">
    <p>What can we we do better</p>
    <input type="text" placeholder='write here' value={better} onChange={handleBetterChange} />
</label>
    
    );
  }