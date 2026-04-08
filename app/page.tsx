import { WaitlistForm } from "./components/waitlist-form";

const features = [
  {
    title: "토큰 기반 팬 참여",
    description:
      "팬은 단순 팔로워가 아니라, 인플루언서 생태계에 더 가까이 참여하는 멤버가 됩니다.",
  },
  {
    title: "유틸리티 중심 설계",
    description:
      "라이브 우선권, 한정 굿즈, 비공개 채널, 이벤트 투표 등 실제 활용 가치를 중심으로 설계됩니다.",
  },
  {
    title: "브랜드 확장 도구",
    description:
      "인플루언서는 커뮤니티를 수익화하는 동시에 충성도 높은 팬층과 장기 관계를 구축할 수 있습니다.",
  },
];

const tokenModel = [
  "인플루언서마다 고유 팬토큰이 발행되고, 커뮤니티의 핵심 멤버십 역할을 합니다.",
  "토큰 보유량 또는 보유 기간에 따라 접근 권한과 혜택 레벨이 달라집니다.",
  "혜택은 실사용 중심으로 연결되어 팬 경험과 크리에이터 수익 구조를 동시에 강화합니다.",
];

const steps = [
  {
    step: "01",
    title: "크리에이터 온보딩",
    description:
      "인플루언서가 브랜드와 커뮤니티 전략에 맞는 토큰 유틸리티를 설정합니다.",
  },
  {
    step: "02",
    title: "팬토큰 오픈",
    description:
      "팬은 간단한 참여 흐름을 통해 토큰을 획득하고, 전용 혜택에 접근합니다.",
  },
  {
    step: "03",
    title: "리워드와 성장",
    description:
      "활동, 보유, 참여에 따라 더 많은 경험과 보상이 쌓이며 커뮤니티가 성장합니다.",
  },
];

const faqs = [
  {
    question: "Clix는 어떤 서비스인가요?",
    answer:
      "Clix는 인플루언서가 팬토큰을 통해 커뮤니티 멤버십과 리워드를 운영할 수 있도록 돕는 플랫폼입니다.",
  },
  {
    question: "암호화폐에 익숙하지 않아도 사용할 수 있나요?",
    answer:
      "네. 복잡한 Web3 진입장벽을 낮춘 경험을 목표로 하며, 일반 사용자도 쉽게 참여할 수 있는 플로우를 지향합니다.",
  },
  {
    question: "팬토큰은 어디에 쓰이나요?",
    answer:
      "전용 콘텐츠, 이벤트 우선권, 커뮤니티 투표, 굿즈 및 협업 캠페인 접근 권한 등에 활용될 수 있습니다.",
  },
  {
    question: "지금 바로 참여할 수 있나요?",
    answer:
      "현재는 대기자 명단을 모집 중이며, 사전 등록자에게 출시 소식과 얼리 액세스 기회가 먼저 제공됩니다.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">Web3 Fan Economy for Influencers</span>
          <h1>
            팬의 애정을
            <br />
            토큰화된 참여로 연결하는 플랫폼, Clix
          </h1>
          <p className="hero-text">
            Clix는 인플루언서와 팬 사이의 관계를 더 깊고 지속 가능한 커뮤니티로
            확장합니다. 팬토큰을 통해 접근 권한, 리워드, 참여 경험을 하나의 흐름으로
            설계하세요.
          </p>
          <div className="hero-actions">
            <a href="/markets" className="primary-button">
              대기자 신청하기
            </a>
            <a href="#how-it-works" className="secondary-button">
              작동 방식 보기
            </a>
            <a href="/markets" className="market-icon-link" aria-label="Go to markets">
              <span className="market-icon-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 16.5 9.5 12l3 3 6.5-7.5M14 7.5h5v5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="market-icon-text">
                <strong>Open Markets</strong>
                <small>DEX pairs</small>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="glass-panel">
            <div className="token-pill">CLIX / FAN TOKEN</div>
            <div className="token-grid">
              <div>
                <span className="label">Utility</span>
                <strong>Access + Rewards</strong>
              </div>
              <div>
                <span className="label">Community</span>
                <strong>Creator-led</strong>
              </div>
              <div>
                <span className="label">Experience</span>
                <strong>Members Only</strong>
              </div>
              <div>
                <span className="label">Growth</span>
                <strong>Fan-powered</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Service</span>
          <h2>크리에이터 경제를 위한 더 선명한 팬 플랫폼</h2>
          <p>
            광고 중심의 일회성 관계를 넘어, 보상과 참여가 이어지는 지속 가능한 팬
            커뮤니티 구조를 제안합니다.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section token-section">
        <div className="section-heading">
          <span className="eyebrow">Token Structure</span>
          <h2>인플루언서 토큰은 멤버십과 유틸리티를 함께 담습니다</h2>
        </div>
        <div className="token-layout">
          <div className="token-visual">
            <div className="orbit-card">
              <div className="orbit-core">CLIX</div>
              <span>Exclusive Access</span>
              <span>Voting Power</span>
              <span>Reward Layer</span>
            </div>
          </div>
          <div className="token-points">
            {tokenModel.map((item) => (
              <div key={item} className="token-point">
                <span className="point-index" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="section-heading">
          <span className="eyebrow">How It Works</span>
          <h2>3단계로 시작하는 Clix 생태계</h2>
        </div>
        <div className="steps-grid">
          {steps.map((item) => (
            <article key={item.step} className="step-card">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>자주 묻는 질문</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="waitlist" className="section waitlist-section">
        <div className="waitlist-copy">
          <span className="eyebrow">Waitlist</span>
          <h2>Clix의 첫 출시 소식을 가장 먼저 받아보세요</h2>
          <p>
            이메일을 남겨주시면 베타 오픈, 얼리 액세스, 주요 업데이트를 순차적으로
            안내해드립니다.
          </p>
        </div>
        <WaitlistForm />
      </section>

      <footer className="footer">
        <div>
          <strong>Clix</strong>
          <p>Influencer Fan Token Platform</p>
        </div>
        <p>© 2026 Clix. All rights reserved.</p>
      </footer>
    </main>
  );
}
