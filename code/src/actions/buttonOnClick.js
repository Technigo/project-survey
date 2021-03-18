export const getWord = (event) => {
  event.target.classList.add('hidden');
  event.target.nextElementSibling.classList.remove('hidden');
  document.querySelector('.input').focus();
};

export const checkValid = (id) => {
  const form = document.getElementById(id);
  return form.checkValidity();
};
