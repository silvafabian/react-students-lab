import Scores from "./Scores";

const Students = (props) => {

  return (
    <>
      <div>
        <h2>Name: {props.student.name}</h2>
        <h4>Bio: {props.student.bio}</h4>
      </div>
      {props.student.scores.map(card =>
        <Scores key={card} card={card} />
      )}
    </>
  );
}

export default Students;