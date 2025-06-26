document.querySelectorAll('#projects a').forEach(link => {
  link.addEventListener('click', () => {
    alert('You are opening a project link in GitHub.');
  });
});