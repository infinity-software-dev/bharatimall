export interface InsuranceProduct {
  id: string;
  title: string;
  subCategory: string; // e.g. "life-insurance", "health-insurance", etc.
  category: "Insurance" | "Loans" | "Mutual Fund" | "Investments" | "Real Estate" | "Unlisted" | "Courses & E-Books";
  tagline: string;
  description: string;
  coverAmount?: string;
  startingPrice: string;
  period: string; // "per month" | "per year" | "one-time"
  rating: number;
  reviewsCount: number;
  badge?: string;
  icon: string;
  features: string[];
  csrOrMetric?: string; // e.g. "99.4% Claim Ratio" or "Cashless in 10,000+ Hospitals"
  popular?: boolean;
}

export const INSURANCE_TABS = [
  { id: "term-life-insurance", name: "Term Life Insurance", icon: "HeartHandshake", slug: "term-life-insurance", description: "High cover pure term life protection to safeguard your family's future" },
  { id: "health-insurance", name: "Health Insurance", icon: "Activity", slug: "health-insurance", description: "Comprehensive hospitalization, family floater & critical illness cover" },
  { id: "motor-insurance", name: "Motor Insurance", icon: "Car", slug: "motor-insurance", description: "Zero-depreciation, comprehensive cover for car & 2-wheelers" },
  { id: "general-insurance", name: "General Insurance", icon: "Building2", slug: "general-insurance", description: "Protect your business, properties, liability risks & assets" },
];

