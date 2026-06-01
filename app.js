const modules = [
  { id: "all", label: "All" },
  { id: "foundation", label: "Foundation" },
  { id: "forecasting", label: "Forecasting" },
  { id: "design", label: "Design" },
  { id: "decision", label: "Decision" },
  { id: "capacity", label: "Capacity" },
  { id: "layout", label: "Layout" }
];

const lectures = [
  {
    id: 1,
    module: "foundation",
    title: "Course Orientation",
    cn: "课程要求、评分结构、个人作业、团队项目、展示评分和参考书。重点是理解课程评价方式和小组项目交付。",
    en: "Course requirements, grading, individual assignments, group project, presentation evaluation, and references.",
    terms: ["grading", "project", "presentation"]
  },
  {
    id: 2,
    module: "foundation",
    title: "Operations Management Basics",
    cn: "运营管理把劳动力、设备、设施、材料、时间、知识等输入转化为产品、服务和信息输出。系统设计偏战略，系统运行偏日常管理。",
    en: "OM transforms inputs into goods, services, and information. System design is strategic; system operation is tactical and daily.",
    terms: ["input-output", "models", "trade-offs"]
  },
  {
    id: 3,
    module: "foundation",
    title: "Competitiveness, Strategy, Productivity",
    cn: "竞争力来自相对于竞争者更好满足顾客需求。订单资格要素决定能否进入备选集合，赢单要素决定能否被选择。生产率等于输出除以输入。",
    en: "Competitiveness is relative customer need fulfillment. Qualifiers get considered; winners get chosen. Productivity equals output divided by input.",
    terms: ["order winners", "strategy", "productivity"]
  },
  {
    id: 4,
    module: "forecasting",
    title: "Forecasting I",
    cn: "预测包括定性方法和时间序列方法。重点公式是 naive、移动平均、加权移动平均、指数平滑、线性趋势和最小二乘回归。",
    en: "Forecasting covers qualitative methods and time-series methods: naive, moving average, weighted moving average, exponential smoothing, trend, and regression.",
    terms: ["MA", "WMA", "alpha", "trend"]
  },
  {
    id: 5,
    module: "forecasting",
    title: "Forecasting II",
    cn: "用 MAD、MSE、MAPE 衡量预测准确度，用控制图和跟踪信号判断误差是否有系统性偏差。方法选择取决于数据稳定性、趋势和成本。",
    en: "Use MAD, MSE, and MAPE for accuracy; use control charts and tracking signal to monitor bias and non-random errors.",
    terms: ["MAD", "MSE", "MAPE", "tracking signal"]
  },
  {
    id: 6,
    module: "design",
    title: "Product and Service Design I",
    cn: "产品与服务设计要把顾客需求转化为规格，并兼顾经济、竞争、法律、伦理和环境。重点是标准化、延迟差异化、模块化、可靠性和稳健设计。",
    en: "Design translates customer needs into specifications while balancing economic, competitive, legal, ethical, and environmental issues.",
    terms: ["standardization", "modular", "reliability", "robust"]
  },
  {
    id: 7,
    module: "design",
    title: "Product and Service Design II",
    cn: "产品开发流程从创意、可行性、产品规格、流程规格、原型、设计评审到市场测试和导入。并行工程减少顺序开发返工，FMEA、FTA、VA、QFD 和 Kano 是设计质量工具。",
    en: "Development moves from idea to feasibility, specs, prototype, review, market test, and introduction. Concurrent engineering and quality tools reduce redesign risk.",
    terms: ["FMEA", "FTA", "VA", "QFD", "Kano"]
  },
  {
    id: 8,
    module: "design",
    title: "Service Design",
    cn: "服务设计包括服务概念、服务包和服务规格。服务蓝图用于识别顾客互动顺序、时间估计、潜在失败点和盈利性。",
    en: "Service design defines the service concept, package, and specifications. Blueprinting maps interactions, time, failure points, and profitability.",
    terms: ["service package", "blueprinting", "high contact"]
  },
  {
    id: 9,
    module: "decision",
    title: "Decision Theory",
    cn: "不确定性下使用 maximin、maximax、Laplace 和 minimax regret。风险下使用 EMV。决策树从左往右读、从右往左分析，EVPI 等于完全信息期望值减最佳 EMV。",
    en: "Under uncertainty use maximin, maximax, Laplace, and minimax regret. Under risk use EMV. Read decision trees left to right and solve right to left.",
    terms: ["EMV", "EVPI", "regret", "decision tree"]
  },
  {
    id: 10,
    module: "capacity",
    title: "Capacity Planning I",
    cn: "设计产能、有效产能和实际产出分别对应最大设计能力、扣除允许损失后的能力和实际产出。效率用有效产能作分母，利用率用设计产能作分母。",
    en: "Design capacity is maximum designed output, effective capacity subtracts allowances, and actual output is achieved output. Efficiency uses effective capacity; utilization uses design capacity.",
    terms: ["design capacity", "effective capacity", "cushion"]
  },
  {
    id: 11,
    module: "capacity",
    title: "Capacity Planning II",
    cn: "服务产能不能储存，必须匹配需求时间。瓶颈限制系统产出。成本-产量分析用固定成本、单位变动成本和收入求盈亏平衡与自制外购临界点。",
    en: "Service capacity cannot be stored and must match demand timing. Bottlenecks constrain output. Cost-volume analysis finds break-even and make-or-buy thresholds.",
    terms: ["bottleneck", "BEP", "outsourcing", "scale"]
  },
  {
    id: 12,
    module: "layout",
    title: "Process Selection and Layout I",
    cn: "流程选择取决于产品多样性、柔性和产量。流程类型包括 job shop、batch、repetitive/assembly、continuous 和 project。布局包括产品布局、流程布局和固定位置布局。",
    en: "Process selection depends on variety, flexibility, and volume. Types include job shop, batch, repetitive, continuous, and project. Layouts include product, process, and fixed-position.",
    terms: ["job shop", "batch", "automation", "layout"]
  },
  {
    id: 13,
    module: "layout",
    title: "Process Selection and Layout II",
    cn: "单元布局按相似加工需求组成机器单元。生产线平衡先求周期时间和最少工作站，再按前置关系分配任务并计算闲置率和效率。流程布局目标是最小化运输距离或成本。",
    en: "Cellular layout groups similar processing needs. Line balancing uses cycle time, minimum stations, precedence-based assignment, idle time, and efficiency.",
    terms: ["cellular", "line balancing", "cycle time", "load-distance"]
  }
];

