import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Habilidades</h1>
      <hr/><br></br><br></br>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Webpack</li>
          <li>Chrome Dev</li>
          <li>Git</li>
          <li>Github</li>
        </div>       
      </div>
    </div>
  );
};

export default About;
