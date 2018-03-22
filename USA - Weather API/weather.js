class Weather {
    constructor(city, state) {
      this.apiKey = 'e1e3c9f7cb773e3f';
      this.city = city;
      this.state = state;
    }
  
    async getWeather() {
      const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
  
      const responseData = await response.json();
  
      return responseData.current_observation;
    }
  
    
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }