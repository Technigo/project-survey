import React from "react"

import {
  RandomUserName,
  RandomGender,
  RandomWeather,
  RandomVehicle,
  RandomSpeed,
  RandomSnack,
  RandomNotFriendName,
  RandomBeverage,
  RandomFriendName,
  RandomSport,
  RandomIngredientOne,
  RandomIngredientTwo,
  RandomPhone,
} from "../RandomChoices"

const Summary = (props) => {
  const {
    userName,
    gender,
    weather,
    vehicle,
    speed,
    snack,
    notFriendName,
    beverage,
    friendName,
    likeSports,
    sport,
    ingredient,
    phone,
  } = props

  let userNameToUse = userName === "" ? RandomUserName() : userName
  let genderToUse = gender === "" ? RandomGender() : gender

  let characterTitle
  let characterName
  let pronounSubject
  let pronounSubjectCapitalized
  let pronounDirect
  let pronounReflexive
  let pronounPossessive

  if (genderToUse === "feminine") {
    characterTitle = "Mrs."
    characterName = "Sheis"
    pronounSubject = "she"
    pronounSubjectCapitalized = "She"
    pronounDirect = "her"
    pronounReflexive = "herself"
    pronounPossessive = "her"
  } else if (genderToUse === "masculine") {
    characterTitle = "Mr."
    characterName = "Heis"
    pronounSubject = "he"
    pronounSubjectCapitalized = "He"
    pronounDirect = "him"
    pronounReflexive = "himself"
    pronounPossessive = "his"
  } else {
    characterTitle = "Mx."
    characterName = "Theyare"
    pronounSubject = "they"
    pronounSubjectCapitalized = "They"
    pronounDirect = "them"
    pronounReflexive = "themself"
    pronounPossessive = "their"
  }

  let weatherToUse = weather === "" ? RandomWeather() : weather
  let vehicleToUse = vehicle === "" ? RandomVehicle() : vehicle
  let speedToUse = speed === "" ? RandomSpeed() : speed
  let snackToUse = snack === "" ? RandomSnack() : snack
  let notFriendNameToUse =
    notFriendName === "" ? RandomNotFriendName() : notFriendName
  let beverageToUse = beverage === "" ? RandomBeverage() : beverage
  let friendNameToUse = friendName === "" ? RandomFriendName() : friendName
  let sportToUse = sport === "" ? RandomSport() : sport
  let firstIngredientToUse =
    ingredient.length === 2 ? ingredient[0] : RandomIngredientOne()
  let secondIngredientToUse =
    ingredient.length === 2 ? ingredient[1] : RandomIngredientTwo()
  let phoneToUse = phone === "" ? RandomPhone() : phone

  const speedWordToUse = () => {
    if (speedToUse === 1) {
      return "quiet"
    } else if (speedToUse === 3) {
      return "fast"
    } else {
      return "normal"
    }
  }

  console.log(speedWordToUse())

  return (
    <>
      <div className="form">
        <section className="text-summary">
          {/* <h1>Summary</h1>
          <p>User name: {userNameToUse}</p>
          <p>
            Gender: {genderToUse} - text: {characterTitle} {characterName}{" "}
            Theone. {pronounSubjectCapitalized}{" "}
            {genderToUse === "non-binary" ? "are" : "is"} {pronounReflexive} and
            who {pronounSubject} {genderToUse === "non-binary" ? "are" : "is"},
            I know {pronounDirect} and {pronounPossessive} name!
          </p>
          <p>Weather: {weatherToUse}</p>
          <p>Vehicle: {vehicleToUse}</p>
          <p>Speed: {speedWordToUse()}</p>
          <p>Snack: {snackToUse}</p>
          <p>Not friend name: {notFriendNameToUse}</p>
          <p>Beverage: {beverageToUse}</p>
          <p>Friend name: {friendNameToUse}</p>
          <p>Like sports: {likeSports ? `yes ${friendNameToUse}` : `no ${friendNameToUse}`}</p>
          <p>Sport: {sportToUse}</p>
          <p>Brand of mobile phone: {phoneToUse}</p>
          <p>
            I really {!likeSports ? "don't " : ""}like sports. I eat my{" "}
            {firstIngredientToUse} and {secondIngredientToUse} sandwich.
          </p> */}
          <div>
          <h1>Just like that</h1>

          <div>On this <mark>{weatherToUse}</mark> morning, <mark>{characterTitle}</mark> Theone <mark>{genderToUse === "non-binary" ? "ride" : "rides"} {pronounPossessive} {vehicleToUse}</mark> to work. As every morning, <mark>{pronounSubject} {genderToUse === "non-binary" ? "take" : "takes"}</mark> St. Henry then <mark>{genderToUse === "non-binary" ? "turn" : "turns"}</mark> on St. George to follow the river for some kilometres at a <mark>{speedWordToUse()}</mark> pace. Doing so, as every morning, <mark>{pronounSubject} {genderToUse === "non-binary" ? "eat" : "eats"}</mark> some <mark>{snackToUse}</mark>, before throwing the packaging behind <mark>{pronounDirect}</mark> on the road. <mark>{pronounSubjectCapitalized} {genderToUse === "non-binary" ? "arrive" : "arrives"}</mark> in front of the skyscraper where <mark>{pronounPossessive}</mark> office is located, <mark>{genderToUse === "non-binary" ? "lock" : "locks"} {pronounPossessive} {vehicleToUse}</mark> and <mark>{genderToUse === "non-binary" ? "enter" : "enters"}</mark>.<p></p>
“Hello <mark>{notFriendNameToUse}</mark>, how are you?” <mark>{genderToUse === "non-binary" ? "say" : "says"}</mark> Theone. <p></p>
“As usual, <mark>{characterName}</mark>, what about you?” answers the door attendant. <p></p>
“Ready for another day at work, but please open the door for me!” <mark>{genderToUse === "non-binary" ? "exclaim" : "exclaims"} {characterTitle}</mark> Theone. <p></p>
<p></p>
<i>A tanker truck goes forward on St. George. Traffic is dense, but fluid. A mother crosses the street, a pram in hand and a baby in her arms. She waves her arms suddenly, seeming to lose her balance as if she was slipping, to finally fall heavily on her back, the baby still safe in her arms. The pram continues its race with the mother lying in the middle of the street, the driver of the truck trying to somehow avoid these two obstacles. He ends up hitting traffic lights post.</i>
<p></p>
<mark>{characterTitle}</mark> Theone <mark>{genderToUse === "non-binary" ? "take" : "takes"}</mark> the stairs, <mark>{genderToUse === "non-binary" ? "arrive" : "arrives"}</mark> on the third floor and <mark>{genderToUse === "non-binary" ? "go" : "goes"}</mark> to <mark>{pronounPossessive}</mark> desk, not without grabbing a cup of lukewarm <mark>{beverageToUse}</mark>, passing by the small kitchen. <p></p>
“<mark>{friendNameToUse}</mark>, once again you disconnected the <mark>{beverageToUse === 'coffee' ? 'coffee maker' : 'teapot'}</mark> by mistake!” <mark>{genderToUse === "non-binary" ? "say" : "says"} {characterTitle}</mark> Theone to a colleague. <p></p>
<mark>{pronounSubjectCapitalized} {genderToUse === "non-binary" ? "immerse" : "immerses"} {pronounReflexive}</mark> immediately in a file. <mark>{pronounSubjectCapitalized}</mark> will certainly need some time before moving on to the next. <p></p>
<p></p>
<i>The truck is gutted. Its cargo spreads fast on the street. The driver is surprisingly unscathed. He calls the authorities before contacting his employer. He must warn them quickly that there is a risk of spilling into the river beside the street, because anti-pollution laws are very strict.</i>
<p></p>
{likeSports ? `The morning continues for ${characterTitle} Theone, ${pronounSubject} ${genderToUse === "non-binary" ? "move" : "moves"} on to another file, as planned. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "like" : "likes"} to know what to expect every moment of ${pronounPossessive} day, without drama or unforeseen. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "pour" : "pours"} ${pronounReflexive} another cup of ${beverageToUse}, very hot this time. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "take" : "takes"} the opportunity to discuss yesterday’s game with ${pronounPossessive} colleagues. <br>
“Hey, it was a good game last night, the players really gave it all! I’m not surprised, they have the best ${sportToUse} team,” ${genderToUse === "non-binary" ? "say" : "says"} ${characterTitle} Theone.
“It seems to me that #12 was a better player than usual,” says ${userNameToUse}, ${pronounPossessive} boss.
“Oh no, #12 has always been that way,” ${genderToUse === "non-binary" ? "retort" : "retorts"} ${characterTitle} Theone, before returning to ${pronounPossessive} office like a good little working soldier. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "like" : "likes"} ${pronounPossessive} routine life that nothing disturbs.` : `The morning continues for ${characterTitle} Theone, ${pronounSubject} ${genderToUse === "non-binary" ? "move" : "moves"} on to another file, as planned. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "like" : "likes"} to know what to expect every moment of ${pronounPossessive} day, without drama or unforeseen. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "pour" : "pours"} ${pronounReflexive} another cup of ${beverageToUse}, very hot this time. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "take" : "takes"} the opportunity to discuss today’s weather with ${userNameToUse}, ${pronounPossessive} boss.
“Hey, it was quite chilly this morning when I was riding my ${vehicleToUse}, under this ${weatherToUse} sky,” ${genderToUse === "non-binary" ? "say" : "says"} ${characterTitle} Theone.
“Nah, it was nicely warm in my car,” says ${userNameToUse}.
“Even if I would like to feel some warm, I like using my ${vehicleToUse},” ${genderToUse === "non-binary" ? "retort" : "retorts"} ${characterTitle} Theone, before returning to ${pronounPossessive} office like a good little working soldier. ${pronounSubjectCapitalized} ${genderToUse === "non-binary" ? "like" : "likes"} ${pronounPossessive} routine life that nothing disturbs.`}
<p></p>
<i>Authorities and the media are on site. The cargo began to pour heavily into the river by the roadside. Given the nature of the cargo, Department of the Environment officials must now assess the extent of damage to the aquatic environment. According to the data they have, the situation would be disastrous.</i><p></p>
<p></p>
Lunch time has arrived, {characterTitle} Theone {genderToUse === "non-binary" ? "are" : "is"} eager to eat {pronounPossessive} usual {firstIngredientToUse} and {secondIngredientToUse} sandwich. But before, {pronounSubject} {genderToUse === "non-binary" ? "catch" : "catches"} {friendNameToUse} by the arm. <p></p>
“Come with me on the balcony, for a cigarette!” {genderToUse === "non-binary" ? "insist" : "insists"} {characterTitle} Theone. <p></p>
“Just one, I’m trying to quit,” answers {friendNameToUse}.<p></p>
{friendNameToUse} follows {pronounDirect}, {phoneToUse === 'other' ? 'mobile phone': phoneToUse} in hand, to share the latest news with {characterTitle} Theone while smoking. <p></p>
“Oh no, stop with your news!” {genderToUse === "non-binary" ? "say" : "says"} {characterTitle} Theone. <p></p>
“But it’s important to know what’s going on around us, {characterName}!” says {friendNameToUse}. “You see, this one will surely catch your attention!” <p></p>
{characterTitle} Theone {genderToUse === "non-binary" ? "look" : "looks"} at the screen: <i>Following an accident with an unknown cause, toxic products were dumped into the river, bringing the authorities to declare the closure of the beach below for the summer. In addition, the representatives of the Department of the Environment warn the population not to consume the fish from the river and not to drink tap water until further notice.</i><p></p>
<p></p>
Troubled, {characterName} Theone {genderToUse === "non-binary" ? "throw" : "throws"} {pronounPossessive} still burning cigarette from the balcony. <p></p>
Just like that.

</div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Summary
