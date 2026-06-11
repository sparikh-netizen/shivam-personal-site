import './styles.css';
import { createRoot } from 'react-dom/client';

const proof = [
  ['Built', 'Spice Village', "Berlin's first Indian grocery brand."],
  ['Featured', 'DW', 'Founder story covered by Deutsche Welle.'],
  ['Shipped', 'Fintech', 'Onboarding, KYC, accounting, cashflow, banking.'],
  ['Advises', 'Builders', 'First-time founders between India and Germany.'],
];

const work = [
  {
    number: '01',
    role: 'Founder',
    title: 'Created a grocery category from zero in Berlin.',
    body: 'Spice Village combined physical retail, e-commerce, supply chains, community trust, and daily execution. Not a pitch deck story - a real business with real customers.',
    tags: ['Retail ops', 'E-commerce', 'Revenue'],
  },
  {
    number: '02',
    role: 'Product',
    title: 'Led product work where friction costs growth.',
    body: 'Across fintech teams, the work has focused on onboarding, KYC, company creation, accounting, cashflow, banking flows, analytics, and API integrations.',
    tags: ['SMB flows', 'KYC', 'Analytics'],
  },
  {
    number: '03',
    role: 'Advisor',
    title: 'Helps founders find signal before scale.',
    body: 'Advisory is built for the phase where the problem is still moving: positioning, product shape, early operating rhythm, customer learning, and practical next steps.',
    tags: ['Strategy', 'Product shape', 'Founder clarity'],
  },
];

const timeline = [
  ['2017 - 2021', 'Built Spice Village', "Founded Berlin's first Indian grocery brand and served a loyal cross-border community through retail plus e-commerce operations."],
  ['2021 - 2022', 'Joined Friday Finance early', 'Led squads across accounting, cashflow, and banking products, helping the company move through its early product and funding journey.'],
  ['2022 - 2023', 'Reduced friction with data', 'Built product analytics systems, integrated key APIs, and helped reduce churn across more than 15,000 active users.'],
  ['2023 - now', 'Product operator across Europe', 'Driving onboarding, KYC optimization, and company creation flows for SMBs while advising founders through ambiguous early decisions.'],
];

const process = [
  ['01', 'Clarify the actual problem', 'Separate symptoms from constraints, customer pain from founder anxiety, and real blockers from loud distractions.'],
  ['02', 'Shape the next product move', 'Turn loose ideas into testable product direction, activation flows, operating rituals, and practical decision points.'],
  ['03', 'Build a rhythm that survives reality', 'Create a cadence for learning, shipping, measuring, and choosing again without turning the company into a process museum.'],
];

function App() {
  return (
    <>
      <header className="topbar">
        <div className="shell">
          <a className="brand" href="#top" aria-label="Shivam Parikh home">
            <span className="brand-text">
              <strong>Shivam Parikh</strong>
              <span>Founder / Product Operator / Advisor</span>
            </span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#story">Story</a>
            <a href="#advisory">Advisory</a>
            <a className="button" href="mailto:shivamparikh91@gmail.com">Work with me</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell">
            <div className="hero-layout">
              <div>
                <div className="status-row" aria-label="Current focus">
                  <span className="pill"><span className="dot"></span> Founder / Product Advisory</span>
                  <span className="pill">Berlin built / Europe focused</span>
                </div>
                <h1>I turn messy beginnings into products, teams, and traction.</h1>
                <p className="lead">I am Shivam Parikh; founder of Spice Village, product leader across various European fintechs, most recently at Qonto, and advisor to builders and dreamers who need sharper decisions amidst noise.</p>
                <div className="hero-actions">
                  <a className="button" href="mailto:shivamparikh91@gmail.com">Start a conversation</a>
                  <a className="button secondary" href="https://www.dw.com/en/spice-village-indian-supermarket-in-berlin/video-70553309">Watch the DW feature</a>
                </div>
              </div>

              <div className="media-stage" aria-label="Portrait and proof">
                <div className="portrait">
                  <img src="/shivam-portrait.png" alt="Shivam Parikh portrait" />
                </div>
                <div className="proof-float">
                  <div className="proof-chip">
                    <b>100K+</b>
                    <span>Customers served through Spice Village retail and e-commerce.</span>
                  </div>
                  <div className="proof-chip">
                    <b>DW</b>
                    <span>Featured by Deutsche Welle for the Spice Village story.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-proof" aria-label="Proof points">
              {proof.map(([label, value, text]) => (
                <div className="metric" key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="shell">
            <div className="section-head">
              <div className="eyebrow">Selected operating stories</div>
              <h2>Proof that spans shelves, software, and early-stage chaos.</h2>
            </div>
            <div className="work-grid">
              {work.map((item) => (
                <article className="work-card" key={item.number}>
                  <div className="work-meta"><span>{item.number}</span><span>{item.role}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="shell">
            <div className="section-head">
              <div className="eyebrow">Operating timeline</div>
              <h2>The useful version of the resume: what changed, what shipped, what mattered.</h2>
            </div>
            <div className="timeline-wrap">
              {timeline.map(([date, title, body]) => (
                <article className="timeline-item" key={date}>
                  <time>{date}</time>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="advisory" className="section light">
          <div className="shell">
            <div className="section-head">
              <div className="eyebrow">How I help</div>
              <h2>Useful advisory for people who are already in motion.</h2>
            </div>
            <div className="advisory-grid">
              <div className="advisory-copy">
                <h3>For founders, operators, and small teams at the uncomfortable beginning.</h3>
                <p>I am most useful when the work is real but the shape is still unclear: which customer, which product surface, which business model, which first hire, which operating rhythm, which trade-off to make this week.</p>
                <a className="button" href="mailto:shivamparikh91@gmail.com">Tell me what you are building</a>
              </div>
              <div className="process">
                {process.map(([step, title, body]) => (
                  <article className="process-row" key={step}>
                    <span className="step">{step}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell notes">
            <div>
              <div className="eyebrow">Field Notes</div>
              <h2>Short notes for builders before the answer is obvious.</h2>
              <p>Founder psychology, product judgment, Berlin operating lessons, customer learning, and the small decisions that compound into traction.</p>
            </div>
            <form className="signup">
              <label htmlFor="email">Get the next note</label>
              <div className="input-row">
                <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
                <button className="button" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <span>Shivam Parikh - founder, product operator, advisor</span>
          <span>Berlin / India / Europe</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
