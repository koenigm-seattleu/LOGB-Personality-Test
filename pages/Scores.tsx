import { useEffect, useState } from 'react';

interface ScoresProps {
    scores: Array<Array<number>>;
}
export default function Scores({ scores }: ScoresProps) {
    const [scoreSum, setScoreSum] = useState<Array<number>>([0, 0, 0, 0]);

    useEffect(() => {
        let newScoreSum = [0, 0, 0, 0];

        for (let i = 0; i < scores.length; i++) {
            for (let j = 0; j < 4; j++) {
                newScoreSum[j] += scores[i][j];
            }
        }

        setScoreSum(newScoreSum);
    }, [scores]);

    return (
        <div>
            <h1>Scores</h1>
            <p>
                L: {scoreSum[0]} O: {scoreSum[1]} G: {scoreSum[2]} B:{' '}
                {scoreSum[3]}{' '}
            </p>
        </div>
    );
}
