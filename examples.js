(() => {
  const cards = document.querySelector('#flashcardsSection');
  const examples = document.querySelector('#examplesSection');
  const cardsButton = document.querySelector('#showFlashcards');
  const examplesButton = document.querySelector('#showExamples');
  const filters = document.querySelector('#seminarFilters');
  const list = document.querySelector('#exampleList');
  const search = document.querySelector('#exampleSearch');
  const count = document.querySelector('#examplesCount');
  let selectedSeminar = 0;

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('cs');

  function exampleCard(example) {
    const article = element('article', 'worked-example');
    article.id = `example-${example.id}`;
    const meta = element('div', 'example-meta');
    meta.append(element('span', 'pill', `${example.seminar}. seminář · ${FC_SEMINARS[example.seminar - 1]}`));
    meta.append(element('span', 'example-kind', example.kind));
    const title = element('h3', '', example.title);
    title.id = `${article.id}-title`;
    article.setAttribute('aria-labelledby', title.id);
    article.append(meta, title, element('p', 'example-task', example.task));
    const given = element('ul', 'example-given');
    example.given.forEach(text => given.append(element('li', '', text)));
    article.append(given);
    const formulas = element('div', 'example-formulas');
    formulas.append(element('h4', '', 'Vzorce'));
    example.formulas.forEach(text => formulas.append(element('p', '', text)));
    article.append(formulas, element('p', 'example-legend', example.legend));
    const solution = element('details', 'example-solution');
    const toggle = element('summary');
    toggle.append(element('span', 'solution-show', 'Ukázat řešení krok za krokem'));
    toggle.append(element('span', 'solution-hide', 'Skrýt řešení'));
    const steps = element('ol', 'example-steps');
    example.steps.forEach(text => steps.append(element('li', '', text)));
    solution.append(toggle, steps, element('p', 'example-result', example.result));
    const lesson = element('p', 'example-lesson');
    lesson.append(element('strong', '', 'Na co si dát pozor: '), document.createTextNode(example.lesson));
    solution.append(lesson);
    article.append(solution, element('p', 'example-source', `Zdroj: ${example.source}`));
    return article;
  }

  function renderExamples() {
    const query = normalize(search.value.trim());
    const matches = FC_EXAMPLES.filter(example =>
      (!selectedSeminar || example.seminar === selectedSeminar) &&
      (!query || normalize([example.title, example.task, ...example.given, ...example.formulas, example.legend, FC_SEMINARS[example.seminar - 1]].join(' ')).includes(query))
    );
    list.replaceChildren(...matches.map(exampleCard));
    count.textContent = `Zobrazeno ${matches.length} z ${FC_EXAMPLES.length} příkladů`;
    document.querySelector('#examplesEmpty').hidden = matches.length > 0;
    [...filters.children].forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.seminar) === selectedSeminar));
    });
  }

  ['Všechny semináře', ...FC_SEMINARS.map((name, i) => `${i + 1}. ${name}`)].forEach((label, i) => {
    const button = element('button', '', label);
    button.type = 'button';
    button.dataset.seminar = i;
    button.setAttribute('aria-controls', 'exampleList');
    button.onclick = () => { selectedSeminar = i; renderExamples(); };
    filters.append(button);
  });
  search.addEventListener('input', renderExamples);

  function showExamples(show) {
    if (cards.hidden === show) return;
    // Switching away ends the current exam so a hidden timer cannot keep running.
    if (show) {
      clearInterval(timer);
      document.querySelector('#exam').style.display = 'none';
    } else {
      render();
    }
    cards.hidden = show;
    examples.hidden = !show;
    cardsButton.setAttribute('aria-pressed', String(!show));
    examplesButton.setAttribute('aria-pressed', String(show));
    document.querySelector('#totalCount').textContent = show ? `${FC_EXAMPLES.length} PŘÍKLADŮ` : `${data.length} KARTIČEK`;
  }
  cardsButton.onclick = () => showExamples(false);
  examplesButton.onclick = () => showExamples(true);
  renderExamples();
})();
