import Link from "next/link";
import { notFound } from "next/navigation";
import { createAvatar, getMarketBySlug } from "../market-data";

type MarketDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const trades = [
  { side: "Buy", price: "3.84 CLIX", size: "12.4K", time: "12:43" },
  { side: "Sell", price: "3.79 CLIX", size: "8.1K", time: "12:40" },
  { side: "Buy", price: "3.82 CLIX", size: "15.7K", time: "12:38" },
  { side: "Buy", price: "3.80 CLIX", size: "4.6K", time: "12:35" },
];

export default async function MarketDetailPage({ params }: MarketDetailPageProps) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);

  if (!market) {
    notFound();
  }

  const positive = market.change24h >= 0;

  return (
    <main className="page-shell">
      <section className="section market-detail-hero">
        <div className="market-detail-copy">
          <Link href="/markets" className="detail-back-link">
            ← All Markets
          </Link>
          <div className="market-detail-head">
            <img
              src={createAvatar(market.initials, market.palette)}
              alt={`${market.name} profile`}
              className="market-detail-avatar"
            />
            <div>
              <span className="market-category">{market.category}</span>
              <h1>{market.pair}</h1>
              <p>
                {market.name} · {market.subscribers} subscribers
              </p>
            </div>
          </div>
          <p className="market-detail-description">{market.description}</p>
          <div className="market-highlight-grid">
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
        </div>

        <aside className="trade-panel">
          <div className="trade-panel-header">
            <span className="eyebrow">Trade</span>
            <strong>{market.pair}</strong>
          </div>
          <div className="trade-tabs">
            <button className="trade-tab trade-tab-active" type="button">
              Buy
            </button>
            <button className="trade-tab" type="button">
              Sell
            </button>
          </div>
          <div className="trade-inputs">
            <label className="trade-field">
              <span>Pay</span>
              <div>
                <strong>250</strong>
                <em>CLIX</em>
              </div>
            </label>
            <label className="trade-field">
              <span>Receive</span>
              <div>
                <strong>65.4</strong>
                <em>{market.pair.split("/")[0]}</em>
              </div>
            </label>
          </div>
          <button className="primary-button trade-submit" type="button">
            Swap on Clix DEX
          </button>
        </aside>
      </section>

      <section className="section market-detail-grid">
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <span className="market-pair-label">Price Overview</span>
              <h2>{market.pair}</h2>
            </div>
            <span className={positive ? "change-positive chart-change" : "change-negative chart-change"}>
              {positive ? "+" : ""}
              {market.change24h}% today
            </span>
          </div>
          <div className="chart-area">
            <div className="chart-line" />
            <div className="chart-dots">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="market-info-card">
          <h2>Market Stats</h2>
          <div className="market-info-list">
            <div>
              <span>Liquidity</span>
              <strong>{market.liquidity}</strong>
            </div>
            <div>
              <span>FDV</span>
              <strong>{market.fdv}</strong>
            </div>
            <div>
              <span>Holders</span>
              <strong>{market.holders}</strong>
            </div>
            <div>
              <span>Subscribers</span>
              <strong>{market.subscribers}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section recent-trades-card">
        <div className="chart-header">
          <div>
            <span className="market-pair-label">Recent Activity</span>
            <h2>Recent Trades</h2>
          </div>
        </div>
        <div className="trade-table">
          <div className="trade-table-row trade-table-head">
            <span>Side</span>
            <span>Price</span>
            <span>Size</span>
            <span>Time</span>
          </div>
          {trades.map((trade, index) => (
            <div key={`${trade.side}-${trade.time}-${index}`} className="trade-table-row">
              <span className={trade.side === "Buy" ? "change-positive" : "change-negative"}>{trade.side}</span>
              <span>{trade.price}</span>
              <span>{trade.size}</span>
              <span>{trade.time}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
