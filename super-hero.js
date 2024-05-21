class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName = () => this.name;
  setName = (name) => {
    this.name = name;
  };
}

const superHero = new SuperHero("batman");

module.exports = superHero;
