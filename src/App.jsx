const liveMatches = [
  {
    stage: 'Semifinal',
    stadium: 'MetLife Stadium',
    minute: "78'",
    status: 'Live',
    teamA: { name: 'Argentina', short: 'ARG', flag: '🇦🇷', score: 2 },
    teamB: { name: 'France', short: 'FRA', flag: '🇫🇷', score: 1 },
    momentum: [86, 58],
    events: ['56’ Álvarez', '71’ Mbappé', '75’ Messi'],
  },
  {
    stage: 'Quarterfinal',
    stadium: 'SoFi Stadium',
    minute: 'FT',
    status: 'Final',
    teamA: { name: 'Brazil', short: 'BRA', flag: '🇧🇷', score: 3 },
    teamB: { name: 'Portugal', short: 'POR', flag: '🇵🇹', score: 2 },
    momentum: [74, 66],
    events: ['14’ Vinícius', '39’ Bruno F.', '88’ Rodrygo'],
  },
  {
    stage: 'Next Match',
    stadium: 'Azteca',
    minute: '21:00',
    status: 'Countdown',
    teamA: { name: 'Spain', short: 'ESP', flag: '🇪🇸', score: '-' },
    teamB: { name: 'England', short: 'ENG', flag: '🏴', score: '-' },
    momentum: [63, 68],
    events: ['Kickoff in 02:14:29', 'Fan confidence: 51%', 'Weather: Clear'],
  },
]

const standings = [
  { team: 'Argentina', flag: '🇦🇷', pts: 9, gd: '+6', form: 'WWW' },
  { team: 'France', flag: '🇫🇷', pts: 6, gd: '+3', form: 'WWL' },
  { team: 'Mexico', flag: '🇲🇽', pts: 3, gd: '-1', form: 'LWL' },
  { team: 'Japan', flag: '🇯🇵', pts: 0, gd: '-8', form: 'LLL' },
]

const teamComparison = [
  { label: 'Attack', left: 92, right: 86 },
  { label: 'Midfield', left: 89, right: 84 },
  { label: 'Defense', left: 83, right: 88 },
  { label: 'Press', left: 81, right: 79 },
  { label: 'Form', left: 94, right: 82 },
]

const topPlayers = [
  { name: 'Kylian Mbappé', team: 'France', stat: '7 goals', form: '+2 tonight' },
  { name: 'Lionel Messi', team: 'Argentina', stat: '5 assists', form: '3 key passes' },
  { name: 'Jude Bellingham', team: 'England', stat: '89% pass rate', form: 'engine room' },
  { name: 'Vinícius Jr.', team: 'Brazil', stat: '14 chances', form: 'hot streak' },
]

const fanMoments = [
  'Argentina have scored in 11 straight matches.',
  'Brazil lead the knockout bracket in big chances created.',
  'Spain vs England is trending across fan channels tonight.',
]

function MetricBar({ label, left, right }) {
  const total = left + right
  const leftWidth = `${(left / total) * 100}%`
  const rightWidth = `${(right / total) * 100}%`

  return (
    <div className="metric-row">
      <div className="metric-score">{left}</div>
      <div className="metric-track-wrap">
        <div className="metric-label">{label}</div>
        <div className="metric-track">
          <span className="metric-fill metric-fill-left" style={{ width: leftWidth }} />
          <span className="metric-fill metric-fill-right" style={{ width: rightWidth }} />
        </div>
      </div>
      <div className="metric-score">{right}</div>
    </div>
  )
}

function MatchCard({ match, featured = false }) {
  return (
    <article className={`panel match-card ${featured ? 'featured' : ''}`}>
      <div className="panel-topline">
        <span>{match.stage}</span>
        <span>{match.stadium}</span>
      </div>

      <div className="match-status-row">
        <span className={`status-pill ${match.status.toLowerCase()}`}>{match.status}</span>
        <span className="match-minute">{match.minute}</span>
      </div>

      <div className="score-row">
        <div className="team-mark">
          <span className="team-flag">{match.teamA.flag}</span>
          <div>
            <h3>{match.teamA.short}</h3>
            <p>{match.teamA.name}</p>
          </div>
        </div>

        <div className="score-core">
          <span>{match.teamA.score}</span>
          <small>:</small>
          <span>{match.teamB.score}</span>
        </div>

        <div className="team-mark team-mark-end">
          <div>
            <h3>{match.teamB.short}</h3>
            <p>{match.teamB.name}</p>
          </div>
          <span className="team-flag">{match.teamB.flag}</span>
        </div>
      </div>

      <div className="momentum">
        <div className="momentum-track">
          <span style={{ width: `${match.momentum[0]}%` }} />
        </div>
        <div className="momentum-labels">
          <small>{match.teamA.short} pressure</small>
          <small>{match.teamB.short} transitions</small>
        </div>
      </div>

      <ul className="event-list">
        {match.events.map((event) => (
          <li key={event}>{event}</li>
        ))}
      </ul>
    </article>
  )
}

