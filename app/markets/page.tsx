import Link from "next/link";
import { createAvatar, markets } from "./market-data";

export default function MarketsPage() {
  return (
    <main className="page-shell">
      <section className="section markets-hero">
        <div className="section-heading markets-heading">
          <span className="eyebrow">DEX Markets</span>
          <h1 className="markets-title">인플루언서 토큰이 CLIX와 거래되는 마켓</h1>
          <p>
            인기 크리에이터 토큰의 페어, 가격, 거래량, 시가총액을 한 화면에서 보고
            CLIX 생태계의 흐름을 빠르게 파악해보세요.
          </p>
        </div>
        <a href="/" className="secondary-button markets-back-link">
          랜딩으로 돌아가기
        </a>
      </section>

      <section className="section markets-section">
        <div className="markets-grid">
          {markets.map((market) => {
            const positive = market.change24h >= 0;

            return (
              <Link key={market.id} href={`/markets/${market.slug}`} className="market-card">
                <div className="market-card-top">
                  <img
                    src={createAvatar(market.initials, market.palette)}
                    alt={`${market.name} profile`}
                    className="market-avatar"
                  />
                  <div className="market-meta">
                    <span className="market-category">{market.category}</span>
                    <h2>{market.name}</h2>
                    <p>{market.subscribers} subscribers</p>
                  </div>
                </div>

                <div className="market-pair-row">
                  <span className="market-pair-label">Pair</span>
                  <strong>{market.pair}</strong>
                </div>

                <div className="market-stats">
                  <div className="stat-block">
                    <span>Token Price</span>
                    <strong>{market.tokenPrice}</strong>
                  </div>
                  <div className="stat-block">
                    <span>24h Change</span>
                    <strong className={positive ? "change-positive" : "change-negative"}>
                      {positive ? "+" : ""}
                      {market.change24h}%
                    </strong>
                  </div>
                  <div className="stat-block">
                    <span>Volume</span>
                    <strong>{market.volume}</strong>
                  </div>
                  <div className="stat-block">
                    <span>Market Cap</span>
                    <strong>{market.marketCap}</strong>
                  </div>
                </div>

                <span className="market-card-link">
                  마켓 보기
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
