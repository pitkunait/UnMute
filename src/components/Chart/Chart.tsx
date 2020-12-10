import React from 'react';
import Plot from 'react-plotly.js';
import styles from './Chart.module.css';

interface ChartProps {
    values: any[];
    labels: any[];
}

const Chart = (props: ChartProps) => {
    return (
        <div className={styles.Chart}>
            <Plot
                data={[{ type: 'pie', values: props.values, labels: props.labels }]}
                layout={{ width: 500, height: 500, title: 'A clicker measureR' }}
            />
        </div>
    );
};

export default Chart;
