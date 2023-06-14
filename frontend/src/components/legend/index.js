import "./legend.css";

function Legend() {
  return (
    <div>
      <h2 className="legend__title">Legenda:</h2>
      <div className="legend__body">
        <LegendItem color="#0E7DF1" title="Pista Premium" />
        <LegendItem color="#FE016E" title="Pista Comum" />
        <LegendItem color="#01A89E" title="Cadeiras térreo" />
        <LegendItem color="#3F51B5" title="Cadeiras superiores" />
        <LegendItem color="#0E7DF1" title="Rampas" />
      </div>
    </div>
  );
}

function LegendItem({ color, title }) {
  return (
    <div className="legend__item">
      <div
        className="square"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <p className="legend__text">{title}</p>
    </div>
  );
}

export default Legend;
