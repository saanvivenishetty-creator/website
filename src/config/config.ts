// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
 personal: {
  name: 'Saanvi Venishetty',
  title: 'Economics (H) Undergraduate | Business & Data Analytics',
  image: getAsset('images/profile.png'),
  tagline: 'Turning data into economic and business insights.',
}


  seo: {
    title: "Dr. Chandravesh Chaudhari - Assistant Professor & AI Researcher",
    description: 'Official website showcasing Dr. Chandravesh Chaudhari\'s education, research, projects and experience.',
  },

  animatedText: ['AI Researcher', 'Educator', 'Speaker', 'Builder'],

navigation: [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Research', url: '/research' },
  { name: 'Education', url: '/education' },
  { name: 'Experience', url: '/experience' },
  { name: 'Blogs', url: '/blogs' },
  { name: 'Resume', url: '/resume' },
  { name: 'Contact', url: '/contact' },
],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Project Management Mastery',
      url: getAsset('static_page/project_management_blog.html'),
    },
  ],


 education: [
  {
    institution: 'Christ University, Bangalore',
    degree: 'B.A. Economics (Honours)',
    year: '2023–2027',
    description: [
      'Coursework: Microeconomics, Macroeconomics, Statistics, Econometrics',
      'Tools: Excel, Python, SQL, Power BI',
    ],
  },
],

