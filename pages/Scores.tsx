import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

interface ScoresProps {
    scores: Array<Array<number>>;
}

enum Categories {
    'Lion' = 0,
    'Otter' = 1,
    'Golden Retriever' = 2,
    'Beaver' = 3,
}

export default function Scores({ scores }: ScoresProps) {
    const [scoreSum, setScoreSum] = useState<Array<number>>([0, 0, 0, 0]);
    const [primaryCategory, setPrimaryCategory] = useState<Categories>(
        Categories['Lion']
    );

    useEffect(() => {
        let newScoreSum = [0, 0, 0, 0];

        for (let i = 0; i < scores.length; i++) {
            for (let j = 0; j < 4; j++) {
                newScoreSum[j] += scores[i][j];
            }
        }

        let maxCategory = -1;
        let maxCategoryCount = -1;

        for (let i = 0; i < 4; i++) {
            if (maxCategoryCount < newScoreSum[i]) {
                maxCategory = i;
                maxCategoryCount = newScoreSum[i];
            }
        }

        setScoreSum(newScoreSum);
        setPrimaryCategory(maxCategory);
    }, [scores]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Scores</h1>
            <p>
                L: {scoreSum[0]} O: {scoreSum[1]} G: {scoreSum[2]} B:{' '}
                {scoreSum[3]}{' '}
            </p>
            <h2>Main animal:</h2>
            <p>{Categories[primaryCategory]}</p>
            <a href={'details/' + Categories[primaryCategory].toLowerCase()}>
                More details
            </a>
        </div>
    );
}
