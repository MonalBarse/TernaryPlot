import React, { useState, useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';

const TernaryPlot = () => {
  const [axisLabels, setAxisLabels] = useState({
    a: 'Journalist',
    b: 'Developer',
    c: 'Designer'
  });

  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    // Plotly needs to be initialized after rawData is set
    Plotly.newPlot('root', [], {}); // Initial empty plot
  }, []);

  const makeAxis = (title, tickangle) => {
    return {
      title: title,
      titlefont: { size: 20 },
      tickangle: tickangle,
      tickfont: { size: 15 },
      tickcolor: 'rgba(0,0,0,0)',
      ticklen: 5,
      showline: true,
      showgrid: true
    };
  };

  const handleInputChange = (index, field, value) => {
    const updatedData = [...rawData];
    updatedData[index][field] = parseFloat(value); // Assuming input is numeric
    setRawData(updatedData);
  };

  const addDataPoint = () => {
    setRawData(prevData => [
      ...prevData,
      { [axisLabels.a.toLowerCase()]: 0, [axisLabels.b.toLowerCase()]: 0, [axisLabels.c.toLowerCase()]: 0, label: `point ${prevData.length + 1}` }
    ]);
  };

  const removeDataPoint = (index) => {
    setRawData(prevData => prevData.filter((_, i) => i !== index));
  };

  const plotData = [{
    type: 'scatterternary',
    mode: 'markers',
    a: rawData.map(d => d[axisLabels.a.toLowerCase()]),
    b: rawData.map(d => d[axisLabels.b.toLowerCase()]),
    c: rawData.map(d => d[axisLabels.c.toLowerCase()]),
    text: rawData.map(d => d.label),
    marker: {
      symbol: 100,
      color: '#DB7365',
      size: 14,
      line: { width: 2 }
    },
  }];

  const plotLayout = {
    ternary: {
      sum: 100,
      aaxis: makeAxis(axisLabels.a, 0),
      baxis: makeAxis(`<br>${axisLabels.b}`, 45),
      caxis: makeAxis(`<br>${axisLabels.c}`, -45),
      bgcolor: '#fff1e0',
      showgrid: true,
      gridcolor: 'rgba(0, 0, 0, 0.2)',
      gridwidth: 2
    },
    annotations: [{
      showarrow: false,
      text: 'Replica of Tom Pearson\'s <a href="http://bl.ocks.org/tomgp/7674234">block</a>',
      x: 1.0,
      y: 1.3,
      font: { size: 15 }
    }],
    paper_bgcolor: '#fff1e0',
  };

  Plotly.react('root', plotData, plotLayout); // Update the plot with new data

  const handleAxisLabelChange = (axis, value) => {
    setAxisLabels(prevLabels => ({
      ...prevLabels,
      [axis]: value
    }));
  };

  return (
    <div>
      <div>
        <label>
          Journalist:
          <input
            type="text"
            value={axisLabels.a}
            onChange={(e) => handleAxisLabelChange('a', e.target.value)}
          />
        </label>
        <label>
          Developer:
          <input
            type="text"
            value={axisLabels.b}
            onChange={(e) => handleAxisLabelChange('b', e.target.value)}
          />
        </label>
        <label>
          Designer:
          <input
            type="text"
            value={axisLabels.c}
            onChange={(e) => handleAxisLabelChange('c', e.target.value)}
          />
        </label>
      </div>
      {rawData.map((dataPoint, index) => (
        <div key={index}>
          <label>
            {axisLabels.a}:
            <input
              type="number"
              value={dataPoint[axisLabels.a.toLowerCase()]}
              onChange={(e) => handleInputChange(index, axisLabels.a.toLowerCase(), e.target.value)}
            />
          </label>
          <label>
            {axisLabels.b}:
            <input
              type="number"
              value={dataPoint[axisLabels.b.toLowerCase()]}
              onChange={(e) => handleInputChange(index, axisLabels.b.toLowerCase(), e.target.value)}
            />
          </label>
          <label>
            {axisLabels.c}:
            <input
              type="number"
              value={dataPoint[axisLabels.c.toLowerCase()]}
              onChange={(e) => handleInputChange(index, axisLabels.c.toLowerCase(), e.target.value)}
            />
          </label>
          <button onClick={() => removeDataPoint(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addDataPoint}>Add Data Point</button>
      <div id="root"></div>
    </div>
  );
};

export default TernaryPlot;
