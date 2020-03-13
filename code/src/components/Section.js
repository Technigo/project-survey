

export const ChangeSection = (page) => {
  if (page === 'firstPage') {
    page = 'secondPage'
  }
  else {
    page = 'firstPage'
  }
  return page
}

const Function = () => {
  const variable = 'firstPage'
  return variable
}

const Function2 = () => {
  const variable = 'secondPage'
  return variable
}