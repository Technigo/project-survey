


<section>
  <p>What time do you want to eat Christmas dinner?</p>
  <label>
    <input
      type="radio"
      value="13"
      onChange={event => setTime(event.target.value)}
      checked={time === "13"}
    />
    about 13
          </label>

  <label>
    <input
      type="radio"
      value="16"
      onChange={event => setTime(event.target.value)}
      checked={time === "16"}
    />
    about 16
          </label>
</section>