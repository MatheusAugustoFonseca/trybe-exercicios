import React from "react";

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return(
      <div>
        <h2>{name}</h2>
        <p>{`Tipo: ${type}`}</p>
        <p>{`Peso médio:${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={ image } alt={name} />
      </div>
    )
  }
}

export default Pokemon;
 // this.props.name
            // name="name"
            // type="type"
            // averageWeight="averageWeight"
