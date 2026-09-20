import { DIMENSIONS, QUESTIONS, scoreAssessment } from "./logic.mjs";

const STORAGE_KEY = "workplace-happiness-v2";
const dimensionOrder = ["economic", "timeEnergy", "growth", "relationships", "psychological"];
const dimensionColors = ["#5b88f5", "#31bfdc", "#56c79a", "#f1b64f", "#ef7e8d"];
const optionIcons = [
  ["🚀", "↗️", "⚖️", "↘️", "🪫"],
  ["✨", "👌", "➖", "🌧️", "🫥"],
  ["🎁", "☁️", "📎", "🧩", "🕳️"],
  ["🕊️", "🌤️", "🕰️", "🌙", "🧱"],
  ["🚶", "🚲", "🚇", "🚌", "🛫"],
  ["🎨", "🍃", "🛋️", "🫠", "🪫"],
  ["💡", "📚", "🧭", "🫧", "⏸️"],
  ["🛠️", "🧰", "📎", "🔒", "🧊"],
  ["🌱", "🌿", "岔", "回", "退"],
  ["💬", "🤝", "📎", "🌀", "⛈️"],
  ["☀️", "🌤️", "⛅", "🌧️", "🌪️"],
  ["🔦", "👀", "📋", "隐", "空"],
  ["静", "偶", "频", "日", "强"],
  ["🌙", "☁️", "🌧️", "⚡", "⛈️"],
  ["留", "稳", "想", "走", "启"],
];

const notes = {
  economic: "先看看这份工作的回报，是否配得上你的投入",
  timeEnergy: "时间不会说谎，身体也不会",
  growth: "今天的忙碌，能不能变成明天的底气",
  relationships: "工作体验，往往藏在人与人的缝隙里",
  psychological: "心里的真实反应，比标准答案更重要",
};

const elements = {
  quizView: document.querySelector("#quizView"),
  resultView: document.querySelector("#resultView"),
  dimensionPill: document.querySelector("#dimensionPill"),
  questionNumber: document.querySelector("#questionNumber"),
  progressBar: document.querySelector("#progressBar"),
  dimensionSteps: document.querySelector("#dimensionSteps"),
  questionNote: document.querySelector("#questionNote"),
  questionText: document.querySelector("#questionText"),
  optionsList: document.querySelector("#optionsList"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  nextButtonLabel: document.querySelector("#nextButtonLabel"),
  clearButton: document.querySelector("#clearButton"),
  restartButton: document.querySelector("#restartButton"),
  toast: document.querySelector("#toast"),
};

let state = loadState();
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved.answers === "object") {
      return {
        currentIndex: Math.min(Math.max(Number(saved.currentIndex) || 0, 0), QUESTIONS.length - 1),
        answers: saved.answers,
      };
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return { currentIndex: 0, answers: {} };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderDimensionSteps() {
  const currentDimension = QUESTIONS[state.currentIndex].dimension;
  const currentDimensionIndex = dimensionOrder.indexOf(currentDimension);
  elements.dimensionSteps.innerHTML = dimensionOrder
    .map((_, index) => {
      const status = index < currentDimensionIndex ? "is-complete" : index === currentDimensionIndex ? "is-current" : "";
      return `<span class="dimension-step ${status}"></span>`;
    })
    .join("");
}

function renderQuestion({ focusHeading = false } = {}) {
  const question = QUESTIONS[state.currentIndex];
  const dimension = DIMENSIONS[question.dimension];
  const selected = state.answers[question.id];
  const progress = ((state.currentIndex + 1) / QUESTIONS.length) * 100;

  elements.dimensionPill.textContent = `${dimension.icon} ${dimension.label}`;
  elements.questionNumber.textContent = String(state.currentIndex + 1).padStart(2, "0");
  elements.progressBar.style.width = `${progress}%`;
  elements.questionNote.textContent = notes[question.dimension];
  elements.questionText.textContent = question.text;
  elements.previousButton.disabled = state.currentIndex === 0;
  elements.nextButton.disabled = !selected;
  elements.nextButtonLabel.textContent = state.currentIndex === QUESTIONS.length - 1 ? "查看结果" : "下一题";
  renderDimensionSteps();

  elements.optionsList.innerHTML = question.options
    .map((option, index) => {
      const isSelected = selected === option.id;
      return `
        <button
          class="option-button ${isSelected ? "is-selected" : ""}"
          type="button"
          role="radio"
          aria-checked="${isSelected}"
          data-option="${option.id}"
        >
          <span class="option-icon" aria-hidden="true">${optionIcons[state.currentIndex][index]}</span>
          <span class="option-label">${option.label}</span>
          <span class="option-check" aria-hidden="true">✓</span>
        </button>`;
    })
    .join("");

  elements.optionsList.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[question.id] = button.dataset.option;
      saveState();
      renderQuestion();
      elements.nextButton.focus();
    });
  });

  if (focusHeading) {
    elements.questionText.focus?.();
  }
}

