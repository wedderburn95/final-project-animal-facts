import "./AnimalFact.css";

function AnimalFact({ fact }) {
  return (
    <div className="animal__fact">
      <h3>Animal Fact</h3>
      <p>{fact}</p>
    </div>
  );
}

export default AnimalFact;
