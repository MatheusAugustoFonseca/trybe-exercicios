import React from "react";

class About extends React.Component {
  render() {
    const skills = ["HTML", "CSS", "JS", "Testes unitários"]
      const jsxSkills = skills.map((skill) => <li>{skill}</li>)

    return (
      <div>
        <h1>Matheus Fonseca</h1>
        <p>Estudante de desenvolvimento Web</p>
        <h2>Minhas habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;