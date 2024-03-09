const TestChild = (props) => {
  console.log("I also gone through the re-render Process");
  return (
    <div>
      <h1> Interview Question</h1>
      <p style={{ backgroundColor: "#123456", color: "white" }}>test Child</p>
    </div>
  );
};

export default TestChild;