// ✅ Unified MOOC + Certifications Section
certifications: [
  // --- Deep Learning Specialization (DeepLearning.AI) ---
    // --- Deep Learning Specialization (DeepLearning.AI) ---
  {
    title: "Deep Learning Specialization (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation- Neural Networks and Deep Learning Improving Deep Neural Networks Hyperparameter tuning Regularization and Optimization Structuring Machine Learning Projects Convolutional Neural Networks Sequence Models.pdf"),
    certificates: [
      { name: "Neural Networks and Deep Learning", file: getAsset("images/education/Certifications/deep learning Neural Networks and Deep Learning.pdf") },
  { name: "Improving Deep Neural Networks", file: getAsset("images/education/Certifications/deep learning- Improving Deep Neural Networks- Hyperparameter tuning, Regularization and Optimization.pdf") },
      { name: "Structuring Machine Learning Projects", file: getAsset("images/education/Certifications/deep learning ai structuring ML projects.pdf") },
      { name: "Convolutional Neural Networks", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks.pdf") },
      { name: "Sequence Models", file: getAsset("images/education/Certifications/deep learning sequence models.pdf") },
    ],
  },

  // --- TensorFlow Developer Specialization (DeepLearning.AI) ---
  {
    title: "TensorFlow Developer Professional Certificate (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation- Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning Convolutional Neural Networks in TensorFlow Natural Language Processing in TensorFlow Sequences, Time Series and Prediction.pdf"),
    certificates: [
      { name: "Introduction to TensorFlow for AI", file: getAsset("images/education/Certifications/deep learning ai Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning.pdf") },
      { name: "Convolutional Neural Networks in TensorFlow", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks in TensorFlow.pdf") },
      { name: "Natural Language Processing in TensorFlow", file: getAsset("images/education/Certifications/deep learning ai Natural language processing in tensorflow.pdf") },
  { name: "Sequences, Time Series and Prediction", file: getAsset("images/education/Certifications/deeplearning ai- Sequences, time series and prediction.pdf") },
    ],
  },

  // --- Mathematics for Machine Learning (Imperial College London) ---
  {
    title: "Mathematics for Machine Learning Specialization (Imperial College London)",
    specialization: true,
    file: getAsset("images/education/Certifications/specialisation- mathematics for ML- 3 courses.pdf"),
    certificates: [
  { name: "Linear Algebra", file: getAsset("images/education/Certifications/Imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   L i n e a r  A l g e b r a.pdf") },
  { name: "Multivariate Calculus", file: getAsset("images/education/Certifications/imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   M u l t i v a r i a t e  C a l c u l u s.pdf") },
  { name: "Principal Component Analysis", file: getAsset("images/education/Certifications/Imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   P C A.pdf") },
    ],
  },

  // --- University of Michigan ---
  {
    title: "Introduction to Data Science in Python (University of Michigan)",
    file: getAsset("images/education/Certifications/university of michigan- Introduction to Data Science in Python.pdf"),
  },

  // --- Duke University ---
  {
    title: "Business Metrics for Data-Driven Companies (Duke University)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Duke university- Business metrics for Data-driven companies.pdf"),
  },
  {
    title: "Mastering Data Analysis in Excel (Duke University)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Duke university- Mastering Data Analysis in Excel.pdf"),
  },

  // --- Corporate Finance Institute (CFI) ---
  {
    title: "Accounting Fundamentals (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institure- accounting fundamentals.pdf"),
  },
  {
    title: "Excel Crash Course (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institute excel crash course.pdf"),
  },
  {
    title: "Reading Financial Statements (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institute reading financial statements.pdf"),
  },

  // --- SoloLearn Programming Courses ---
  {
    title: "Python 3 Tutorial (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn python 3 tutorial course.jpg"),
  },
  {
    title: "Java Tutorial (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn java tutorial course.jpg"),
  },
  {
    title: "SQL Fundamentals (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn sql fundamental course.jpg"),
  },
  {
    title: "HTML Fundamentals (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn HTML fundamentals course.jpg"),
  },

  // --- Additional Workshops & Achievements ---
  {
    title: "Intellectual Property Rights Workshop (Central University of Haryana)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/central university of haryana: intellectual property rights.pdf"),
  },
  {
    title: "Clarivate Journal Citation Reports Workshop",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Journal citation reports: clarivate.pdf"),
  },
  {
    title: "IEEE Bangalore: Role of IEEE in Engineering",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/IEEE bangalore section role of ieee in engineering.pdf"),
  },
  {
    title: "Microsoft AI Classroom Series",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Microsoft ai classroom series certificate.pdf"),
  },
  {
    title: "HackerRank SQL (Basic)",
    file: getAsset("images/education/Certifications/HackerRank SQL basic.png"),
  },
],



  // ✅ Experience section updated
 experience: [
  {
    title: "Forward Program Participant",
    place: "McKinsey & Company",
    time: "(May 2025 – July 2025)",
    desp: [
      "Worked on structured problem-solving and prioritization exercises",
      "Defined KPIs and execution plans in business simulations",
      "Practiced data-backed decision-making and stakeholder communication",
    ],
  },
  {
    title: "Business Growth Intern",
    place: "EvolSkills",
    time: "(Apr 2025 – July 2025)",
    desp: [
      "Built Excel dashboards to track program milestones and adoption metrics",
      "Prepared weekly MIS reports on leads, conversions, and engagement",
      "Identified workflow gaps and reduced response time",
    ],
  },
  {
    title: "Research Intern",
    place: "Zeni5 (Student Neobank)",
    time: "(July 2023 – Aug 2023)",
    desp: [
      "Conducted market and product research for fintech SaaS",
      "Supported go-to-market narratives and investor pitch decks",
    ],
  },
],

    ],
  },
],


  // ✅ Projects section updated
  projects: [
  {
    title: "Tesla Stock Analysis using SQL",
    description: "Analyzed stock price movements, trading volume, and moving averages using SQL queries.",
  },
  {
    title: "Gold Prices vs Inflation Analysis",
    description: "Studied relationship between inflation trends and gold prices using Python.",
  },
  {
    title: "NIFTY 50 Stock Market Dashboard",
    description: "Built an interactive Power BI dashboard to visualize index performance.",
  },
],


  skills: {
  technical: ["Excel (Advanced)", "SQL", "Basic Python", "Power BI"],
  analytics: ["Financial Modelling", "Valuation", "Econometrics"],
  tools: ["Gretl", "PowerPoint", "Word"],
},


 contact: {
  email: 'venishettysaanvi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saanvi-venishetty',
  github: 'https://github.com/saanvi-venishetty',
},


export default siteConfig;
