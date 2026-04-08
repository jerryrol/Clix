export type Market = {
  id: number;
  slug: string;
  name: string;
  pair: string;
  category: string;
  subscribers: string;
  tokenPrice: string;
  change24h: number;
  volume: string;
  marketCap: string;
  liquidity: string;
  fdv: string;
  holders: string;
  description: string;
  initials: string;
  palette: [string, string];
};

export const markets: Market[] = [
  {
    id: 1,
    slug: "ari-clix",
    name: "Ari Moon",
    pair: "ARI/CLIX",
    category: "Beauty",
    subscribers: "2.4M",
    tokenPrice: "$3.82",
    change24h: 12.4,
    volume: "$1.28M",
    marketCap: "$24.6M",
    liquidity: "$6.3M",
    fdv: "$40.8M",
    holders: "18.2K",
    description:
      "뷰티 크리에이터 Ari Moon의 팬토큰 마켓으로, 라이브 커머스 우선권과 전용 드롭 접근성이 핵심 유틸리티입니다.",
    initials: "AM",
    palette: ["#00e7b4", "#0c3b32"],
  },
  {
    id: 2,
    slug: "jin-clix",
    name: "Jin Park",
    pair: "JIN/CLIX",
    category: "Gaming",
    subscribers: "1.8M",
    tokenPrice: "$2.67",
    change24h: 7.1,
    volume: "$860K",
    marketCap: "$17.9M",
    liquidity: "$4.1M",
    fdv: "$28.7M",
    holders: "11.6K",
    description:
      "Jin Park 커뮤니티의 게이밍 토큰으로, 토너먼트 시청권과 멤버 전용 디스코드 채널 접근이 연결됩니다.",
    initials: "JP",
    palette: ["#9fffe7", "#12473e"],
  },
  {
    id: 3,
    slug: "lena-clix",
    name: "Lena Wave",
    pair: "LENA/CLIX",
    category: "Lifestyle",
    subscribers: "3.1M",
    tokenPrice: "$4.25",
    change24h: -2.8,
    volume: "$1.64M",
    marketCap: "$31.2M",
    liquidity: "$7.4M",
    fdv: "$46.9M",
    holders: "22.5K",
    description:
      "Lena Wave의 라이프스타일 팬토큰으로, 브랜드 협업 사전 참여와 멤버십 리워드가 중심입니다.",
    initials: "LW",
    palette: ["#53f5cf", "#19352f"],
  },
  {
    id: 4,
    slug: "noah-clix",
    name: "Noah K",
    pair: "NOAH/CLIX",
    category: "Music",
    subscribers: "950K",
    tokenPrice: "$1.94",
    change24h: 15.6,
    volume: "$540K",
    marketCap: "$12.3M",
    liquidity: "$2.9M",
    fdv: "$19.1M",
    holders: "8.4K",
    description:
      "Noah K의 음악 팬토큰으로, 리허설 스트림과 투어 선예매, 커뮤니티 투표 유틸리티를 제공합니다.",
    initials: "NK",
    palette: ["#c7fff1", "#1e4940"],
  },
  {
    id: 5,
    slug: "sora-clix",
    name: "Sora Lee",
    pair: "SORA/CLIX",
    category: "Fitness",
    subscribers: "1.2M",
    tokenPrice: "$2.11",
    change24h: 4.9,
    volume: "$710K",
    marketCap: "$14.8M",
    liquidity: "$3.6M",
    fdv: "$23.5M",
    holders: "9.8K",
    description:
      "Sora Lee의 피트니스 토큰으로, 챌린지 참여와 전용 프로그램 접근, 오프라인 세션 혜택이 묶여 있습니다.",
    initials: "SL",
    palette: ["#2cf0c0", "#103730"],
  },
  {
    id: 6,
    slug: "theo-clix",
    name: "Theo Han",
    pair: "THEO/CLIX",
    category: "Tech",
    subscribers: "780K",
    tokenPrice: "$5.03",
    change24h: -1.4,
    volume: "$1.12M",
    marketCap: "$28.1M",
    liquidity: "$5.8M",
    fdv: "$43.4M",
    holders: "13.1K",
    description:
      "Theo Han의 테크 커뮤니티 토큰으로, 리서치 노트, AMA, 제품 베타 액세스가 주요 가치입니다.",
    initials: "TH",
    palette: ["#7cf9dd", "#20443d"],
  },
];

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug);
}

export function createAvatar(initials: string, [from, to]: [string, string]) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
      <defs>
        <linearGradient id="marketAvatar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="48" fill="#070707" />
      <circle cx="120" cy="92" r="52" fill="url(#marketAvatar)" />
      <path d="M48 212c16-42 53-66 72-66s56 24 72 66" fill="url(#marketAvatar)" opacity="0.92" />
      <text x="120" y="104" text-anchor="middle" font-size="34" font-family="Arial, Helvetica, sans-serif" font-weight="700" fill="#05110d">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
