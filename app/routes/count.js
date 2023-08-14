import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class CountRoute extends Route {

  async model() {
    let response = await fetch('/count');
    let json = await response.json();
    return json.results.bindings[0]["triples"]["value"];
  }

}
