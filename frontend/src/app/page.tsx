'use client'

import { useEffect, useState} from 'react';
import styles from './Home.module.css';

type Prediction = {
  'Home Team': string;
  'Away Team': string;
  'Predict': string,
  'Proba': [number, number, number];
}

const leagues = [
  // { name: "MLS", endpoint: "mls" },
  // { name: "BRA", endpoint: "bra" },
  // { name: "BRA-B", endpoint: "bra_b"},
  { name: "SWE-A", endpoint: "swe_a" },
  // { name: "SWE", endpoint: "swe" },
  // { name: "FIN", endpoint: "fin" },
  { name: "JPN", endpoint: "jpn" },
]

const API_BASE = process.env.BASE_URL || "https://football-prediction-backend-wad9.onrender.com" // "http://127.0.0.1:8000";

export default function Home() {
  const [selectedLeague, setSelectedLeague] = useState('mls');
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/${selectedLeague}/`)
      .then(res => res.json())
      .then(data => setPredictions(data))
      .catch(err => console.error('Error fetching data:', err))
  }, [selectedLeague])

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Leagues</h2>
        <ul>
          {leagues.map((league) => (
            <li key={league.endpoint}>
              <button
                onClick={() => setSelectedLeague(league.endpoint)}
                className={`${styles.leagueButton} ${
                  selectedLeague === league.endpoint ? styles.active : ''
                }`}
              >{league.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h1>{leagues.find((l) => l.endpoint === selectedLeague)?.name} Predictions</h1>

        <div className={styles.predictionGrid}>
          {predictions.map((item, index) => (
            <div key={index} className={styles.predictionCard}>

              <p>{item["Home Team"]}({item["Proba"][2]}) Draw({item["Proba"][1]}) {item["Away Team"]}({item["Proba"][0]}) | Prediction: {item["Predict"]}</p>
              


              {/* <p><strong>Home:</strong> {item["Home Team"]}</p>
              <p><strong>Away:</strong> {item["Away Team"]}</p>
              <p><strong>Prediction:</strong>{item["Predict"]}</p>
              <p><strong>Probabilities</strong></p>
              <ul>
                <li>Home Win: {item["Proba"][2]}</li>
                <li>Draw: {item["Proba"][1]}</li>
                <li>Away Win: {item["Proba"][0]}</li>
              </ul> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}