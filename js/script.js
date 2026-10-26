'use strict';
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('site-nav');
const mobileQuery = window.matchMedia('(max-width: 760px)');
document.documentElement.classList.add('has-js');
function setMenu(open, returnFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  if (returnFocus) menuButton.focus();
}
function syncMenu() {
  menuButton.hidden = !mobileQuery.matches;
  setMenu(false);
}
syncMenu();
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !mobileQuery.matches) return;
  setMenu(false);
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileQuery.matches && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
document.addEventListener('click', event => {
  if (mobileQuery.matches && !event.target.closest('.site-header')) setMenu(false);
});
mobileQuery.addEventListener('change', syncMenu);
const copyButton = document.getElementById('copy-phone');
const copyStatus = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
const phoneInput = document.getElementById('phone-value');
document.getElementById('year').textContent = new Date().getFullYear();
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  copyButton.disabled = true;
  copyStatus.textContent = 'Copiando teléfono…';
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    let timeout;
    try {
      await Promise.race([
        navigator.clipboard.writeText('633 868 221'),
        new Promise((resolve, reject) => { timeout = setTimeout(() => reject(new Error('Clipboard timeout')), 1500); })
      ]);
    } finally { clearTimeout(timeout); }
    copyStatus.textContent = 'Teléfono copiado: 633 868 221';
    manualCopy.hidden = true;
  } catch {
    manualCopy.hidden = false;
    phoneInput.focus();
    phoneInput.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Keep manual selection available. */ }
    if (copied) {
      manualCopy.hidden = true;
      copyButton.focus();
      copyStatus.textContent = 'Teléfono copiado: 633 868 221';
    } else {
      copyStatus.textContent = 'Selecciona el número y cópialo desde el teclado o el menú de tu dispositivo.';
    }
  } finally { copyButton.disabled = false; }
});
