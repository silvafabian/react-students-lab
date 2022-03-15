const Students = (props) => {

  return (
    <>
      <div>
        <h2>{props.student.name}</h2>
        <p>{props.student.bio}</p>
      </div>
    </>
  );
}

export default Students;