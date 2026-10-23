const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let position = 0;

function showSecret() {
  if (document.querySelector('.konami')) return;
  const overlay = document.createElement('div');
  overlay.className = 'konami';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Code secret');
  overlay.innerHTML = '<img src="/uno-raccourcis.png" alt="Carte UNO : « Connaître ET appliquer tous les raccourcis, ou piocher 25 » — il pioche 25." />';
  const close = () => { overlay.remove(); document.removeEventListener('keydown', onEscape); };
  const onEscape = (event) => { if (event.key === 'Escape') close(); };
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', onEscape);
  document.body.append(overlay);
}

document.addEventListener('keydown', (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  position = key === sequence[position] ? position + 1 : (key === sequence[0] ? 1 : 0);
  if (position === sequence.length) {
    position = 0;
    showSecret();
  }
});
