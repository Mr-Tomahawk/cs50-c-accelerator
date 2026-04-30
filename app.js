const state = {
  currentWeek: "week1",
  cardIndex: 0,
  cardRevealed: false
};

const course = window.CS50C.course;
const accelerator = window.CS50C.accelerator;
const syntaxBlocks = window.CS50C.syntaxBlocks;
const practices = window.CS50C.practices;
const drills = window.CS50C.drills;
const cards = window.CS50C.trainerCards;

function renderWeekTabs() {
  const tabs = document.querySelector("#weekTabs");
  const buttons = accelerator.map(week => ({ id: week.id, label: week.title.replace(": ", " ") }));

  tabs.innerHTML = buttons
    .map(
      button => `
        <button class="tab ${button.id === state.currentWeek ? "active" : ""}" data-week="${button.id}" type="button">
          ${button.label}
        </button>
      `
    )
    .join("");

  tabs.onclick = event => {
    const target = event.target.closest("[data-week]");
    if (!target) {
      return;
    }
    state.currentWeek = target.dataset.week;
    renderAll();
  };
}

function getVisibleWeeks() {
  return course.filter(week => week.id === state.currentWeek);
}

function renderWorkspace() {
  const workspace = document.querySelector("#weekWorkspace");
  const week = accelerator.find(item => item.id === state.currentWeek) || accelerator[0];
  workspace.innerHTML = `
    <article class="course-week">
      <div class="course-week-hero">
        <p class="eyebrow">${week.title}</p>
        <h3>${week.mission}</h3>
        <div class="course-sequence">
          <span>1. Read</span>
          <span>2. Predict</span>
          <span>3. Type</span>
          <span>4. Test</span>
          <span>5. Pset</span>
        </div>
      </div>
      <div class="course-section-list">
        ${week.sections.map((section, index) => renderCourseSection(section, index)).join("")}
      </div>
    </article>
  `;
}

function renderCourseSection(section, index) {
  return `
    <section class="course-section">
      <div class="section-number">${index + 1}</div>
      <div class="course-section-body">
        <p class="eyebrow">${section.kind}</p>
        <h4>${section.title}</h4>
        ${renderTranscriptBasis(section.transcriptBasis)}
        ${section.body.map(paragraph => `<p>${formatInline(paragraph)}</p>`).join("")}
        ${renderGoalPreview(section.goalPreview)}
        ${renderAssignmentList(section.assignmentItems)}
        ${renderCodeNote(section.codeNote)}
        ${renderCodeBlock(section.code)}
        ${renderWalkthrough(section.walkthrough)}
        <div class="embedded-work">
          <article>
            <strong>Check yourself</strong>
            <p class="microcopy">Try answering first, then reveal the explanation. These are not tests; they are part of the lesson.</p>
            <ol>${section.checks.map(item => renderCheck(item)).join("")}</ol>
          </article>
          <article>
            <strong>Do now</strong>
            <ol>${section.exercises.map(item => `<li>${formatInline(item)}</li>`).join("")}</ol>
          </article>
        </div>
        ${renderSources(section.sources)}
      </div>
    </section>
  `;
}

function renderTranscriptBasis(items) {
  if (!items?.length) {
    return "";
  }
  return `
    <details class="transcript-basis">
      <summary>Evidence</summary>
      <ul>${items.map(item => `<li>${formatInline(item)}</li>`).join("")}</ul>
    </details>
  `;
}

function renderWalkthrough(walkthrough) {
  if (!walkthrough?.length) {
    return "";
  }
  return `
    <div class="code-walkthrough">
      <strong>Code walkthrough</strong>
      <ol>${walkthrough.map(item => `<li>${formatInline(item)}</li>`).join("")}</ol>
    </div>
  `;
}

