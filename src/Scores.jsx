
const Scores = (props) => {
  return (
    <ul>
      <p>
        Score: {props.card.score} / 
        Date: {props.card.date}
      </p>
    </ul>
  );
}

export default Scores;