const formulas = [
  {
    title: "Productivity",
    math: "Productivity = Outputs / Inputs",
    cn: "生产率衡量资源使用效率。",
    en: "Measures effective use of resources."
  },
  {
    title: "Moving Average",
    math: "F_t = (A_{t-1} + ... + A_{t-n}) / n",
    cn: "稳定时间序列常用，窗口越大越平滑。",
    en: "Useful for stable series; larger windows smooth more."
  },
  {
    title: "Exponential Smoothing",
    math: "F_t = F_{t-1} + alpha(A_{t-1} - F_{t-1})",
    cn: "alpha 越大，预测越快响应。",
    en: "Larger alpha increases responsiveness."
  },
  {
    title: "Trend Projection",
    math: "F_t = a + bt",
    cn: "适合线性趋势数据。",
    en: "Use when data show a linear trend."
  },
  {
    title: "MAD",
    math: "MAD = sum |A_t - F_t| / n",
    cn: "平均绝对误差，解释直观。",
    en: "Average absolute error."
  },
  {
    title: "MAPE",
    math: "MAPE = 100/n * sum |(A_t - F_t)/A_t|",
    cn: "百分比误差，便于跨规模比较。",
    en: "Percentage error for scale comparison."
  },
  {
    title: "EMV",
    math: "EMV_i = sum p_s * Payoff_{i,s}",
    cn: "风险下选择最大期望收益。",
    en: "Choose the highest expected payoff under risk."
  },
  {
    title: "EVPI",
    math: "EVPI = sum p_s max_i Payoff_{i,s} - max_i EMV_i",
    cn: "完全信息最多值多少钱。",
    en: "Maximum worth of perfect information."
  },
  {
    title: "Efficiency",
    math: "Efficiency = Actual output / Effective capacity",
    cn: "分母是有效产能。",
    en: "Uses effective capacity as denominator."
  },
  {
    title: "Utilization",
    math: "Utilization = Actual output / Design capacity",
    cn: "分母是设计产能。",
    en: "Uses design capacity as denominator."
  },
  {
    title: "Break-even",
    math: "Q_BEP = FC / (R - vc)",
    cn: "收入等于总成本的产量。",
    en: "Output where revenue equals total cost."
  },
  {
    title: "Line Balancing",
    math: "CT = OT / D; N_min = ceil(sum t_i / CT)",
    cn: "先算周期时间，再算最少工作站。",
    en: "Compute cycle time, then minimum stations."
  }
];