function nextQuestion() {
  const question = QUESTIONS[state.currentIndex];
  if (!state.answers[question.id]) {
    showToast("先选一个最符合你现状的答案");
    return;
  }

  if (state.currentIndex === QUESTIONS.length - 1) {
    showResults();
    return;
  }

  state.currentIndex += 1;
  saveState();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function previousQuestion() {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  saveState();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResults() {
  if (Object.keys(state.answers).length !== QUESTIONS.length) {
    showToast("还有题目没有完成");
    return;
  }

  const result = scoreAssessment(state.answers);
  elements.quizView.hidden = true;
  elements.resultView.hidden = false;

  document.querySelector("#totalScore").textContent = result.totalScore;
  document.querySelector("#scoreOrbit").style.setProperty("--score", result.totalScore);
  document.querySelector("#overallComment").textContent = result.overallComment;
  document.querySelector("#personalityTitle").textContent = result.personalityTitle;
  document.querySelector("#percentile").textContent = `你的幸福度超过了约 ${result.referencePercentile}% 的职场人`;
  document.querySelector("#personalityDescription").textContent = result.personalityDescription;
  document.querySelector("#strongestDimension").textContent = `${result.strongestDimension.label} ${result.strongestDimension.score}/10`;
  document.querySelector("#weakestDimension").textContent = `${result.weakestDimension.label} ${result.weakestDimension.score}/10`;

  document.querySelector("#dimensionResults").innerHTML = dimensionOrder
    .map((key, index) => {
      const dimension = result.dimensions[key];
      return `
        <div class="dimension-row">
          <div class="dimension-name"><span aria-hidden="true">${dimension.icon}</span>${dimension.label}</div>
          <div class="dimension-score">${dimension.score} / 10</div>
          <div class="dimension-meter"><span style="width:${dimension.score * 10}%;--meter-color:${dimensionColors[index]}"></span></div>
        </div>`;
    })
    .join("");

  document.querySelector("#analysisCopy").innerHTML = result.happinessAnalysis
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  localStorage.setItem(`${STORAGE_KEY}-result`, JSON.stringify(result));
  window.scrollTo({ top: 0, behavior: "smooth" });

  return result;
}

function resetAssessment(message = "已清空，可以重新开始") {
  state = { currentIndex: 0, answers: {} };
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(`${STORAGE_KEY}-result`);
  elements.resultView.hidden = true;
  elements.quizView.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(message);
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 1800);
}

elements.previousButton.addEventListener("click", previousQuestion);
elements.nextButton.addEventListener("click", nextQuestion);
elements.clearButton.addEventListener("click", () => resetAssessment());
elements.restartButton.addEventListener("click", () => resetAssessment("新的答案，也许会照见新的状态"));

document.addEventListener("keydown", (event) => {
  if (elements.quizView.hidden) return;
  if (event.key === "ArrowLeft") previousQuestion();
  if (event.key === "ArrowRight" && !elements.nextButton.disabled) nextQuestion();
});

function registerModelTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;

  const lifecycle = new AbortController();
  const validOptions = new Set(["A", "B", "C", "D", "E"]);

  try {
    void Promise.resolve(
      context.registerTool(
        {
          name: "complete_workplace_happiness_assessment",
          title: "完成职场幸福度测评",
          description: "使用 15 个 A-E 选项完成测评，并在页面上展示同一套评分结果。",
          inputSchema: {
            type: "object",
            properties: {
              answers: {
                type: "array",
                minItems: 15,
                maxItems: 15,
                items: { type: "string", enum: ["A", "B", "C", "D", "E"] },
              },
            },
            required: ["answers"],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input) {
            if (!input || !Array.isArray(input.answers) || input.answers.length !== QUESTIONS.length) {
              throw new Error("需要按题目顺序提供 15 个答案。");
            }
            if (!input.answers.every((answer) => validOptions.has(answer))) {
              throw new Error("每个答案必须是 A、B、C、D 或 E。");
            }

            state.answers = Object.fromEntries(
              QUESTIONS.map((question, index) => [question.id, input.answers[index]]),
            );
            state.currentIndex = QUESTIONS.length - 1;
            saveState();
            const result = showResults();
            return {
              totalScore: result.totalScore,
              personalityType: result.personalityType,
              personalityTitle: result.personalityTitle,
            };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {});
  } catch {
    lifecycle.abort();
  }
}

renderQuestion();
registerModelTools();
