export const filterContructor = (questionArray, answerArray) => {
  let filter = ""

  answerArray.forEach(element => {
    if (element.questionId === 0 && element.answer === "yes") {
      const Filtering = filter.concat("health=vegan&")
      filter = Filtering
    } else if (element.questionId === 0 && element.answer === "no") {
      const Filtering = filter.concat("")
      filter = Filtering
    }
    else {
      const Filtering = filter.concat(
        `${questionArray[element.questionId].filter}=${element.answer}&`)
      filter = Filtering
    }
  });
  return filter.slice(0, -1)
}