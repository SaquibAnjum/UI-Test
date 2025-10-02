import './Process.css'

function Process({ onNavigateBack }) {
  const processSteps = [
    {
      id: 1,
      title: "Rosters & Eligibility",
      description: "Import student rosters and set eligibility criteria in one centralized place.",
      icon: "👥",
      features: ["Batch roster import", "Standardized templates", "Eligibility gates", "Error reduction"]
    },
    {
      id: 2,
      title: "Drive Scheduling",
      description: "Create campus drives with employer requirements and auto-invite eligible students.",
      icon: "📅",
      features: ["Drive calendar", "Auto-invitations", "Employer requirements", "Slot management"]
    },
    {
      id: 3,
      title: "Stage Tracking",
      description: "Drag-and-drop learners through stages with complete audit trails.",
      icon: "✅",
      features: ["Kanban stages", "Audit trails", "Attendance tracking", "Progress monitoring"]
    },
    {
      id: 4,
      title: "Outcomes & Reporting",
      description: "Track offers, joiners, retention and generate CSR/NSDC reports.",
      icon: "📊",
      features: ["Outcome analytics", "CSR exports", "Retention tracking", "QR certificates"]
    }
  ];

  return (
    <div className="process-app">
      <div className="process-container">
        <div className="page-header">
          <h1>14 Different Process Visualization Styles</h1>
          <nav className="navigation">
            <button 
              className="nav-button"
              onClick={onNavigateBack}
            >
              ← Back to Cards
            </button>
          </nav>
        </div>
        
        <div className="process-grid">
          {/* Process 1: Horizontal Timeline */}
          <div className="process-item process-1">
            <h3>Horizontal Timeline</h3>
            <div className="timeline-horizontal">
              {processSteps.map((step, index) => (
                <div key={step.id} className="timeline-step">
                  <div className="step-number">{step.id}</div>
                  <div className="step-connector"></div>
                  <div className="step-content">
                    <div className="step-icon">{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 2: Vertical Flow */}
          <div className="process-item process-2">
            <h3>Vertical Flow</h3>
            <div className="flow-vertical">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flow-step">
                  <div className="step-circle">
                    <span className="step-icon">{step.icon}</span>
                    <span className="step-num">{step.id}</span>
                  </div>
                  <div className="step-details">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && <div className="flow-arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>


          {/* Process 4: Kanban Board */}
          <div className="process-item process-4">
            <h3>Kanban Board</h3>
            <div className="kanban-board">
              {processSteps.map((step) => (
                <div key={step.id} className="kanban-column">
                  <div className="kanban-header">
                    <span className="kanban-icon">{step.icon}</span>
                    <h4>{step.title}</h4>
                  </div>
                  <div className="kanban-cards">
                    {step.features.map((feature, index) => (
                      <div key={index} className="kanban-card">{feature}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 5: Progress Bar Steps */}
          <div className="process-item process-5">
            <h3>Progress Bar Steps</h3>
            <div className="progress-steps">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="steps-container">
                {processSteps.map((step) => (
                  <div key={step.id} className="progress-step">
                    <div className="progress-circle">
                      <span>{step.icon}</span>
                    </div>
                    <div className="progress-label">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process 6: Accordion Steps */}
          <div className="process-item process-6">
            <h3>Accordion Steps</h3>
            <div className="accordion-steps">
              {processSteps.map((step) => (
                <div key={step.id} className="accordion-item">
                  <div className="accordion-header">
                    <span className="accordion-number">{step.id}</span>
                    <span className="accordion-icon">{step.icon}</span>
                    <h4>{step.title}</h4>
                  </div>
                  <div className="accordion-content">
                    <p>{step.description}</p>
                    <ul>
                      {step.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 7: Zigzag Flow */}
          <div className="process-item process-7">
            <h3>Zigzag Flow</h3>
            <div className="zigzag-flow">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`zigzag-step ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="zigzag-content">
                    <div className="zigzag-icon">{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  <div className="zigzag-number">{step.id}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 8: Card Carousel */}
          <div className="process-item process-8">
            <h3>Card Carousel</h3>
            <div className="carousel-container">
              <div className="carousel-track">
                {processSteps.map((step) => (
                  <div key={step.id} className="carousel-card">
                    <div className="carousel-header">
                      <span className="carousel-number">{step.id}</span>
                      <span className="carousel-icon">{step.icon}</span>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    <div className="carousel-features">
                      {step.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process 9: Funnel Visualization */}
          <div className="process-item process-9">
            <h3>Funnel Visualization</h3>
            <div className="funnel-container">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="funnel-step"
                  style={{ width: `${100 - index * 15}%` }}
                >
                  <div className="funnel-content">
                    <span className="funnel-icon">{step.icon}</span>
                    <h4>{step.title}</h4>
                    <span className="funnel-number">{step.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 10: Hexagon Grid */}
          <div className="process-item process-10">
            <h3>Hexagon Grid</h3>
            <div className="hexagon-grid">
              {processSteps.map((step) => (
                <div key={step.id} className="hexagon-step">
                  <div className="hexagon">
                    <div className="hexagon-content">
                      <span className="hex-number">{step.id}</span>
                      <span className="hex-icon">{step.icon}</span>
                      <h5>{step.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 11: Spiral Timeline */}
          <div className="process-item process-11">
            <h3>Spiral Timeline</h3>
            <div className="spiral-container">
              <div className="spiral-center">
                <span>🎯</span>
              </div>
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="spiral-step"
                  style={{
                    transform: `rotate(${index * 90}deg) translateX(100px) rotate(-${index * 90}deg)`
                  }}
                >
                  <div className="spiral-content">
                    <span className="spiral-icon">{step.icon}</span>
                    <h5>{step.title}</h5>
                    <span className="spiral-number">{step.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 12: Metro Map */}
          <div className="process-item process-12">
            <h3>Metro Map Style</h3>
            <div className="metro-map">
              <div className="metro-line"></div>
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="metro-station"
                  style={{ left: `${index * 25}%` }}
                >
                  <div className="station-dot"></div>
                  <div className="station-info">
                    <span className="station-icon">{step.icon}</span>
                    <h5>{step.title}</h5>
                    <span className="station-number">{step.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 13: Pyramid Steps */}
          <div className="process-item process-13">
            <h3>Pyramid Steps</h3>
            <div className="pyramid-container">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="pyramid-level"
                  style={{ 
                    width: `${80 + index * 5}%`,
                    bottom: `${index * 60}px`
                  }}
                >
                  <div className="pyramid-content">
                    <span className="pyramid-icon">{step.icon}</span>
                    <h4>{step.title}</h4>
                    <span className="pyramid-number">{step.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process 14: Flowchart Diagram */}
          <div className="process-item process-14">
            <h3>Flowchart Diagram</h3>
            <div className="flowchart">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flowchart-node">
                  <div className="node-shape">
                    <span className="node-icon">{step.icon}</span>
                    <h5>{step.title}</h5>
                    <span className="node-number">{step.id}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flowchart-connector">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Process 15: Interactive Dashboard */}
          <div className="process-item process-15">
            <h3>Interactive Dashboard</h3>
            <div className="dashboard-grid">
              {processSteps.map((step) => (
                <div key={step.id} className="dashboard-widget">
                  <div className="widget-header">
                    <span className="widget-number">{step.id}</span>
                    <span className="widget-icon">{step.icon}</span>
                  </div>
                  <div className="widget-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    <div className="widget-metrics">
                      <div className="metric">
                        <span className="metric-value">95%</span>
                        <span className="metric-label">Complete</span>
                      </div>
                      <div className="metric">
                        <span className="metric-value">{step.features.length}</span>
                        <span className="metric-label">Features</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