export const ALL_PRODUCTS_DATA: InsuranceProduct[] = [
  // TERM LIFE INSURANCE
  {
    id: "ins-life-1",
    title: "Term Life Shield 360",
    subCategory: "term-life-insurance",
    category: "Insurance",
    tagline: "High Cover Pure Term Life Protection",
    description: "Guaranteed financial safeguard for your family with critical illness riders and accidental death benefit up to 85 years.",
    coverAmount: "₹1 Crore to ₹5 Crore",
    startingPrice: "₹520",
    period: "per month",
    rating: 4.9,
    reviewsCount: 1840,
    badge: "Most Popular",
    icon: "🛡️",
    features: ["99.3% Claim Settlement Ratio", "Tax Benefit u/s 80C", "Zero cost return of premium option", "Instant policy issuance"],
    csrOrMetric: "99.3% Claim Ratio",
    popular: true
  },

  // HEALTH INSURANCE
  {
    id: "ins-health-1",
    title: "Family Floater Super Health Plus",
    subCategory: "health-insurance",
    category: "Insurance",
    tagline: "Complete Family Medical Shield",
    description: "Covers self, spouse, children & dependent parents with zero room rent capping and unlimited restoration of sum insured.",
    coverAmount: "₹10 Lakh to ₹1 Crore",
    startingPrice: "₹749",
    period: "per month",
    rating: 4.9,
    reviewsCount: 2310,
    badge: "Zero Deductible",
    icon: "🏥",
    features: ["14,000+ Cashless Network Hospitals", "Unlimited Sum Insured Restore", "Pre & Post Hospitalization 60/180 days", "Free Annual Health Checkups"],
    csrOrMetric: "14,000+ Hospitals",
    popular: true
  },
  {
    id: "ins-health-2",
    title: "Critical Illness & Cancer Care Shield",
    subCategory: "health-insurance",
    category: "Insurance",
    tagline: "Lump-Sum Payout on Diagnosis",
    description: "Provides instant cash lump sum payout upon first diagnosis of 36 major critical illnesses including cancer, heart attack, and stroke.",
    coverAmount: "₹25 Lakh to ₹50 Lakh",
    startingPrice: "₹380",
    period: "per month",
    rating: 4.8,
    reviewsCount: 780,
    badge: "36 Illnesses",
    icon: "🩺",
    features: ["100% Lump Sum on diagnosis", "Tax saving u/s 80D up to ₹75,000", "No hospital bills submission needed", "Worldwide treatment cover"],
    csrOrMetric: "36 Critical Illnesses"
  },
  {
    id: "ins-health-3",
    title: "Individual Super Top-Up Health",
    subCategory: "health-insurance",
    category: "Insurance",
    tagline: "Massive Coverage at Minimal Cost",
    description: "Enhance your existing employer or retail health insurance up to ₹1 Crore with affordable threshold deductibles.",
    coverAmount: "₹50 Lakh to ₹1 Crore",
    startingPrice: "₹199",
    period: "per month",
    rating: 4.7,
    reviewsCount: 512,
    badge: "Best Value",
    icon: "💊",
    features: ["Affordable high-sum insurance", "Seamless claim coordination", "Covers ICU charges & organ donor expenses", "Cashless claims network"],
    csrOrMetric: "₹1 Cr Cover @ Lowest Rate"
  },

  // MOTOR INSURANCE
  {
    id: "ins-motor-1",
    title: "Comprehensive Car Zero-Dep Shield",
    subCategory: "motor-insurance",
    category: "Insurance",
    tagline: "Bumper-to-Bumper Car Protection",
    description: "100% cashless claims with zero depreciation, engine protection, roadside breakdown assistance, and return to invoice.",
    coverAmount: "Full IDV + Zero Dep",
    startingPrice: "₹2,499",
    period: "per year",
    rating: 4.9,
    reviewsCount: 3100,
    badge: "Zero Dep Included",
    icon: "🚗",
    features: ["8,500+ Cashless Network Garages", "24x7 Roadside Assistance & Towing", "Engine & Gearbox Protection Add-on", "Key Replacement & Consumables cover"],
    csrOrMetric: "8,500+ Garages",
    popular: true
  },
  {
    id: "ins-motor-2",
    title: "Two-Wheeler Comprehensive & Own Damage",
    subCategory: "motor-insurance",
    category: "Insurance",
    tagline: "Bike & Scooter Protection",
    description: "Quick instant renewal for motorcycles and electric scooters with comprehensive accident, theft, and third-party liabilities.",
    coverAmount: "Up to ₹2 Lakh IDV",
    startingPrice: "₹540",
    period: "per year",
    rating: 4.8,
    reviewsCount: 1650,
    badge: "Instant Policy in 2 Mins",
    icon: "🛵",
    features: ["Instant policy download", "Personal accident cover up to ₹15 Lakh", "Cashless repair across India", "Discounts up to 85% NCB"],
    csrOrMetric: "2-Min Issuance"
  },
  {
    id: "ins-motor-3",
    title: "Commercial Vehicle Fleet Insurance",
    subCategory: "motor-insurance",
    category: "Insurance",
    tagline: "Trucks, Vans & Cabs Coverage",
    description: "Specialized fleet coverage for transport vehicles, tempos, and goods-carrying trucks with driver PA cover.",
    coverAmount: "Comprehensive Fleet",
    startingPrice: "₹9,999",
    period: "per year",
    rating: 4.6,
    reviewsCount: 420,
    badge: "Fleet Discount",
    icon: "🚚",
    features: ["Fleet management policy", "Goods damage in transit liability", "Driver & cleaner accident insurance", "Fast-track surveyor claim support"],
    csrOrMetric: "Fleet Specialists"
  },

  // GENERAL INSURANCE
  {
    id: "ins-corporate-1",
    title: "Group Mediclaim (GMC) for Employees",
    subCategory: "general-insurance",
    category: "Insurance",
    tagline: "Business & Employee Healthcare Plan",
    description: "Customizable health benefits for startups and enterprises with day-1 pre-existing disease cover and maternity riders.",
    coverAmount: "₹3 Lakh to ₹10 Lakh per employee",
    startingPrice: "₹299",
    period: "per employee / month",
    rating: 4.9,
    reviewsCount: 890,
    badge: "For Startups & SMBs",
    icon: "🏢",
    features: ["Day-1 pre-existing conditions covered", "Maternity & newborn baby coverage", "Digital employee portal & E-cards", "Customized wellness and teleconsultations"],
    csrOrMetric: "99.1% Claim Pass",
    popular: true
  },
  {
    id: "ins-corporate-2",
    title: "Directors & Officers (D&O) Liability",
    subCategory: "general-insurance",
    category: "Insurance",
    tagline: "Leadership Legal & Financial Defense",
    description: "Guards board directors and executives against legal claims, regulatory fines, and legal defense costs arising from managerial decisions.",
    coverAmount: "₹5 Crore to ₹100 Crore",
    startingPrice: "₹15,000",
    period: "per year",
    rating: 4.8,
    reviewsCount: 340,
    badge: "Executive Shield",
    icon: "⚖️",
    features: ["Legal defense costs advancing", "Regulatory investigation cover", "Shareholder derivative lawsuit defense", "Worldwide jurisdictional protection"],
    csrOrMetric: "Global Defense Shield"
  }
];

