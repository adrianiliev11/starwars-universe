import Entity from '../custom/Entity';

export default class StarWarsUniverse{
    constructor(){
      this.entities = this.init()
    }
    async init(){
      const response = await fetch('https://swapi.booost.bg/api/');
      const data = await response.json();
      const arrayEntities = Object.entries(data);
      let results = [];
      for(let i = 0; i < 6; i++){
          const entity = new Entity(arrayEntities[`${i}`][0], arrayEntities[`${i}`][1]);
          results = results.concat(entity);
      }
      return results;
    }
  }