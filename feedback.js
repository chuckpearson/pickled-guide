const feedbackDialog = document.querySelector('#feedback-dialog');
const feedbackStatus = feedbackDialog.querySelector('.feedback-status');
let feedbackTrigger;

// Keep the mailto fallback when dialog support or JavaScript is unavailable.
if (typeof feedbackDialog.showModal === 'function') {
  document.querySelectorAll('[data-feedback-open]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      feedbackTrigger = link;
      feedbackStatus.textContent = '';
      feedbackDialog.showModal();
    });
  });
}

feedbackDialog.querySelector('.dialog-close').addEventListener('click', () => feedbackDialog.close());
feedbackDialog.addEventListener('click', event => {
  const bounds = feedbackDialog.getBoundingClientRect();
  if (event.target === feedbackDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    feedbackDialog.close();
  }
});
feedbackDialog.addEventListener('close', () => feedbackTrigger?.focus());
document.querySelector('#copy-feedback-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('chuck@rareview.com');
    feedbackStatus.textContent = 'Email address copied.';
  } catch {
    feedbackStatus.textContent = 'Select and copy chuck@rareview.com above.';
  }
});
