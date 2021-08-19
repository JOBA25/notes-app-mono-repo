import axios from "axios";
// const baseUrl = ""
export const getAllNotes = () =>{
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      const {data} = response;
      return data
    })
}