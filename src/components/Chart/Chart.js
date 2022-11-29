import React from 'react';
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const valueArr = props.dataPoints.map(dataPoint=>dataPoint.valueOf());
    const totalMax = Math.max(...valueArr);

    return (
        <div className='chart'>
            {props.dataPoints.length > 0 && props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                ></ChartBar>
            )}
        </div>
    );
}

export default Chart;