export const OTHER_PRODUCTS_DATA: InsuranceProduct[] = [
  // LOANS
  {
    id: "prod-loan-1",
    title: "Pre-Approved Instant Personal Loan",
    subCategory: "personal-loan",
    category: "Loans",
    tagline: "Paperless Disbursal in 2 Hours",
    description: "Get quick unsecured funds at low interest rates with flexible tenure up to 5 years and zero collateral.",
    coverAmount: "Up to ₹25 Lakh",
    startingPrice: "10.49%",
    period: "p.a. ROI",
    rating: 4.8,
    reviewsCount: 1950,
    badge: "Instant Approval",
    icon: "💰",
    features: ["Disbursal in 2 hours", "Zero collateral required", "Flexible 12 to 60 month tenure", "Minimal documentation"],
    csrOrMetric: "Fast 2-Hr Disbursal"
  },
  {
    id: "prod-loan-2",
    title: "Lowest Interest Home Loan",
    subCategory: "home-loan",
    category: "Loans",
    tagline: "Your Dream Home Financing",
    description: "Competitive home loan interest rates with customized EMI options, PMAY subsidy support, and balance transfer facility.",
    coverAmount: "Up to ₹5 Crore",
    startingPrice: "8.35%",
    period: "p.a. ROI",
    rating: 4.9,
    reviewsCount: 3200,
    badge: "Lowest Interest",
    icon: "🏡",
    features: ["Up to 30-year repayment tenure", "PMAY subsidy assistance", "Zero prepayment charges on floating rate", "Doorstep doorstep documentation"],
    csrOrMetric: "8.35% Starting ROI"
  },

  // MUTUAL FUNDS
  {
    id: "prod-mf-1",
    title: "Nifty 50 Index Wealth Builder SIP",
    subCategory: "index-fund",
    category: "Mutual Fund",
    tagline: "India Growth Story Compounder",
    description: "Low-cost index fund tracking India's top 50 bluechip giants. Ideal for steady long-term compounding with low expense ratio.",
    coverAmount: "5-Yr CAGR: 16.8%",
    startingPrice: "₹500",
    period: "minimum SIP",
    rating: 4.9,
    reviewsCount: 4120,
    badge: "5-Star Rated",
    icon: "📈",
    features: ["Ultra low expense ratio (0.15%)", "Zero exit load after 1 year", "Automated monthly SIP debit", "Backed by top fund managers"],
    csrOrMetric: "16.8% 5-Yr CAGR"
  },
  {
    id: "prod-mf-2",
    title: "ELSS Tax Saver Super Growth Fund",
    subCategory: "elss",
    category: "Mutual Fund",
    tagline: "Save ₹46,800 Tax + High Equity Returns",
    description: "Shortest 3-year lock-in tax saver mutual fund under Section 80C with aggressive equity alpha generation.",
    coverAmount: "3-Yr CAGR: 21.4%",
    startingPrice: "₹500",
    period: "minimum SIP",
    rating: 4.8,
    reviewsCount: 2840,
    badge: "Tax Saver 80C",
    icon: "📉",
    features: ["Lowest lock-in (only 3 years)", "Save tax up to ₹46,800/yr", "High-growth diversified equities", "Start with ₹500 monthly"],
    csrOrMetric: "Save Tax u/s 80C"
  },

  // INVESTMENTS
  {
    id: "prod-inv-1",
    title: "High-Yield Corporate Fixed Deposits (AAA)",
    subCategory: "fixed-deposits",
    category: "Investments",
    tagline: "Guaranteed Safe 9.10% Annual Payout",
    description: "CRISIL & ICRA AAA-rated corporate FDs offering up to 9.10% annual interest with regular monthly/quarterly payout options.",
    coverAmount: "Up to 9.10% p.a.",
    startingPrice: "₹10,000",
    period: "min deposit",
    rating: 4.8,
    reviewsCount: 1540,
    badge: "AAA Rated Safety",
    icon: "🏦",
    features: ["Higher return than traditional bank FDs", "Additional 0.50% for Senior Citizens", "Monthly/Quarterly/Annual interest payout", "100% digital onboarding"],
    csrOrMetric: "9.10% Assured ROI"
  },

  // REAL ESTATE
  {
    id: "prod-re-1",
    title: "Commercial Grade-A Fractional Real Estate",
    subCategory: "reits",
    category: "Real Estate",
    tagline: "Earn 9% Rental Yield + Capital Gain",
    description: "Invest in pre-leased IT parks & Grade-A commercial properties in Pune & Mumbai with institutional rent payouts.",
    coverAmount: "9% Rental + 7% Growth",
    startingPrice: "₹25,000",
    period: "entry ticket",
    rating: 4.9,
    reviewsCount: 880,
    badge: "High Rental Yield",
    icon: "🏙️",
    features: ["Pre-leased to Fortune 500 MNCs", "Monthly rental directly to bank account", "SEBI-compliant fractional SPV", "Complete property maintenance handled"],
    csrOrMetric: "9.0% Rental Yield"
  },

  // UNLISTED
  {
    id: "prod-unl-1",
    title: "Pre-IPO & High Growth Unicorn Shares",
    subCategory: "unlisted-equity",
    category: "Unlisted",
    tagline: "Invest Before Stock Exchange Listing",
    description: "Access curated pre-IPO shares of top Indian tech startups and profitable enterprises directly into your Demat account.",
    coverAmount: "Pre-IPO Allocation",
    startingPrice: "₹20,000",
    period: "min lot",
    rating: 4.7,
    reviewsCount: 650,
    badge: "Pre-IPO Exclusive",
    icon: "🚀",
    features: ["Direct credit into your CDSL/NSDL Demat", "Verified share authentications", "Early bird advantage before listing pop", "Expert valuation insights report"],
    csrOrMetric: "Direct Demat Credit"
  },

  // COURSES & E-BOOKS
  {
    id: "prod-edu-1",
    title: "Stock Market Masterclass & Live Trading",
    subCategory: "courses",
    category: "Courses & E-Books",
    tagline: "Beginner to Pro Trading Mastery",
    description: "Complete hands-on stock market course covering technical charts, price action, option buying/selling, and risk management.",
    coverAmount: "Lifetime Access",
    startingPrice: "₹2,999",
    period: "one-time",
    rating: 4.9,
    reviewsCount: 3420,
    badge: "Bestseller Course",
    icon: "📊",
    features: ["50+ hours HD video modules", "Live weekly mentorship sessions", "Daily trading room access", "Government recognized certificate"],
    csrOrMetric: "4.9/5 Rating (3.4k+ Reviews)"
  }
];
