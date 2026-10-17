import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

function CharacterPlaceholder({ side, label }) {
  return (
    <motion.div
      className={`hero-character hero-character-${side}`}
      initial={{ opacity: 0, x: side === 'left' ? -42 : 42 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.25, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-label={label}
    >
      <div className="character-glow" />
      <div className="character-head">
        <span className="character-eye character-eye-left" />
        <span className="character-eye character-eye-right" />
      </div>
      <div className="character-body" />
      <span className="character-placeholder-label">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
        <span className="ambient-star star-one" />
        <span className="ambient-star star-two" />
        <span className="ambient-star star-three" />
        <span className="ambient-star star-four" />
      </div>

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-kicker">23 · 12 · 2016 — 23 · 12 · 2026</p>
        <h1 className="hero-title">我们的第一个10年</h1>
        <p className="hero-subtitle">Happy 10th Anniversary, my dearest.</p>
      </motion.div>

      <div className="hero-scene">
        <CharacterPlaceholder side="left" label="Your character" />

        <motion.div
          className="envelope-stage"
          initial={{ opacity: 0, scale: 0.9, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.35, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="envelope-aura" />
          <Link className="envelope-link" to="/universe" aria-label="Begin our story">
            <div className="envelope">
              <div className="envelope-back" />
              <div className="envelope-letter">
                <span>10</span>
                <small>YEARS</small>
              </div>
              <div className="envelope-fold envelope-fold-left" />
              <div className="envelope-fold envelope-fold-right" />
              <div className="envelope-fold envelope-fold-bottom" />
              <div className="envelope-flap" />
              <div className="wax-seal">B</div>
            </div>
          </Link>
          <p className="hero-cta-label">Begin our story</p>
        </motion.div>

        <CharacterPlaceholder side="right" label="Her character" />
      </div>

      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  )
}
