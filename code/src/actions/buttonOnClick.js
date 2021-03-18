export const getWord = (event) => {
  event.target.classList.add('hidden');
  event.target.nextElementSibling.classList.remove('hidden');
};

export const checkValid = (id) => {
  const form = document.getElementById(id);
  // if (form.checkValidity()) {
  //   alert('The form is ok\nNo GUI hints then');
  // } else {
  //   alert('The form contains errors\nThe GUI hints will follows');
  // }
  return form.checkValidity();
};
