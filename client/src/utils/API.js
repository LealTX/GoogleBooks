import axios from "axios";
require('dotenv').config();

export default {  

  apiArticles: function(bookTitle) {
    let apikey = process.env.GOOGLE_ID;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${apikey}`;
    return axios.get(url)
      .then(res => {
        return res.data.response;
      });
  },
  // Get all books
  getArticles: function() {
    return axios.get("/api/book");
  },
  // Save an book to the database
  saveArticle: function(saveBook) {
    return axios.post("/api/book", saveBook);
  },
  // Delete an book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/book/" + id);
  }
};