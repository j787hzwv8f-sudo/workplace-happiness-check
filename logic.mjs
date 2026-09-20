export const DIMENSIONS = {
  economic: {
    key: "economic",
    icon: "💰",
    label: "经济回报",
    questionIds: ["q1", "q2", "q3"],
  },
  timeEnergy: {
    key: "timeEnergy",
    icon: "⏰",
    label: "时间与体力消耗",
    questionIds: ["q4", "q5", "q6"],
  },
  growth: {
    key: "growth",
    icon: "📈",
    label: "成长与发展空间",
    questionIds: ["q7", "q8", "q9"],
  },
  relationships: {
    key: "relationships",
    icon: "🤝",
    label: "人际与环境",
    questionIds: ["q10", "q11", "q12"],
  },
  psychological: {
    key: "psychological",
    icon: "❤️",
    label: "心理与生活平衡",
    questionIds: ["q13", "q14", "q15"],
  },
};

export const QUESTIONS = [
  {
    id: "q1",
    dimension: "economic",
    text: "你现在的收入，和同城市、同岗位的人相比大概是什么水平？",
    options: [
      { id: "A", label: "明显偏高", score: 5 },
      { id: "B", label: "略高一些", score: 4 },
      { id: "C", label: "差不多", score: 3 },
      { id: "D", label: "略低一些", score: 2 },
      { id: "E", label: "明显偏低", score: 1 },
    ],
  },
  {
    id: "q2",
    dimension: "economic",
    text: "你觉得现在的工资，配得上你的工作量和责任吗？",
    options: [
      { id: "A", label: "完全配得上", score: 5 },
      { id: "B", label: "基本配得上", score: 4 },
      { id: "C", label: "一般", score: 3 },
      { id: "D", label: "有点不值", score: 2 },
      { id: "E", label: "严重不值", score: 1 },
    ],
  },
  {
    id: "q3",
    dimension: "economic",
    text: "公司的薪资、奖金、五险一金和福利整体怎么样？",
    options: [
      { id: "A", label: "很好，基本挑不出问题", score: 5 },
      { id: "B", label: "比较规范，福利也不错", score: 4 },
      { id: "C", label: "正常水平", score: 3 },
      { id: "D", label: "有些地方不太满意", score: 2 },
      { id: "E", label: "很差/经常有问题", score: 1 },
    ],
  },
  {
    id: "q4",
    dimension: "timeEnergy",
    text: "你每天实际花在工作上的时间大概多久？",
    options: [
      { id: "A", label: "8小时以内", score: 5 },
      { id: "B", label: "8～9小时", score: 4 },
      { id: "C", label: "9～10小时", score: 3 },
      { id: "D", label: "10～11小时", score: 2 },
      { id: "E", label: "11小时以上", score: 1 },
    ],
  },
  {
    id: "q5",
    dimension: "timeEnergy",
    text: "你的单程通勤时间大概多久？",
    options: [
      { id: "A", label: "30分钟以内", score: 5 },
      { id: "B", label: "30～45分钟", score: 4 },
      { id: "C", label: "45～60分钟", score: 3 },
      { id: "D", label: "60～90分钟", score: 2 },
      { id: "E", label: "90分钟以上", score: 1 },
    ],
  },
  {
    id: "q6",
    dimension: "timeEnergy",
    text: "下班以后，你还有多少精力留给自己的生活？",
    options: [
      { id: "A", label: "很多，下班基本属于自己", score: 5 },
      { id: "B", label: "还不错", score: 4 },
      { id: "C", label: "一般", score: 3 },
      { id: "D", label: "基本只想躺着", score: 2 },
      { id: "E", label: "完全被工作掏空", score: 1 },
    ],
  },
  {
    id: "q7",
    dimension: "growth",
    text: "你现在这份工作还能让你持续学到新东西吗？",
    options: [
      { id: "A", label: "经常能学到", score: 5 },
      { id: "B", label: "还能学到不少", score: 4 },
      { id: "C", label: "偶尔", score: 3 },
      { id: "D", label: "已经很少了", score: 2 },
      { id: "E", label: "基本学不到", score: 1 },
    ],
  },
  {
    id: "q8",
    dimension: "growth",
    text: "你现在积累的能力，换一家公司以后还值钱吗？",
    options: [
      { id: "A", label: "非常值钱", score: 5 },
      { id: "B", label: "比较有竞争力", score: 4 },
      { id: "C", label: "一般", score: 3 },
      { id: "D", label: "可迁移能力比较少", score: 2 },
      { id: "E", label: "感觉离开这里就没什么用了", score: 1 },
    ],
  },
  {
    id: "q9",
    dimension: "growth",
    text: "如果继续在这家公司待两年，你觉得自己会更有竞争力吗？",
    options: [
      { id: "A", label: "一定会，而且提升明显", score: 5 },
      { id: "B", label: "大概率会", score: 4 },
      { id: "C", label: "不太确定", score: 3 },
      { id: "D", label: "大概率不会", score: 2 },
      { id: "E", label: "甚至可能越来越被动", score: 1 },
    ],
  },
  {
    id: "q10",
    dimension: "relationships",
    text: "你和直属领导的相处状态怎么样？",
    options: [
      { id: "A", label: "很好，沟通顺畅也认可我", score: 5 },
      { id: "B", label: "整体不错", score: 4 },
      { id: "C", label: "普普通通", score: 3 },
      { id: "D", label: "经常让我内耗", score: 2 },
      { id: "E", label: "已经严重影响工作状态", score: 1 },
    ],
  },
  {
    id: "q11",
    dimension: "relationships",
    text: "你所在团队的工作氛围怎么样？",
    options: [
      { id: "A", label: "很舒服，大家正常做事", score: 5 },
      { id: "B", label: "整体比较友好", score: 4 },
      { id: "C", label: "一般", score: 3 },
      { id: "D", label: "内耗/甩锅/办公室政治比较多", score: 2 },
      { id: "E", label: "非常糟糕", score: 1 },
    ],
  },
  {
    id: "q12",
    dimension: "relationships",
    text: "你的工作成果能够被正常看见和认可吗？",
    options: [
      { id: "A", label: "经常能被看见，也能得到回报", score: 5 },
      { id: "B", label: "大多数时候可以", score: 4 },
      { id: "C", label: "一般", score: 3 },
      { id: "D", label: "经常做了也没人看见", score: 2 },
      { id: "E", label: "干得再多都没用", score: 1 },
    ],
  },
  {
    id: "q13",
    dimension: "psychological",
    text: "你最近产生“想辞职”的念头有多频繁？",
    options: [
      { id: "A", label: "几乎没有", score: 5 },
      { id: "B", label: "偶尔想想", score: 4 },
      { id: "C", label: "每周会想几次", score: 3 },
      { id: "D", label: "几乎每天都想", score: 2 },
      { id: "E", label: "每天都非常强烈", score: 1 },
    ],
  },
  {
    id: "q14",
    dimension: "psychological",
    text: "周日晚上想到第二天要上班，你通常是什么感觉？",
    options: [
      { id: "A", label: "很平静，没什么感觉", score: 5 },
      { id: "B", label: "还好", score: 4 },
      { id: "C", label: "有一点烦", score: 3 },
      { id: "D", label: "明显焦虑/抗拒", score: 2 },
      { id: "E", label: "非常痛苦", score: 1 },
    ],
  },
  {
    id: "q15",
    dimension: "psychological",
    text: "如果现在突然有一份“薪资差不多”的Offer摆在你面前，你会走吗？",
    options: [
      { id: "A", label: "肯定不会走", score: 5 },
      { id: "B", label: "大概率不会走", score: 4 },
      { id: "C", label: "会认真纠结一下", score: 3 },
      { id: "D", label: "大概率会走", score: 2 },
      { id: "E", label: "立刻走，完全不犹豫", score: 1 },
    ],
  },
];

