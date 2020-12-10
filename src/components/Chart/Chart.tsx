import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js';
import styles from './Chart.module.css';

interface ChartProps {
    values: any[];
    labels: any[];
}
const Plot = createPlotlyComponent(Plotly);

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
