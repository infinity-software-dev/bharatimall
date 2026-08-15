export const MF_S3_LOGOS = [
  { keywords: ['trust'], key: 'public/mutual_funds/trustmf.jpg' },
  { keywords: ['nippon', 'reliance'], key: 'public/mutual_funds/nipponmf.jpg' },
  { keywords: ['kotak'], key: 'public/mutual_funds/kotakmf.png' },
  { keywords: ['icici', 'pru', 'prudential'], key: 'public/mutual_funds/icicimf.jpg' },
  { keywords: ['hdfc'], key: 'public/mutual_funds/hdfcmf.jpg' },
  { keywords: ['axis'], key: 'public/mutual_funds/axismf.png' },
  { keywords: ['bajaj'], key: 'public/mutual_funds/bajajmf.png' },
  { keywords: ['chola', 'cholamandalam'], key: 'public/mutual_funds/cholamf.png' },
  { keywords: ['sbi', 'state bank'], key: 'public/mutual_funds/sbimf.png' },
  { keywords: ['ppfas', 'parag', 'parikh'], key: 'public/mutual_funds/ppfasmf.png' },
  { keywords: ['zerodha'], key: 'public/mutual_funds/zerodhamf.png' },
  { keywords: ['groww'], key: 'public/mutual_funds/growwmf.png' },
  { keywords: ['mirae'], key: 'public/mutual_funds/miraemf.png' },
  { keywords: ['lic'], key: 'public/mutual_funds/licmf.png' },
  { keywords: ['invesco'], key: 'public/mutual_funds/invescomf.png' },
  { keywords: ['dsp'], key: 'public/mutual_funds/dspmf.webp' },
  { keywords: ['motilal', 'oswal'], key: 'public/mutual_funds/motilalmf.webp' },
  { keywords: ['uti'], key: 'public/mutual_funds/utimf.jpg' },
  { keywords: ['pgim'], key: 'public/mutual_funds/pgimmf.webp' },
  { keywords: ['aditya', 'birla'], key: 'public/mutual_funds/adityabirlamf.webp' },
  { keywords: ['edelweiss'], key: 'public/mutual_funds/edelweissmf.png' },
  { keywords: ['360', '360 one'], key: 'public/mutual_funds/360mf.webp' },
  { keywords: ['bandhan'], key: 'public/mutual_funds/bandhanmf.jpg' },
  { keywords: ['abakkus'], key: 'public/mutual_funds/abakkusmf.webp' },
  { keywords: ['sundaram'], key: 'public/mutual_funds/sundarammf.png' },
  { keywords: ['quant'], key: 'public/mutual_funds/quantmf.png' },
  { keywords: ['canara'], key: 'public/mutual_funds/canaramf.png' },
  { keywords: ['hsbc'], key: 'public/mutual_funds/hsbcmf.webp' },
  { keywords: ['capital', 'capitalmind'], key: 'public/mutual_funds/capitalmf.webp' },
  { keywords: ['wealth'], key: 'public/mutual_funds/wealthmf.webp' },
  { keywords: ['quantum'], key: 'public/mutual_funds/quantummf.jpg' },
  { keywords: ['mahindra'], key: 'public/mutual_funds/mahindramf.png' },
  { keywords: ['franklin'], key: 'public/mutual_funds/franklinmf.png' }
];
 
export const getFundLogoUrl = (fundHouse: string): string | null => {
  if (!fundHouse) return null;
  const lowerName = fundHouse.toLowerCase();
  
  const logo = MF_S3_LOGOS.find(l => 
    l.keywords.some(k => new RegExp(`\\b${k}\\b`, 'i').test(lowerName))
  );

  if (logo && process.env.NEXT_PUBLIC_TEMPLATE_URL) {
    const baseUrl = process.env.NEXT_PUBLIC_TEMPLATE_URL;
    const encodedKey = logo.key.split('/').map(segment => encodeURIComponent(segment)).join('/');
    return `${baseUrl}/${encodedKey}`;
  }
  return null;
};