const checklist = [
  ["Forecasting", "会算 naive、MA、WMA、exponential smoothing 和 trend projection。"],
  ["Accuracy", "会用误差表计算 MAD、MSE、MAPE 和 tracking signal。"],
  ["Decision criteria", "能区分 maximin、maximax、Laplace、minimax regret。"],
  ["Risk decisions", "会算 EMV、画/读决策树、从右往左回推。"],
  ["EVPI", "会计算完全信息期望价值 A 和最佳 EMV B。"],
  ["Capacity", "会区分 design/effective/actual capacity，并计算 efficiency/utilization/cushion。"],
  ["Cost-volume", "会写 TC、TR、profit，求 BEP 和 make-or-buy 临界产量。"],
  ["Bottleneck", "知道瓶颈限制系统产出，改善应优先针对瓶颈。"],
  ["Product design", "能解释 standardization、delayed differentiation、modular design、robust design。"],
  ["Quality tools", "能说明 FMEA、FTA、VA、QFD/House of Quality、Kano 的用途。"],
  ["Service design", "能列出 service blueprinting 的主要步骤和高/低接触服务差异。"],
  ["Layout", "能比较 job shop、batch、assembly、continuous、project 和产品/流程/固定位置/单元布局。"],
  ["Line balancing", "会算 CT、N_min、idle time、efficiency，并按前置关系分配任务。"],
  ["Process layout", "会用物流量和距离计算运输成本，物流量大的部门应更近。"]
];

const state = {
  module: "all",
  lang: "both",
  query: ""
};

const moduleFilters = document.querySelector("#moduleFilters");
const lectureGrid = document.querySelector("#lectureGrid");
const formulaGrid = document.querySelector("#formulaGrid");
const checklistGrid = document.querySelector("#checklistGrid");
const searchInput = document.querySelector("#searchInput");

function renderFilters() {
  moduleFilters.innerHTML = modules
    .map(
      (item) =>
        `<button class="filter-btn ${item.id === state.module ? "active" : ""}" type="button" data-module="${item.id}">${item.label}</button>`
    )
    .join("");
}

function lectureMatches(lecture) {
  const byModule = state.module === "all" || lecture.module === state.module;
  const haystack = [
    lecture.id,
    lecture.module,
    lecture.title,
    lecture.cn,
    lecture.en,
    lecture.terms.join(" ")
  ]
    .join(" ")
    .toLowerCase();
  return byModule && haystack.includes(state.query.toLowerCase());
}

function renderLectures() {
  const cards = lectures.filter(lectureMatches).map((lecture) => {
    const cn = state.lang !== "en" ? `<p class="cn">${lecture.cn}</p>` : "";
    const en = state.lang !== "cn" ? `<p class="en">${lecture.en}</p>` : "";
    const terms = lecture.terms.map((term) => `<span class="term-chip">${term}</span>`).join("");
    return `
      <article class="lecture-card">
        <div class="lecture-meta">
          <span>Class ${lecture.id}</span>
          <span class="lecture-module">${lecture.module}</span>
        </div>
        <h3>${lecture.title}</h3>
        ${cn}
        ${en}
        <div class="terms">${terms}</div>
      </article>
    `;
  });

  lectureGrid.innerHTML =
    cards.join("") || `<article class="lecture-card"><h3>No results</h3><p>没有匹配内容。</p></article>`;
}

function renderFormulas() {
  formulaGrid.innerHTML = formulas
    .map((formula, index) => {
      const cn = state.lang !== "en" ? `<p>${formula.cn}</p>` : "";
      const en = state.lang !== "cn" ? `<p>${formula.en}</p>` : "";
      return `
        <article class="formula-card">
          <h3>${formula.title}</h3>
          <div class="formula" id="formula-${index}">${formula.math}</div>
          ${cn}
          ${en}
          <button class="copy-btn" type="button" data-copy="${index}">Copy</button>
        </article>
      `;
    })
    .join("");
}

function renderChecklist() {
  const stored = JSON.parse(localStorage.getItem("orChecklist") || "{}");
  checklistGrid.innerHTML = checklist
    .map(([title, text], index) => {
      const checked = stored[index] ? "checked" : "";
      return `
        <label class="check-item">
          <input type="checkbox" data-check="${index}" ${checked} />
          <span>
            <h3>${title}</h3>
            <p>${text}</p>
          </span>
        </label>
      `;
    })
    .join("");
}

function renderAll() {
  renderFilters();
  renderLectures();
  renderFormulas();
  renderChecklist();
}

moduleFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  state.module = button.dataset.module;
  renderFilters();
  renderLectures();
});

document.querySelectorAll(".mode-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.lang = button.dataset.lang;
    renderLectures();
    renderFormulas();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderLectures();
});

formulaGrid.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;
  const formula = formulas[Number(button.dataset.copy)].math;
  try {
    await navigator.clipboard.writeText(formula);
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1000);
  } catch {
    button.textContent = "Select";
  }
});

checklistGrid.addEventListener("change", (event) => {
  const input = event.target.closest("[data-check]");
  if (!input) return;
  const stored = JSON.parse(localStorage.getItem("orChecklist") || "{}");
  stored[input.dataset.check] = input.checked;
  localStorage.setItem("orChecklist", JSON.stringify(stored));
});

renderAll();