function renderAssignmentList(items) {
  if (!items?.length) {
    return "";
  }
  return `
    <div class="assignment-list">
      ${items
        .map(
          item => `
            <article>
              <div class="assignment-meta">${formatInline(item.type)}</div>
              <h5><a href="${escapeHtml(item.href)}">${formatInline(item.title)}</a></h5>
              <p>${formatInline(item.goal)}</p>
              <p><strong>Do:</strong> ${formatInline(item.action)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGoalPreview(preview) {
  if (!preview) {
    return "";
  }
  return `
    <div class="goal-preview">
      <div>
        <p class="eyebrow">Goal Preview</p>
        <h5>${formatInline(preview.title)}</h5>
        <p>${formatInline(preview.caption)}</p>
      </div>
      <pre><code>${escapeHtml(preview.art)}</code></pre>
    </div>
  `;
}

function renderCodeBlock(code) {
  if (!code) {
    return "";
  }
  return `<pre><code>${escapeHtml(code)}</code></pre>`;
}

function renderCodeNote(note) {
  if (!note) {
    return "";
  }
  return `<p class="code-note">${formatInline(note)}</p>`;
}

function renderSources(sources) {
  if (!sources?.length) {
    return "";
  }
  return `
    <details class="source-trail">
      <summary>Sources</summary>
      <ul>
        ${sources
          .map(source => `<li><a href="${escapeHtml(source.href)}">${formatInline(source.label)}</a></li>`)
          .join("")}
      </ul>
    </details>
  `;
}

function renderCheck(item) {
  if (typeof item === "string") {
    return `<li>${formatInline(item)}</li>`;
  }
  return `
    <li>
      <span>${formatInline(item.question)}</span>
      <details>
        <summary>Reveal answer</summary>
        <p>${formatInline(item.answer)}</p>
      </details>
    </li>
  `;
}

function renderCourse() {
  const grid = document.querySelector("#moduleGrid");
  grid.innerHTML = getVisibleWeeks()
    .map(
      week => `
        <article class="week-card" id="${week.id}">
          <div class="week-card-header">
            <p class="eyebrow">${week.shortTitle}</p>
            <h3>${week.title}</h3>
            <p>${formatInline(week.summary)}</p>
          </div>
          <div class="week-columns">
            <section>
              <strong>Core concepts</strong>
              <ul>${week.concepts.map(item => `<li>${formatInline(item)}</li>`).join("")}</ul>
            </section>
            <section>
              <strong>Memorize</strong>
              <ul>${week.memorize.map(item => `<li>${formatInline(item)}</li>`).join("")}</ul>
            </section>
          </div>
          <div class="lesson-list">
            ${week.lessons
              .map(
                lesson => `
                  <article class="lesson-card">
                    <h4>${lesson.title}</h4>
                    <p>${formatInline(lesson.explain)}</p>
                    <div class="tag-row">${lesson.tags.map(tag => `<span class="tag">${formatInline(tag)}</span>`).join("")}</div>
                    <strong>Practice checkpoint</strong>
                    <p>${formatInline(lesson.practice)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          <details class="pitfall-box">
            <summary>Week pitfalls to avoid</summary>
            <ul>${week.pitfalls.map(item => `<li>${formatInline(item)}</li>`).join("")}</ul>
          </details>
        </article>
      `
    )
    .join("");
}

function renderSyntax() {
  const grid = document.querySelector("#syntaxGrid");
  grid.innerHTML = syntaxBlocks
    .map(
      block => `
        <article class="syntax-card">
          <h3>${block.title}</h3>
          <p>${formatInline(block.note)}</p>
          <pre><code>${escapeHtml(block.code)}</code></pre>
        </article>
      `
    )
    .join("");
}

function renderCoverage() {
  const grid = document.querySelector("#coverageGrid");
  grid.innerHTML = course
    .map(
      week => `
        <article class="coverage-card">
          <h3>${week.shortTitle}: ${week.title}</h3>
          <ul>${week.coverage.map(item => `<li>${formatInline(item)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderPractice() {
  const list = document.querySelector("#practiceList");
  list.innerHTML = practices
    .map(
      practice => `
        <article class="practice-card">
          <div class="practice-meta">
            <span>${practice.week}</span>
            <strong>${practice.stage}</strong>
          </div>
          <div>
            <h3>${practice.title}</h3>
            <p>${formatInline(practice.goal)}</p>
            <ul>${practice.steps.map(step => `<li>${formatInline(step)}</li>`).join("")}</ul>
            <details>
              <summary>Hint</summary>
              <p>${formatInline(practice.hints)}</p>
            </details>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDrills() {
  const list = document.querySelector("#drillList");
  list.innerHTML = drills
    .map(
      drill => `
        <article class="practice-card drill-card">
          <div class="practice-meta">
            <span>${drill.week}</span>
            <strong>${drill.focus}</strong>
          </div>
          <div>
            <h3>${drill.title}</h3>
            <p>${formatInline(drill.goal)}</p>
            <ul>${drill.steps.map(step => `<li>${formatInline(step)}</li>`).join("")}</ul>
            <details>
              <summary>Self-check</summary>
              <p>${formatInline(drill.check)}</p>
            </details>
          </div>
        </article>
      `
    )
    .join("");
}

function setupTrainer() {
  const prompt = document.querySelector("#flashPrompt");
  const answer = document.querySelector("#flashAnswer");
  const reveal = document.querySelector("#revealButton");
  const next = document.querySelector("#nextButton");

  function showCard() {
    const card = cards[state.cardIndex];
    prompt.textContent = card.prompt;
    answer.textContent = card.answer;
    answer.hidden = true;
    state.cardRevealed = false;
    reveal.textContent = "Reveal answer";
  }

  reveal.addEventListener("click", () => {
    state.cardRevealed = !state.cardRevealed;
    answer.hidden = !state.cardRevealed;
    reveal.textContent = state.cardRevealed ? "Hide answer" : "Reveal answer";
  });

  next.addEventListener("click", () => {
    state.cardIndex = (state.cardIndex + 1) % cards.length;
    showCard();
  });

  showCard();
}

function renderAll() {
  renderWeekTabs();
  renderWorkspace();
  renderCourse();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatInline(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

renderAll();
renderCoverage();
renderSyntax();
renderPractice();
renderDrills();
setupTrainer();
