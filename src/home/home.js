const container = document.getElementById('container');

// eslint-disable-next-line no-undef
toggle = () => {
  container.classList.toggle('sign-in');
  container.classList.toggle('sign-up');
};

setTimeout(() => {
  container.classList.add('sign-in');
}, 200);
