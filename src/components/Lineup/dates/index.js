import "./dates.css";

function Dates({ lineup }) {

  const chunkedBands = chunk(lineup["secondaryBands"], 4);

  return (
    <section className="dates">
      <div className="date__text">
        <h3>{ lineup["date"] }</h3>
      </div>

      <div className="band__list">
        <h4 className="main__band">{lineup["mainBand"]}</h4>

        {chunkedBands.map((chunk, index) => (
          <div className={`band__line band__line__${index}`} key={index}>
            {chunk.map((band, index) => (
              <p key={index}>{band}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function chunk(array, size) {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
}

export default Dates;
