import Dates from "../dates";
import "./lineup.css";

function Lineup() {
  const lineup = {
    "day 1": {
      date: "SÁBADO <11/03>",
      mainBand: "System of a DOM",
      secondaryBands: [
        "Python Maiden",
        "Apollo Client 2001",
        "Bon Java",
        "NickCallback",
        "Linkin Promises",
        "Fullstack Fighters",
        "Papa React",
        "Angular in Chains",
        "Agnostic Front-end",
        "SlipkNode",
        "Pink Flutter",
        "Kiss",
      ],
    },
    "day 2": {
      date: "DOMINGO <12/03>",
      mainBand: "Lana Del Ploy",
      secondaryBands: [
        "Python Maiden",
        "Dua Lib",
        "The Backnd",
        "CSS Styles",
        "DJ Query",
        "ArrayAna Grande",
        "Miley Cypress",
        "The Bootstrap Boys",
        "Json Derulo",
        "CloudPlay",
        "Dev Lovato",
        "Kylie MiLOG"
      ],
    },
  };

  return (
    <section className="lineup">
      <h1 className="lineup__text">/Line-Up/</h1>
      <Dates lineup={lineup["day 1"]} />
      <Dates lineup={lineup["day 2"]} />
    </section>
  );
}

export default Lineup;
