import styles from '../styles/Home.module.css'

import MapboxGLMap from '../components/MapboxGLMap.jsx'


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          I acknowledge the Traditional Owners of Australia
        </h1>

        <MapboxGLMap/>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://levimk.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 🖤💛❤️ by Levi MK {' '}
            <img src="/levimk.png" alt="Levi MK logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
