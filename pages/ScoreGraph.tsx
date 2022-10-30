import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

interface ScoreGraphProps {
    data: Array<number>;
}

export default function ScoreGraph({ data }: ScoreGraphProps) {
    const graphData = [
        {
            data: {
                lion: data[0] / 40,
                otter: data[1] / 40,
                goldenretriever: data[2] / 40,
                beaver: data[3] / 40,
            },
            meta: { color: 'blue' },
        },
    ];

    const captions = {
        // columns
        lion: 'L ' + data[0],
        otter: 'O ' + data[1],
        goldenretriever: 'G ' + data[2],
        beaver: 'B ' + data[3],
    };
    return (
        <RadarChart
            captions={captions}
            data={graphData}
            size={300}
            options={{
                scales: 4,
                captionMargin: 20,

                captionProps: () => ({
                    className: 'caption',
                    textAnchor: 'middle',
                    fontSize: 16,
                }),
            }}
        />
    );
}
