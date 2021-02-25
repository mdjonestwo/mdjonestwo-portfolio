import "./Home.css";

function Home() {
  return (
    <>
      <div className="bigWrapper">
        <div className="title">
          <h4>Portfolio</h4>
        </div>

        <div className="wrapper">
          <div className="image-wrap">
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
          </div>
          {/* <div className="text-wrap">
        <h3>Whats good</h3>
        <p>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div> */}
        </div>
        <div className="wrapper2">
          <div className="image-wrap3">
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