function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="pitch-grid" />

      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">2026 World Cup fan control room</span>
          <h1>LIVE FAN DASHBOARD</h1>
          <p>
            A cinematic match hub with live score drama, group table pressure, and side-by-side team
            analysis built for quick demos and big tournament energy.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Favorite Team: Argentina</button>
            <button className="ghost-btn">Next Match Alert</button>
          </div>
        </div>

        <div className="hero-spotlight panel">
          <div className="spotlight-heading">
            <span>Spotlight</span>
            <span>Tonight</span>
          </div>
          <div className="spotlight-clubs">
            <div>
              <strong>Spain</strong>
              <small>precision build-up</small>
            </div>
            <div className="versus-ring">VS</div>
            <div>
              <strong>England</strong>
              <small>vertical pressure</small>
            </div>
          </div>
          <div className="countdown-band">
            <span>Kickoff countdown</span>
            <strong>02 : 14 : 29</strong>
          </div>
        </div>
      </header>

      <main className="dashboard-grid">
        <section className="stack-lg">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Match center</span>
              <h2>Live and upcoming</h2>
            </div>
            <div className="section-chip">3 active cards</div>
          </div>

          <div className="match-grid">
            {liveMatches.map((match, index) => (
              <MatchCard key={`${match.teamA.short}-${match.teamB.short}`} match={match} featured={index === 0} />
            ))}
          </div>
        </section>

        <aside className="side-column">
          <section className="panel stack-md">
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">Group pulse</span>
                <h2>Standings</h2>
              </div>
              <div className="section-chip">Group A</div>
            </div>

            <div className="table-wrap">
              <div className="table-head">
                <span>Team</span>
                <span>Pts</span>
                <span>GD</span>
                <span>Form</span>
              </div>

              {standings.map((row) => (
                <div className="table-row" key={row.team}>
                  <span className="team-cell">
                    <span>{row.flag}</span>
                    {row.team}
                  </span>
                  <span>{row.pts}</span>
                  <span>{row.gd}</span>
                  <span className="form-pill">{row.form}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel ticker-panel">
            <div className="ticker-label">Fan ticker</div>
            <div className="ticker-track">
              <div className="ticker-content">
                {[...fanMoments, ...fanMoments].map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          </section>
        </aside>

        <section className="panel compare-panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Team lab</span>
              <h2>Argentina vs France</h2>
            </div>
            <div className="section-chip">Semifinal profile</div>
          </div>

          <div className="compare-crest-row">
            <div className="compare-team">
              <span className="team-flag">🇦🇷</span>
              <div>
                <h3>Argentina</h3>
                <p>Fluid attack and crowd momentum</p>
              </div>
            </div>
            <div className="compare-center">Data duel</div>
            <div className="compare-team compare-team-right">
              <div>
                <h3>France</h3>
                <p>Explosive transitions and depth</p>
              </div>
              <span className="team-flag">🇫🇷</span>
            </div>
          </div>

          <div className="metric-list">
            {teamComparison.map((item) => (
              <MetricBar key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section className="panel players-panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Top performers</span>
              <h2>Players in form</h2>
            </div>
            <div className="section-chip">Knockout round</div>
          </div>

          <div className="players-grid">
            {topPlayers.map((player) => (
              <article className="player-card" key={player.name}>
                <div className="player-orb" />
                <div className="player-copy">
                  <h3>{player.name}</h3>
                  <p>{player.team}</p>
                </div>
                <div className="player-stat">{player.stat}</div>
                <small>{player.form}</small>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
