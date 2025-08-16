import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>About Animal Facts & Fun 🐾</h2>

      <p>
        Welcome to <strong>Animal Facts & Fun</strong>! This web app delivers
        fun and fascinating animal facts at the click of a button, along with
        entertaining GIFs to brighten your day.
      </p>

      <h3>🌐 APIs Used</h3>
      <ul>
        <li>
          <a href="https://catfact.ninja/" target="_blank" rel="noreferrer">
            Catfact.ninja
          </a>{" "}
          – for fun animal facts
        </li>
        <li>
          <a
            href="https://developers.giphy.com/"
            target="_blank"
            rel="noreferrer"
          >
            GIPHY API
          </a>{" "}
          – for animal-related GIFs
        </li>
      </ul>

      <h3>👨‍💻 About the Developer</h3>
      <p>
        Hi! I'm <strong>William WEDDERBURN</strong> and this is my final project
        for the
        <em> TripleTen Software Engineering Program</em>. My goal was to build a
        fun, interactive React app that uses real-world APIs and modern routing.
      </p>
    </div>
  );
}

export default About;