export const PERSONALITY_TYPES = {
  stable: {
    type: "stable",
    title: "🌱 稳稳幸福选手",
    description:
      "你现在这份工作整体比较均衡，钱、成长、环境和生活没有明显拖后腿的地方。偶尔想辞职可能只是正常的工作情绪，目前更值得做的，是继续把这份工作的优势吃透。",
  },
  moderate: {
    type: "moderate",
    title: "🧘 中规中矩选手",
    description:
      "你的工作谈不上特别幸福，但也没有差到非走不可。中规中矩，还算不错。真正需要想清楚的不是‘要不要马上离职’，而是继续留下来还能得到什么。",
  },
  jobSearching: {
    type: "jobSearching",
    title: "🐎 骑驴找马选手",
    description:
      "这份工作还没有差到需要立刻离开，但已经有些地方让你开始动摇了。比起冲动裸辞，你可能更适合一边把现在的工作做好，一边看看外面的机会——先把选择权拿到自己手里。",
  },
  highSalaryHardCarry: {
    type: "highSalaryHardCarry",
    title: "💰 高薪硬扛选手",
    description:
      "钱可能是你现在留下来的重要原因，但你正在用时间、精力或者情绪换这份收入。重点不是马上辞职，而是问问自己：这样的交换，我还愿意持续多久？",
  },
  warmWater: {
    type: "warmWater",
    title: "🫠 温水消耗选手",
    description:
      "这份工作最危险的地方可能不是‘很痛苦’，而是‘好像也没什么大问题’。日子能过，但成长越来越少。真正需要警惕的，是两年以后回头看，发现自己只是把同一年的经验重复了很多遍。",
  },
  mentallyLeft: {
    type: "mentallyLeft",
    title: "💔 人还在，心已离职选手",
    description:
      "你对这份工作的留恋已经比较低了，问题可能也不只出在某一个地方。但不要让一次测试替你做离职决定。现在更值得做的是把现金流、下一份工作的方向、外部机会和离开的成本全部盘清楚，再决定下一步。",
  },
};

