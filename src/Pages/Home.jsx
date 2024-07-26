import homePreview from "../assets/home_preview.png";

function Home() {
  return (
    <div className="row">
      <div className="column">
        <h2>Welcome to the free Time Tracker App</h2>
        <h3>
          Created with deep workers in mind - to track hours spent for
          activities in deep work
        </h3>
        <h3>Get Started by registering/logging in</h3>
        <p>
          More features might come by, like grouping activities, filtering based
          on time, etc.
        </p>
        <p>Encrypted SQLlite database. Hosted on Azure.</p>
        <h3>Preview below (see it after logging in):</h3>
        <img className="home-preview-img" src={homePreview} alt="app_preview" />
      </div>
    </div>
  );
}

export default Home;
