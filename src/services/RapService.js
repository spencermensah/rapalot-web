import axios from 'axios';
class RapService {
  constructor() {
    this.baseUrl = "/api";
  }

  getData() {
    const url = "http://localhost:3000/mock.json";
    // RapService.getData().then(
    //   resp => {
    //     const array1 = [];
    //     for (var i = 0; i < resp.data.length; i++) {
    //       array1.push(resp.data[i].word);
    //     }
    //     return array1;
    //   }
    // );
    return axios.get(url);
  }
}

export default (new RapService()); // singleton object
