import styles from '../styles/Home.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <div className={styles.footerTitleContainer}>
                    <a href="/">
                        <h2>LOGB Personality Test</h2>
                    </a>
                </div>

                <div className={styles.footerRightContent}>
                    <a
                        href="http://mrfarshtey.net/Psychology/5minute_personality_test.doc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Test content from mrfarshtey.net
                    </a>

                    <br />

                    <a
                        href="https://github.com/Kevinjchang98/LOGB-Personality-Test"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Created by Kevin Chang
                    </a>
                </div>
            </footer>
        </div>
    );
}
