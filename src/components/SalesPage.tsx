import React, { useState } from 'react';
import './SalesPage.css';

const SalesPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  const handlePurchase = () => {
    window.open('https://mttcoaching.com/', '_blank');
  };

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="badge-container">
            <div className="badge pulse">ONLY 5 SPOTS AVAILABLE</div>
          </div>
          
          <p className="subtitle">Game Analysis & Improvement Plan</p>
          
          <h1 className="main-title">
            The <span className="highlight">Fastest</span> Way To Fix Leaks
            <br />
            That Are Costing You <span className="highlight">Week After Week</span>.
          </h1>
          
          <p className="hero-description">
            Enrico Camosci's <strong>GAME EVALUATION SYSTEM™</strong> identifies your blind spots
            <br />and builds you a step-by-step plan to immediately win more games.
          </p>
          
          <div className="watch-section">
            <p className="watch-text">Watch To Learn More</p>
            <div className="arrow-down">👇</div>
          </div>
          
          <div className="video-container">
            <div className="video-placeholder">
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.9"/>
                  <path d="M32 24L56 40L32 56V24Z" fill="#FF4501"/>
                </svg>
              </div>
              <p className="video-label">VSL</p>
            </div>
          </div>
          
          <div className="button-container">
            <button className="cta-button" onClick={handlePurchase}>
              REVIEW MY HANDS
            </button>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-card-content">
              <img src="/jordan_laurel.png" alt="Jordan Laurel" className="testimonial-avatar" />
              <div>
                <p className="testimonial-text">
                  "This was the breakthrough that I had been looking for. Before this, I was
                  losing games and not really getting anywhere. But now, I'm actually making
                  money."
                </p>
                <div className="testimonial-author">
                  <p className="author-name">JORDAN LAUREL</p>
                  <p className="author-title">Pro Poker Player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="empathy-section">
        <div className="container">
          <h2 className="section-title">Why You Keep Falling Short Of The Big Win</h2>
          
          <div className="story-content">
            <p>You've been there.</p>
            
            <p>Two long days of focus, riding the highs and lows, navigating every all-in… only to end up in 15th place.</p>
            
            <p>The payout covers a few more entries, sure – but that's not what you came for.</p>
            
            <p className="emphasis">You came for the <em>moment</em>.</p>
            
            <p>Whether it's your local casino's €200 weekend tournament or that €500 series you've been eyeing, you know you belong at that final table.</p>
            
            <div className="dream-list">
              <p>The photo with the trophy.</p>
              <p>The wire transfer that lets you surprise your spouse with a dream vacation.</p>
              <p>The story you'd be telling for years.</p>
            </div>
            
            <p className="warning">But this dream keeps slipping through your fingers.</p>
            
            <p>Just three months ago, you were at 9th place. A month before that, 11th. You thought you were on to something.</p>
            
            <p>But suddenly, you sit at 10th. Then 8th. And now at 15th.</p>
            
            <p>So the thoughts creep in:</p>
            
            <div className="doubt-box">
              <ul>
                <li>"Why do I keep falling short of a big win?"</li>
                <li>"Is it bad luck… or am I missing something I can't see?"</li>
                <li>"Am I just not talented enough?"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">
            What Separates Actual Winners From "Almost Winners"
            <br />
            <span className="subtitle">(It's Not What You Think)</span>
          </h2>
          
          <p className="lead">
            Winning big has nothing to do with grinding like a full-time pro, memorizing every
            solver output, or being born with poker talent.
          </p>
          
          <div className="problem-box">
            <h3>The Real Problem Is…</h3>
            <p className="big-text">You can't fix what you can't see.</p>
          </div>
          
          <p>Just think about it – when you bust out of a tournament, what do you focus on?</p>
          
          <p>The final hand, probably. The bad beat. The "obvious" bluff you missed.</p>
          
          <p>But the truth is, you lost the game hours ago.</p>
          
          <p className="emphasis">
            <strong>Because the mistakes that are keeping you from winning aren't the obvious
            ones – they're the ones you don't even know you're making.</strong>
          </p>
          
          <div className="question-box">
            <p className="big-question">
              But what if someone could show you exactly where those are?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-title">Here's the guy who figured it out.</h2>
          
          <div className="coach-intro">
            <div className="coach-content">
              <h3>Meet Enrico Camosci.</h3>
              
              <p>
                Italy's undisputed top-ranked MTT player, with millions in
                winnings across the world's toughest fields.
              </p>
              
              <p>
                But years ago, he was struggling and stuck just like you. So
                this future champion made a decision most players never
                even consider:
              </p>
              
              <p className="emphasis">
                <strong>He tore his game apart, one hand at a time, and rebuilt it
                around his own unique understanding of the game.</strong>
              </p>
              
              <p>
                What came out of that process was a diagnostic system that's so effective, it took him straight to
                the top.
              </p>
            </div>
            <div className="coach-image">
              <img src="/enrico_camosci.png" alt="Enrico Camosci - Italy's Top MTT Poker Player" />
              <div className="image-caption">
                <strong>Enrico Camosci</strong>
                <span>Italy's #1 MTT Professional</span>
              </div>
            </div>
          </div>
          
          <div className="system-announcement">
            <div className="system-announcement-content">
              <div className="system-announcement-image">
                <img src="/enrico_camosci 2.png" alt="Enrico Camosci - Italy's Top MTT Poker Player" />
                <div className="achievement-badge">
                  <span className="achievement-text">ITALY'S #1</span>
                  <span className="achievement-subtext">MTT PROFESSIONAL</span>
                </div>
              </div>
              <div className="system-announcement-text">
                <div className="announcement-header">
                  <h3>And now, that same system will be available to you.</h3>
                </div>
                
                <div className="imagine-grid">
                  <h4>Imagine…</h4>
                  <div className="imagine-items">
                    <div className="imagine-item">
                      <span className="imagine-icon">🏆</span>
                      <p>Walking into your next tournament with total confidence</p>
                    </div>
                    <div className="imagine-item">
                      <span className="imagine-icon">🎯</span>
                      <p>Never wondering what to do next</p>
                    </div>
                    <div className="imagine-item">
                      <span className="imagine-icon">💰</span>
                      <p>Finally hitting that big score you've been chasing</p>
                    </div>
                    <div className="imagine-item">
                      <span className="imagine-icon">🎉</span>
                      <p>Your friends watching you bag that trophy</p>
                    </div>
                  </div>
                </div>
                
                <div className="breakthrough-message">
                  <p>That's what happens when you can see and fix the leaks that have been holding you back.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Evaluation System */}
      <section className="system-section">
        <div className="container">
          <h2 className="section-title">So how do we spot your blind spots in just 72 hours?</h2>
          
          <p className="section-subtitle">Introducing…</p>
          
          <div className="system-box">
            <h3 className="system-title">The Game Evaluation System™</h3>
          </div>
          
          <p className="lead">
            Enrico spent 100+ hours testing and refining the system so that it just
            cuts straight to the truth.
          </p>
          
          <p>
            By looking at your hand histories across recent tournaments, we can
            pinpoint exactly where the blind spots are in your decision-making and give
            you simple fixes that work <strong className="underline">immediately</strong>.
          </p>
          
          <div className="benefits-box">
            <h4>What Enrico's System Does For You:</h4>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <span className="benefit-text">…Targets <span className="highlight-yellow">your biggest mistakes costing you money</span></span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🧠</span>
              <span className="benefit-text">…Provides you a custom improvement plan</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💬</span>
              <span className="benefit-text">…Gives you personalized guidance in a private call</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof-section">
        <div className="container">
          <div className="testimonial-large">
            <div className="testimonial-image">
              <img src="/angelo_mirabella.png" alt="Angelo Mirabella" />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-quote">
                "The value of this is higher than what we paid for it… I can see how much work is behind this."
              </p>
              <p className="testimonial-author">- Angelo Mirabella,</p>
              <p className="testimonial-title">Pro Poker Player</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Breakdown */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Here's Exactly How This Works:</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">Step 1</div>
              <h3>You Submit Your Hand History</h3>
              <p>We review your actual play across tournaments to uncover hidden patterns and costly habits.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">Step 2</div>
              <h3>We Spot Your Patterns</h3>
              <p>An expert coach handpicked and personally trained by Enrico reviews your play and identifies the mistakes you're making.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">Step 3</div>
              <h3>You Get Your Custom Report</h3>
              <p>We write up exactly what we found, with clear explanations of what you should do differently.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">Step 4</div>
              <h3>Live Coaching Session</h3>
              <p>Jump on a private call where we explain your report, answer all your questions, and make sure you're crystal clear on your next steps.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">Step 5</div>
              <h3>You Have Your Roadmap</h3>
              <p>You walk away with a crystal-clear roadmap for what to study, where to focus, and how to win.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title">
            What This Would Normally Cost You
            <br />
            <span className="subtitle">(And Why We're Not Charging That)</span>
          </h2>
          
          <div className="pricing-table">
            <div className="pricing-row header-row">
              <div className="pricing-cell">Service</div>
              <div className="pricing-cell">Individual Value</div>
              <div className="pricing-cell">Your Price</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-cell">Full Game Analysis</div>
              <div className="pricing-cell">€500</div>
              <div className="pricing-cell">€500</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-cell">Personalized Leak Report</div>
              <div className="pricing-cell">€250</div>
              <div className="pricing-cell">Included</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-cell">1-on-1 Strategy Session</div>
              <div className="pricing-cell">€300</div>
              <div className="pricing-cell">Included</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-cell">Personalized Study Plan</div>
              <div className="pricing-cell">€200</div>
              <div className="pricing-cell">Included</div>
            </div>
            <div className="pricing-row total-row">
              <div className="pricing-cell">Total Value</div>
              <div className="pricing-cell strikethrough">€1,250</div>
              <div className="pricing-cell highlight-price">€500</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Conversation */}
      <section className="value-section">
        <div className="container">
          <h2 className="section-title">Just think about how much time and money you've already invested.</h2>
          
          <div className="value-points">
            <ul>
              <li>The hours you'll waste this month watching random YouTube videos that contradict each other</li>
              <li>Tournament entries adding up… without getting any closer to that big win</li>
              <li>Poker books and random tips that sound good but don't seem to help when you're actually playing</li>
              <li>You're probably throwing away hundreds of euros every month on the same mistakes over and over</li>
            </ul>
          </div>
          
          <p className="emphasis">
            Every tournament you play without fixing your biggest leak is another buy-in down the drain.
          </p>
          
          <p>
            And you don't have time to waste on trial and error. Between work, family, and life, your poker time is precious.
          </p>
          
          <p className="big-text">That's exactly why this system works.</p>
          
          <div className="value-box">
            <h3 className="red-text">This isn't more random BS advice.</h3>
            <p className="big-text">
              This is getting direct answers about YOUR specific game from
              someone who's already figured it out.
            </p>
          </div>
          
          <p>To get this level of personalized analysis from a top MTT professional normally costs thousands in private coaching sessions.</p>
          
          <div className="price-explanation">
            <h3 className="highlight-yellow">So Why €500 Instead of €1,250+?</h3>
            
            <p>We're not gonna lie to you – we offer this service at a fraction of its full value because it serves a bigger purpose.</p>
            
            <p className="emphasis">
              It's a springboard towards working long-term with clients through our main <strong>training program</strong>.
            </p>
            
            <p>
              The Game Evaluation System™ is designed to give you results and to show you exactly how we work, so you can decide whether you're a fit for the full program.
            </p>
            
            <p className="big-text">But there's <strong>absolutely no pressure</strong> to do anything beyond this.</p>
            
            <p className="center-text">Take the analysis and implement it yourself?<br />Perfect.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Buy The Game Analysis & Improvement Plan<br />That's Trusted By <span className="underline">Players Worldwide</span></h2>
            <div className="button-container">
              <button className="cta-button large" onClick={handlePurchase}>Yes, Find My Leaks</button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <h2 className="section-title">Our Guarantee</h2>
          
          <div className="guarantee-box">
            <p>
              If after the session you genuinely don't feel satisfied with the
              service – simply let us know within 7 days. We'll give you a full
              refund. No questions asked.
            </p>
            
            <p className="small-text">For any inquiries, please contact us at <strong>info@godofmtt.com</strong></p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="bonuses-section">
        <div className="container">
          <h2 className="section-title">What's Also Included:</h2>
          <p className="section-subtitle">These valuable resources come with your €500 enrollment</p>
          
          <div className="bonuses-grid">
            <div className="bonus-card">
              <h3>Bonus #1</h3>
              <h4>30-Day Study Tracker Template</h4>
              <p className="bonus-value">(€67 value)</p>
              <p>A plug-and-play Notion template that helps you stick to your custom plan, track your progress</p>
            </div>
            
            <div className="bonus-card">
              <h3>Bonus #2</h3>
              <h4>Private Online Community Access</h4>
              <p className="bonus-value">(€97 value)</p>
              <p>Join a private online community where past clients and successful players share insights and keep each other accountable.</p>
            </div>
          </div>
          
          <p className="total-value">Total Additional Value: €164</p>
        </div>
      </section>

      {/* Recap Section */}
      <section className="recap-section">
        <div className="container">
          <h2 className="section-title">Quick Recap Of What You Get:</h2>
          
          <div className="recap-box">
            <ul className="check-list">
              <li>✅ A full breakdown of your tournament play</li>
              <li>✅ Tactical leak report custom to your game</li>
              <li>✅ 1-on-1 coaching call with a pro coach trained by Enrico</li>
              <li>✅ A clear study roadmap you can implement immediately</li>
              <li>✅ 2 valuable bonuses worth €164</li>
              <li>✅ 7-day guarantee if you're not satisfied</li>
            </ul>
            
            <p className="big-text center-text">All of that for just €500.</p>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="choice-section">
        <div className="container">
          <h2 className="section-title">You Have Two Options:</h2>
          
          <div className="options-grid">
            <div className="option-card">
              <h3>OPTION 1</h3>
              <p>Keep going around in circles, wondering why things aren't working.</p>
            </div>
            
            <div className="option-card highlighted">
              <h3>OPTION 2</h3>
              <p>Get professional eyes on your game so you're one step closer to winning a big tournament.</p>
            </div>
          </div>
          
          <p className="big-text center-text">You don't have to be stuck forever. Find the path to real results.</p>
          
          <div className="button-container">
            <button className="cta-button large" onClick={handlePurchase}>Start My Analysis Today</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                "What if I'm not smart enough for this?"
                <span className="faq-toggle">{openFaqIndex === 1 ? '−' : '+'}</span>
              </button>
              {openFaqIndex === 1 && (
                <div className="faq-answer">
                  <p>This system isn't about being smarter than everyone else at the table. If you can follow a recipe, you can follow our personalized plan.</p>
                  <p>We break everything down into simple, actionable steps that work regardless of your background or natural talent level.</p>
                </div>
              )}
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                "What if I'm just not naturally talented at poker?"
                <span className="faq-toggle">{openFaqIndex === 2 ? '−' : '+'}</span>
              </button>
              {openFaqIndex === 2 && (
                <div className="faq-answer">
                  <p>The players consistently winning aren't more "Naturally talented." They just have a better system.</p>
                </div>
              )}
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                "What if I'm not a high-stakes player?"
                <span className="faq-toggle">{openFaqIndex === 3 ? '−' : '+'}</span>
              </button>
              {openFaqIndex === 3 && (
                <div className="faq-answer">
                  <p>That's exactly why we created this – to help dedicated players like you fix the leaks that are keeping you from winning the tournaments you already play.</p>
                  <p>IT managers, entrepreneurs, and other working professionals use our system all the time.</p>
                </div>
              )}
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(4)}>
                "What if I don't play that many tournaments?"
                <span className="faq-toggle">{openFaqIndex === 4 ? '−' : '+'}</span>
              </button>
              {openFaqIndex === 4 && (
                <div className="faq-answer">
                  <p>Perfect. A few recent tournaments are all we need. Even if you only play weekends, we can spot the patterns holding you back.</p>
                </div>
              )}
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(5)}>
                "Is Enrico the one who does the analysis?"
                <span className="faq-toggle">{openFaqIndex === 5 ? '−' : '+'}</span>
              </button>
              {openFaqIndex === 5 && (
                <div className="faq-answer">
                  <p>Not exactly – but that's a good thing. Let us explain.</p>
                  <p>Your session is handled by Enrico's top-performing student in the previous year – personally trained, battle-tested, and handpicked by Enrico himself.</p>
                  <p>But why not Enrico?</p>
                  <p>Well, he's busy playing €100K tournaments and battling the toughest regs in the world. That's because he's not a retired-pro-turned-coach.</p>
                  <p>There's a concept in learning called the "protégé effect" where teaching something forces you to understand it on a deeper level.</p>
                  <p>You spot holes you wouldn't have noticed on your own – you tighten your thinking and sharpen your edge.</p>
                  <p>That's why Enrico coaches – teaching forces him to constantly refine his strategies and make him a better, stronger player.</p>
                  <p>This means you're learning strategies that work RIGHT NOW, not recycled concepts from years ago.</p>
                  <p>So essentially, we've created something better than Enrico analyzing every hand himself: a coach who has internalized his live, pressure-tested methodology and can give you their undivided attention…</p>
                  <p>…While Enrico continues crushing high-stakes and evolving the system to stay ahead of the curve.</p>
                </div>
              )}
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(6)}>
                "What happens after I submit my hands?"
                <span className="faq-toggle">{openFaqIndex === 6 ? '−' : '+'}</span>
              </button>
              {openFaqIndex === 6 && (
                <div className="faq-answer">
                  <p>You'll be contacted within <span className="highlight-yellow">72 hours to schedule your review</span>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="disclaimer-section">
        <div className="container">
          <div className="disclaimer-box">
            <p className="disclaimer-title">Earnings Disclaimer:</p>
            <p className="disclaimer-text">
              Poker is a game of skill and variance. While we've worked hard to create the best system that maximizes a player's earning potential, it's still highly dependent on the players themselves – the skills, time, and effort they put into this. This offer is for educational purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Enrico Camosci. All Rights Reserved.</p>
          <p>Contact: info@godofmtt.com</p>
        </div>
      </footer>
    </div>
  );
};

export default SalesPage;