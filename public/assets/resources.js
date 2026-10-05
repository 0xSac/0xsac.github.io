// Progressive enhancement for the pre-event field kit.
(function () {
  var grid = document.getElementById('resource-grid');
  if (!grid) return;

  var filters = document.getElementById('resource-filters');
  var sections = grid.querySelectorAll('[data-category]');
  var status = document.getElementById('resource-status');
  var actionStatus = document.getElementById('action-status');

  filters.hidden = false;
  filters.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-filter]');
    if (!button) return;
    var category = button.dataset.filter;
    var count = 0;
    sections.forEach(function (section) {
      section.hidden = category !== 'all' && section.dataset.category !== category;
      if (!section.hidden) count += section.querySelectorAll('article').length;
    });
    filters.querySelectorAll('button').forEach(function (pill) {
      pill.setAttribute('aria-pressed', String(pill === button));
    });
    status.textContent = count + ' resources // ' + button.textContent;
  });

  grid.querySelectorAll('pre').forEach(function (block) {
    var code = block.querySelector('code');
    var label = block.getAttribute('aria-label');
    var actions = document.createElement('div');
    actions.className = 'mt-2 flex flex-wrap gap-2';
    var copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'resource-action';
    copy.textContent = 'Copy';
    copy.setAttribute('aria-label', 'Copy ' + label);
    copy.addEventListener('click', async function () {
      actionStatus.textContent = '';
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent);
        actionStatus.textContent = 'Copied ' + label + '.';
      } catch (error) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        block.focus();
        actionStatus.textContent = 'Clipboard unavailable. Text selected; press Control+C or Command+C to copy, or use your device copy menu.';
      }
    });
    actions.appendChild(copy);

    if (block.dataset.download) {
      var download = document.createElement('button');
      download.type = 'button';
      download.className = 'resource-action';
      download.textContent = 'Download .txt';
      download.setAttribute('aria-label', 'Download ' + label);
      download.addEventListener('click', function () {
        var url = URL.createObjectURL(new Blob([code.textContent + '\n'], { type: 'text/plain;charset=utf-8' }));
        var link = document.createElement('a');
        link.href = url;
        link.download = block.dataset.download;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        actionStatus.textContent = 'Download requested for ' + label + '.';
      });
      actions.appendChild(download);
    }
    block.after(actions);
  });
})();
