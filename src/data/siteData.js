export const navigation = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Governance & Principles', path: '/governance-principles' },
      { label: 'Leadership', path: '/leadership' },
      { label: 'Partners', path: '/partners' },
      { label: 'Our Model', path: '/our-model' },
    ],
  },
  {
    label: 'Programs',
    path: '/programs',
    children: [{ label: 'Impact', path: '/impact' }],
  },
  { label: 'News & Insights', path: '/news-insights' },
  { label: 'Contribute', path: '/contribute' },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks = [
  { label: 'Our Mission', path: '/about' },
  { label: 'Governance Principles', path: '/governance-principles' },
  { label: 'Education Programs', path: '/programs' },
  { label: 'Funder Network', path: '/partners' },
  { label: 'Endowment Model', path: '/our-model' },
  { label: 'Founders', path: '/leadership' },
  { label: 'Impact Metrics', path: '/impact' },
  { label: 'News & Insights', path: '/news-insights' },
  { label: 'Partner With Us', path: '/contribute' },
  { label: 'Contact Governance', path: '/contact' },
]

export const heroStats = [
  { value: '4', label: 'Core Education Priorities' },
  { value: '7-10', label: 'Board Trustees Target' },
  { value: '100M+', label: 'Planned Endowment Goal' },
]

export const aboutKpis = [
  { value: '54', label: 'African Countries in Scope' },
  { value: '3', label: 'Flagship Scholarship Tracks' },
  { value: '5', label: 'Core Institutional Values' },
]

export const missionVisionCards = [
  {
    kind: 'mission',
    title: 'Mission',
    body:
      "To sustainably fund transformative education across Africa through equitable access, teacher development, and digital learning.",
  },
  {
    kind: 'vision',
    title: 'Vision',
    body:
      'A future where every child in Africa can access quality learning and drive sustainable development in their community.',
  },
]

export const leadershipTeam = [
  {
    name: 'Pascal Umekwe',
    role: 'Executive Director',
    summary:
      'Leads strategy, operations, and delivery of the foundation roadmap across countries and partner ecosystems.',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Terrence Oben',
    role: 'Director of Investments and Sustainability',
    summary:
      'Designs endowment and socially responsible investment strategy to create stable annual funding for programs.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Dimitri Yimga',
    role: 'Director of Partnerships and Advocacy',
    summary:
      'Builds relationships with governments, NGOs, and global donors to scale education outcomes and policy influence.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
]

export const modelPillars = [
  {
    title: 'Endowment Fund',
    body:
      'A diversified long-term investment portfolio designed to generate dependable annual returns for education programs.',
  },
  {
    title: 'Socially Responsible Investments',
    body:
      'Capital allocation prioritizing sectors aligned with mission, including technology, energy transition, and learning infrastructure.',
  },
  {
    title: 'Revenue Diversification',
    body:
      'Corporate giving, philanthropy, social enterprise, and public campaigns to reduce dependence on a single source.',
  },
]

export const cycleSteps = [
  { title: 'Needs Assessment', subtitle: 'Research and Community Consultation' },
  { title: 'Funding Allocation', subtitle: 'Priority Program Selection' },
  { title: 'Program Delivery', subtitle: 'Local Implementation Partnerships' },
  { title: 'M and E', subtitle: 'Measure, Learn, and Improve' },
]

export const impactPrograms = [
  {
    title: 'Access to Education',
    description:
      'School construction, refurbishment, scholarship access, and enrollment drives for underserved communities.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Teacher Development',
    description:
      'Pedagogy training, mentorship, and retention incentives to strengthen teaching quality in priority regions.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Digital Learning Expansion',
    description:
      'Devices, local e-learning content, and school connectivity to improve outcomes and digital literacy.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  },
]

export const contributionOptions = [
  {
    title: 'Endowment Contribution',
    detail: 'Fund the principal portfolio that sustains grants year after year.',
  },
  {
    title: 'Scholarship Sponsorship',
    detail: 'Sponsor secondary and tertiary scholars in STEM, economics, and applied innovation.',
  },
  {
    title: 'Strategic Partnership',
    detail: 'Co-design education initiatives with your institution or CSR program.',
  },
]

export const partnerTypeOptions = [
  'Individual Donor',
  'Corporate CSR Partner',
  'Community Association',
  'Philanthropic Organization',
  'International Donor Agency',
]

export const contactProfile = {
  intro:
    'AGLF facilitates the elicitation of fund objectives for major donors and coordinates with professional financial firms to execute our sovereign mandate.',
  officeAddress: [
    '8 The Green, STE B',
    'Dover, County of Kent',
    'Delaware, 19901',
  ],
  inquiryEmail: 'connect@aglf.foundation',
  inquiryNote:
    'For major donors interested in seeding Named Foundation Funds and long-term mission-aligned partnerships.',
  financialPartnerTitle: 'Financial Service Partner',
  financialPartnerNote:
    'Legacy Foundation collaborates with reputable firms, including Fidelity Investments, to execute fund design and stewardship objectives.',
}

export const scholarshipTracks = [
  {
    title: 'Financial Support',
    detail:
      'Full or partial tuition, books, accommodation support, and learning technology for selected students.',
  },
  {
    title: 'Mentorship and Career Guidance',
    detail:
      'Scholars are paired with professionals and receive leadership, career readiness, and development coaching.',
  },
  {
    title: 'Alumni and Community Impact',
    detail:
      'Graduates support future cohorts and participate in local development and peer mentorship initiatives.',
  },
]

export const scholarshipEligibility = [
  'Students from underserved or rural communities.',
  'High-performing applicants with demonstrated financial need.',
  'Priority for female students and students with disabilities.',
  'Secondary finalists and tertiary students in recognized institutions.',
  'Priority fields include STEM, economics, and development-focused disciplines.',
]

export const governanceRoles = [
  'Board of Trustees: strategic oversight, financial accountability, mission alignment.',
  'Advisory Council: external expertise on education, investment, and regional priorities.',
  'Executive Team: programs, investments, monitoring and evaluation, and partnerships.',
]

export const impactMetrics = [
  { label: 'Enrollment Growth', detail: 'Increase in school enrollment in target communities.' },
  { label: 'Scholarships Awarded', detail: 'Number of students supported across secondary and tertiary levels.' },
  { label: 'Teachers Trained', detail: 'Educators trained with measurable classroom improvement outcomes.' },
  { label: 'Digital Access', detail: 'Schools equipped with devices and improved internet connectivity.' },
]

export const funderGroups = [
  {
    title: 'Philanthropists and Foundations',
    detail:
      'Engage values-aligned global philanthropies through tailored concept notes and measurable impact plans.',
  },
  {
    title: 'International Donors',
    detail:
      'Collaborate with multilateral and bilateral organizations funding system-wide education transformation.',
  },
  {
    title: 'Corporate CSR Networks',
    detail:
      'Activate strategic CSR partnerships focused on digital learning, employability, and youth opportunity.',
  },
]

export const partnerHighlights = [
  {
    title: 'Local Ecosystem Partners',
    detail:
      'African Union CESA networks, local education NGOs, community institutions, and chambers of commerce.',
  },
  {
    title: 'International Collaborators',
    detail:
      'UN agencies, global education organizations, and social justice foundations supporting equitable access.',
  },
  {
    title: 'Engagement Formats',
    detail:
      'Annual funder summits, regional workshops, webinars, newsletters, and one-on-one strategic meetings.',
  },
]
