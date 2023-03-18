import React from 'react'

export const Reward = ({ reward, setReward }) => {
  const handleRewardChange = (event) => {
    setReward(event.target.value);
  }

  return (
    <form>
      <div className="rewardComponent">
        <h2>What reward would you like for <br /> surviving another day of coding?</h2>

        <select
          onChange={handleRewardChange}
          className="selectDropDown"
          aria-label="Select reward"
          tabIndex="0"
          value={reward}>
          <option value="">Select Reward 👇</option>
          <option value="An 404 Error cake">🍰 An 404 Error cake: Celebrate a hard day of work with a cake that is designed to look like a 404 error message.</option>
          <option value="A Debugging Guru trophy">🏆 A Debugging Guru trophy: Recognize your coding skills and reward yourself with a trophy that celebrates your debugging skills.</option>
          <option value="A Ramen Feast dinner">🍜 A Ramen Feast dinner: Reward yourself with a delicious ramen feast, complete with all the toppings you love.</option>
          <option value="Nerf Gun War Break">🔫 Nerf Gun War Break: Take a break and blow off some steam with a friendly nerf gun war with your coworkers or friends.</option>
        </select>
      </div>
    </form>
  )
}