export const getWord = (event) => {
  event.target.classList.add('hidden');
  event.target.nextElementSibling.classList.remove('hidden');
};
