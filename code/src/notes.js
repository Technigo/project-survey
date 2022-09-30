/* {question === 1 && <Input />}
      <section className="main">
        <Select />
        <Checkbox />
        <Radio />
      </section>
      <Footer />*/

      /* Class for Select:

      <section className="main">
          <Select location={specialGroup} setLocation={setSpecialGroup} />
          <button className="ok-btn" type="button" onClick={handleNextButton}>Next</button>
        </section>

        {() => setHabitCount(habitCount + 1)}
        const [habitCount, setHabitCount] = useState(0);
      
      const [habit1, setHabit1] = useState(false);
      const [habit2, setHabit2] = useState(false);
      const [habit3, setHabit3] = useState(false);

      FOR THE # DIFFERENT QUESTIONS: 
       <div>
        <label>
          Moderate to high intensity cardio at least 2.5 hours a week?
          <input
            type="checkbox"
            checked={habit1}
            onChange={(event) => setHabit1(event.target.checked)} />
          {console.log('HABITS:', habits)}
        </label>
      </div>
      <div>
        <label>
          Strength train at least 2 days a week?
          <input
            type="checkbox"
            checked={habit2}
            onChange={(event) => setHabit2(event.target.checked)} />
        </label>
      </div>
      <div>
        <label>
          Sit on your ass all day?
          <input
            type="checkbox"
            checked={habit3}
            onChange={(event) => setHabit3(event.target.checked)} />
        </label>
      </div>

      FOR MAP: 

      {questions.map((question, index) => {
          return (
            <div>
              <label key={question}>
                {question}
                <input
                  type="checkbox"
                  checked={habit+{index}}
                  onChange={(event) => setHabit1(event.target.checked)} />
              </label>
            </div>)

            {console.log(questions[index])}
                {console.log(habits[index])}

                   <img className="welcome-image" src={require('images/watch.jpg')} alt="heart rate monitor on an arm" />
        */