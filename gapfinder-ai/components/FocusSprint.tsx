"use client";

import { useEffect, useState } from "react";

const SPRINT_SECONDS = 25 * 60;

function clock(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

export function FocusSprint() {
  const [seconds, setSeconds] = useState(SPRINT_SECONDS);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setSeconds((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (seconds === 0 && running) {
      setRunning(false);
      setCompleted(true);
    }
  }, [seconds, running]);

  const progress = ((SPRINT_SECONDS - seconds) / SPRINT_SECONDS) * 100;

  return (
    <section className="card sprint-card">
      <div className="row between">
        <div>
          <span className="badge brand">NEW · focus sprint</span>
          <h2 style={{ marginTop: 9 }}>25-minute study session</h2>
          <p className="muted" style={{ marginBottom: 0 }}>Pick one weak topic. Work without switching tasks.</p>
        </div>
        <span className="sprint-icon" aria-hidden>◷</span>
      </div>
      <div className="sprint-clock" aria-live="polite">{clock(seconds)}</div>
      <div className="sprint-track"><span style={{ width: `${progress}%` }} /></div>
      <div className="row between sprint-controls">
        <span className="muted">{completed ? "Sprint completed. Take a short break." : running ? "Stay focused — one topic at a time." : "Ready when you are."}</span>
        <div className="row">
          <button className="btn sm" onClick={() => {
            if (seconds === 0) setSeconds(SPRINT_SECONDS);
            setCompleted(false);
            setRunning((value) => !value || seconds === 0);
          }}>
            {running ? "Pause" : seconds === 0 ? "Start again" : "Start"}
          </button>
          <button className="btn secondary sm" onClick={() => { setRunning(false); setCompleted(false); setSeconds(SPRINT_SECONDS); }}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