const DIMENSION_ORDER = [
  "economic",
  "timeEnergy",
  "growth",
  "relationships",
  "psychological",
];

export function scoreAssessment(rawAnswers) {
  const answers = normalizeAnswers(rawAnswers);
  const dimensions = scoreDimensions(answers);
  const totalRawScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const totalScore = Math.round(((totalRawScore - 15) / 60) * 100);
  const referencePercentile = clamp(Math.round(totalScore * 0.9 + 11), 5, 95);
  const overallComment = getOverallComment(totalScore);
  const strongestDimension = pickDimension(dimensions, "strongest");
  const weakestDimension = pickDimension(dimensions, "weakest");
  const happinessAnalysis = generateHappinessAnalysis({
    dimensions,
    strongestDimension,
    weakestDimension,
    totalScore,
  });
  const personality = determinePersonalityType({
    answers,
    dimensions,
    totalScore,
  });

  return {
    totalScore,
    totalRawScore,
    referencePercentile,
    overallComment,
    personalityType: personality.type,
    personalityTitle: personality.title,
    personalityDescription: personality.description,
    dimensions,
    strongestDimension,
    weakestDimension,
    happinessAnalysis,
  };
}

export function determinePersonalityType({ answers, dimensions, totalScore }) {
  const economic = dimensions.economic.score;
  const timeEnergy = dimensions.timeEnergy.score;
  const growth = dimensions.growth.score;
  const psychological = dimensions.psychological.score;
  const q15Score = answers.q15;

  if (economic >= 7.5 && (timeEnergy <= 5 || psychological <= 5)) {
    return PERSONALITY_TYPES.highSalaryHardCarry;
  }

  const lowNonPsychologicalDimensions = DIMENSION_ORDER.filter(
    (key) => key !== "psychological" && dimensions[key].score <= 4.5,
  ).length;
  if (
    psychological <= 3.5 ||
    totalScore < 40 ||
    (q15Score <= 2 && lowNonPsychologicalDimensions >= 2)
  ) {
    return PERSONALITY_TYPES.mentallyLeft;
  }

  if (
    growth <= 4.5 &&
    totalScore >= 45 &&
    totalScore <= 65 &&
    psychological > 3.5
  ) {
    return PERSONALITY_TYPES.warmWater;
  }

  const lowCoreDimensionCount = ["growth", "psychological", "timeEnergy"].filter(
    (key) => dimensions[key].score < 5.8,
  ).length;
  if (
    totalScore >= 45 &&
    totalScore <= 69 &&
    ((lowCoreDimensionCount >= 1 && lowCoreDimensionCount <= 2) || q15Score <= 3)
  ) {
    return PERSONALITY_TYPES.jobSearching;
  }

  const minDimensionScore = Math.min(...DIMENSION_ORDER.map((key) => dimensions[key].score));
  if (totalScore >= 75 && minDimensionScore >= 5.8) {
    return PERSONALITY_TYPES.stable;
  }

  return PERSONALITY_TYPES.moderate;
}

