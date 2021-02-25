import "./About.css";
import profile from "./profile-1.jpg";

function About() {
  return (
    <>
      {/* <div className="aboutLeft">
        <div className="aboutImg">
          <img src={profile}></img>
        </div>
      </div> */}
      <div className="aboutMe">
        <div className="aboutMeBody">
          <h4>About</h4>
          <p>
            Greetings! My name is Michael Jones, I am excited to share my
            creativity and positivity to a team as Full Stack or Front End Web
            Developer. I graduated from the University of New Hampshire with a
            certificate in Full Stack Web Development. I have authored and
            illustrated coloring books that have entered classrooms to educate
            children about history and I am a singer songwriter that has
            performed throughout the United States. I am a great team player,
            and communicator who brings infectious optimism to any team that I
            am a part of. My aspirations are to create captivating designs that
            excite, inspire and invoke positive emotions in people.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
