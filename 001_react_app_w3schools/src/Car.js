// Components in react
function Car() {
  return <h2>I am a Car!</h2>;
}

// Components in components
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage</h1>
      <Car />
    </>
  );
}

export default Garage;