export function getOverallComment(totalScore) {
  if (totalScore >= 80) return "整体状态很稳，属于比较舒服的一份工作";
  if (totalScore >= 65) return "整体不错，有几个维度表现得很亮眼";
  if (totalScore >= 50) return "中规中矩，还算不错";
  if (totalScore >= 35) return "有些地方已经开始拖后腿了";
  return "多个维度都在消耗你，值得认真重新评估";
}

export function generateHappinessAnalysis({
  dimensions,
  strongestDimension,
  weakestDimension,
  totalScore,
}) {
  const gap = round1(strongestDimension.score - weakestDimension.score);
  const lines = [
    `你的【${strongestDimension.label}】表现最好（${strongestDimension.score}/10），这是目前这份工作最明显的优势。`,
    `你的【${weakestDimension.label}】只有${weakestDimension.score}/10，是当前最值得关注的短板。`,
  ];

  if (gap >= 3) {
    lines.push(
      "你现在的问题不一定是“这家公司很差”，而是优势和短板之间已经出现明显失衡。",
    );
  } else if (totalScore >= 75) {
    lines.push("五个维度整体比较均衡，短期内更适合把已有优势继续放大。");
  } else if (weakestDimension.score <= 4.5) {
    lines.push("先不用急着做离职决定，但这个短板已经值得你认真拆开看看。");
  } else {
    lines.push("目前更像是几个维度都还有提升空间，可以先从最影响每天体感的一项下手。");
  }

  return lines;
}

export function scoreDimensions(answers) {
  return Object.fromEntries(
    Object.entries(DIMENSIONS).map(([key, dimension]) => {
      const rawScore = dimension.questionIds.reduce((sum, questionId) => {
        return sum + answers[questionId];
      }, 0);

      return [
        key,
        {
          key,
          icon: dimension.icon,
          label: dimension.label,
          rawScore,
          score: round1(((rawScore - 3) / 12) * 10),
        },
      ];
    }),
  );
}

export function normalizeAnswers(rawAnswers) {
  const answers = {};

  if (Array.isArray(rawAnswers)) {
    if (rawAnswers.length !== QUESTIONS.length) {
      throw new Error(`Expected ${QUESTIONS.length} answers, received ${rawAnswers.length}.`);
    }

    QUESTIONS.forEach((question, index) => {
      answers[question.id] = normalizeAnswerValue(rawAnswers[index], question);
    });
    return answers;
  }

  if (!rawAnswers || typeof rawAnswers !== "object") {
    throw new Error("Answers must be an array or an object keyed by question id.");
  }

  QUESTIONS.forEach((question) => {
    const rawValue = rawAnswers[question.id] ?? rawAnswers[question.id.toUpperCase()];
    if (rawValue === undefined) {
      throw new Error(`Missing answer for ${question.id}.`);
    }
    answers[question.id] = normalizeAnswerValue(rawValue, question);
  });

  return answers;
}

function normalizeAnswerValue(value, question) {
  if (value && typeof value === "object" && "score" in value) {
    return normalizeScore(value.score, question.id);
  }

  if (typeof value === "string") {
    const normalized = value.trim().toUpperCase();
    const option = question.options.find((item) => item.id === normalized);
    if (option) return option.score;
    if (/^[1-5]$/.test(normalized)) return normalizeScore(Number(normalized), question.id);
  }

  return normalizeScore(value, question.id);
}

function normalizeScore(value, questionId) {
  if (!Number.isInteger(value) || value < 1 || value > 5) {
    throw new Error(`${questionId} must be scored as an integer from 1 to 5.`);
  }
  return value;
}

function pickDimension(dimensions, mode) {
  const sorted = DIMENSION_ORDER.map((key) => dimensions[key]).sort((a, b) => {
    if (a.score === b.score) {
      return DIMENSION_ORDER.indexOf(a.key) - DIMENSION_ORDER.indexOf(b.key);
    }
    return mode === "strongest" ? b.score - a.score : a.score - b.score;
  });

  return {
    key: sorted[0].key,
    label: sorted[0].label,
    score: sorted[0].score,
  };
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
