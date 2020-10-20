import React, { useState } from 'react'
import { Submit } from 'Submit'
import { Dropdown } from './Dropdown'
import { Radio } from './Radio'
import { Text } from './Text'
import { Checkbox } from './Checkbox'
import { Summary } from './Summary'

export const Survey = () => {
    const [ageGroup, setAgegroup] = useState();
    const [checkboxOne, setCheckboxOne] = useState(false); /* Needs to be specified to either true or false to be controlled from the start */
    const [celebrationDrink, setCelebrationDrink] = useState()
    const [rainyFood, setRainyFood] = useState()
    const [restaurantHunt, setRestaurantHunt] = useState()
    const [saladMaker, setSaladMaker] = useState()
    const [showSummary, setShowSummary] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true);
    }
    return (
        <>
            {!showSummary ? (
                <form onSubmit={handleSubmit}>
                    <Dropdown
                        selectValue={celebrationDrink}
                        setSelectValue={setCelebrationDrink}
                        question={'It is friday night, you just finished a great project and want to celebrate. What are you ordering?'}
                        zero={'Choose your poison:'}
                        one={'Something sparkly'}
                        two={'Beer'}
                        three={'Wine'}
                        four={'Non-alchoholic fancy cocktail'}
                        five={'TEQUILA BABY'}
                    />
                    <Dropdown
                        selectValue={rainyFood}
                        setSelectValue={setRainyFood}
                        question={'On a rainy day, what would you rather have?'}
                        zero={'Choose your comfortfood:'}
                        one={'Hot, steamy ramen'}
                        two={'Freshly baked bread with loads of butter'}
                        three={'Icecream, rain or shine is Icecream-time'}
                        four={'Big freaking bowl of pasta'}
                        five={'Just a salad please.'}
                    />
                    <Dropdown
                        selectValue={restaurantHunt}
                        setSelectValue={setRestaurantHunt}
                        question={'What is your process of choosing a restaurant?'}
                        zero={'Choose your method:'}
                        one={'Tons of research, google and interviews with previous visitors'}
                        two={'I just go to the nearest joint around the corner'}
                        three={'Does it have roaches? No? Then I am good to go'}
                        four={'Guide Michelin all day baby'}
                        five={'Anything where you can order macrobiotic, nonprocessed and prefereably raw food please'}
                    />
                    <Dropdown
                        selectValue={saladMaker}
                        setSelectValue={setSaladMaker}
                        question={'You are making a salad. What is the main ingrediens?'}
                        zero={'Choose your veggie:'}
                        one={'Avocado'}
                        two={'Loads of tomato'}
                        three={'Cheese and meat. Cows eat green, that counts right?'}
                        four={'Broccoli'}
                        five={'Some fruits are always nice.'}
                    />
                    <Radio
                        agegroup={ageGroup}
                        setAgegroup={setAgegroup}
                        question={'Thanks for doing this survey! Please check your agegroup:'}
                        name={'age'}
                        valueOne={'20'}
                        valueTwo={'60'}
                        valueThree={'100'}
                        messageOne={'0-20 (Teeny tiny baby)'}
                        messageTwo={'21-60 (Prime years baby)'}
                        messageThree={'61-100 (I think.. or am I older?)'}
                    />
                    <Checkbox
                        checkboxOne={checkboxOne}
                        setCheckboxOne={setCheckboxOne}
                        question={'Would you take this survey again?'}
                        one={'Yes, most definately'}
                    />
                    <Text />
                    <Submit />
                </form>
            ) : (
                    <Summary 
                    drink={celebrationDrink}
                    rainyFood={rainyFood}
                    restMethod={restaurantHunt}
                    veggie={saladMaker}
                    age={ageGroup}
                    surveyAgain={checkboxOne}
                    />
                )}
        </>
    )
}