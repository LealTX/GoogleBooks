import axios from "axios";

const url = `https://www.googleapis.com/books/v1/volumes?q=`;

export default {  

  getBooks: function(query) {
    return axios.get(url + query );
  },
  getSaved: function() {
    return axios.get("/api/books");
  },
  saveBook: function(newBook) {
    return axios.post("/api/books", newBook);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};