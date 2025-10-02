import './Cards.css'

function Cards({ onNavigateBack }) {
  const cardContent = {
    title: "Get your SkillScore™",
    subtitle: "Take an adaptive baseline assessment to see where you stand",
    features: [
      "Receive subscores (Technical, Project, Engagement, Soft-skills)",
      "Clear guidance to improve your skills",
      "Transparent 0-100 job-readiness score"
    ]
  };

  return (
    <div className="cards-app">
      <div className="cards-container">
        <div className="page-header">
          <h1>20 Different Card Styles & Animations</h1>
          <nav className="navigation">
            <button 
              className="nav-button"
              onClick={onNavigateBack}
            >
              ← Back to Headings
            </button>
          </nav>
        </div>
        
        <div className="cards-grid">
          {/* Card 1: Glassmorphism */}
          <div className="card card-1">
            <div className="card-icon">💎</div>
            <h3>{cardContent.title}</h3>
            <p>{cardContent.subtitle}</p>
            <ul>
              {cardContent.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="card-button">Learn more about SkillScore™ →</button>
          </div>

          {/* Card 2: Rainbow Gradient */}
          <div className="card card-2">
            <div className="card-icon">🌈</div>
            <h3>{cardContent.title}</h3>
            <p>{cardContent.subtitle}</p>
            <ul>
              {cardContent.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="card-button">Learn more about SkillScore™ →</button>
          </div>

          {/* Card 3: Neon Cyberpunk */}
          <div className="card card-3">
            <div className="card-icon">⚡</div>
            <h3>{cardContent.title}</h3>
            <p>{cardContent.subtitle}</p>
            <ul>
              {cardContent.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="card-button">Learn more about SkillScore™ →</button>
          </div>

          {/* Card 4: Ocean Wave */}
          <div className="card card-4">
            <div className="wave-bg"></div>
            <div className="card-content">
              <div className="card-icon">🌊</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 5: Fire Phoenix */}
          <div className="card card-5">
            <div className="fire-bg"></div>
            <div className="card-content">
              <div className="card-icon">🔥</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 6: Ice Crystal */}
          <div className="card card-6">
            <div className="ice-bg"></div>
            <div className="card-content">
              <div className="card-icon">❄️</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 7: Nature Forest */}
          <div className="card card-7">
            <div className="nature-bg"></div>
            <div className="card-content">
              <div className="card-icon">🌿</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 8: Golden Luxury */}
          <div className="card card-8">
            <div className="gold-bg"></div>
            <div className="card-content">
              <div className="card-icon">👑</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 9: Space Cosmic */}
          <div className="card card-9">
            <div className="stars-bg"></div>
            <div className="card-content">
              <div className="card-icon">🚀</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 10: Lightning Storm */}
          <div className="card card-10">
            <div className="lightning-bg"></div>
            <div className="card-content">
              <div className="card-icon">⚡</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 11: Sunset Gradient */}
          <div className="card card-11">
            <div className="card-icon">🌅</div>
            <h3>{cardContent.title}</h3>
            <p>{cardContent.subtitle}</p>
            <ul>
              {cardContent.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="card-button">Learn more about SkillScore™ →</button>
          </div>

          {/* Card 12: Matrix Digital */}
          <div className="card card-12">
            <div className="matrix-bg"></div>
            <div className="card-content">
              <div className="card-icon">💻</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 13: Aurora Borealis */}
          <div className="card card-13">
            <div className="aurora-bg"></div>
            <div className="card-content">
              <div className="card-icon">🌌</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 14: Lava Magma */}
          <div className="card card-14">
            <div className="lava-bg"></div>
            <div className="card-content">
              <div className="card-icon">🌋</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 15: Crystal Prism */}
          <div className="card card-15">
            <div className="prism-bg"></div>
            <div className="card-content">
              <div className="card-icon">💎</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 16: Holographic */}
          <div className="card card-16">
            <div className="holo-bg"></div>
            <div className="card-content">
              <div className="card-icon">🎭</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 17: Plasma Energy */}
          <div className="card card-17">
            <div className="plasma-bg"></div>
            <div className="card-content">
              <div className="card-icon">⚛️</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 18: Nebula Space */}
          <div className="card card-18">
            <div className="nebula-bg"></div>
            <div className="card-content">
              <div className="card-icon">🌠</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 19: Liquid Metal */}
          <div className="card card-19">
            <div className="metal-bg"></div>
            <div className="card-content">
              <div className="card-icon">🔧</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>

          {/* Card 20: Quantum Flux */}
          <div className="card card-20">
            <div className="quantum-bg"></div>
            <div className="card-content">
              <div className="card-icon">🔮</div>
              <h3>{cardContent.title}</h3>
              <p>{cardContent.subtitle}</p>
              <ul>
                {cardContent.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">Learn more about SkillScore™ →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards