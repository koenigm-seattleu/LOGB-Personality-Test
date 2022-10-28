import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { DndList } from './DndList';

export default function Home() {
    const data = [
        {
            description: 'Likes authority',
            category: 'L',
        },
        {
            description: 'Enthusiastic',
            category: 'O',
        },
        {
            description: 'Sensitive feelings',
            category: 'G',
        },
        {
            description: 'Likes instructions',
            category: 'B',
        },
    ];
    return (
        <div className={styles.container}>
            <Head>
                <title>LOGB Personality Test</title>
                <meta name='description' content='5-minute personality test' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>LOGB Personality test</h1>

                <DndList data={data} />
            </main>

            {/* <footer className={styles.footer}> */}
            {/*     <a */}
            {/*         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" */}
            {/*         target="_blank" */}
            {/*         rel="noopener noreferrer" */}
            {/*     > */}
            {/*         Powered by{' '} */}
            {/*         <span className={styles.logo}> */}
            {/*             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            {/*         </span> */}
            {/*     </a> */}
            {/* </footer> */}
        </div>
    );
}
