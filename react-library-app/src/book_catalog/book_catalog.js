import "./book_catalog.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyDNaUGBTkz_cbAdg1_tfbFF6ZrF22i1QLw",
  authDomain: "library-app-79fea.firebaseapp.com",
  databaseURL: "https://library-app-79fea-default-rtdb.firebaseio.com",
  projectId: "library-app-79fea",
  storageBucket: "library-app-79fea.appspot.com",
  messagingSenderId: "830968153087",
  appId: "1:830968153087:web:120c8d81ef3ca1b7cc5dca",
  measurementId: "G-T0R9VJSSYQ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function BookCatalog() {
  async function getBooks() {
    try {
      const response = await axios.get(
        "https://library-app-79fea-default-rtdb.firebaseio.com/books.json"
      );
      return response.data ? Object.values(response.data) : [];
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  const [bookData, setBookData] = useState({});

  async function PostBools() {
    try {
      await axios.post(
        "https://library-app-79fea-default-rtdb.firebaseio.com/books.json",
        {
          id: bookData.id,
          title: bookData.title,
          author: bookData.author,
          isbn: bookData.isbn,
          available: true,
        }
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  async function UpdateBooks(id) {
    try {
      await axios.put(
        `https://library-app-79fea-default-rtdb.firebaseio.com/books/${id}.json`,
        {
          id: id,
          title: bookData.title,
          author: bookData.author,
          isbn: bookData.isbn,
        }
      );
    } catch (error) {
      console.error("Error updating book: ", error);
    }
  }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((dataBooks) => setBooks(dataBooks));
  }, []);

  async function Delete(id) {
    try {
      await axios.patch(
        `https://library-app-79fea-default-rtdb.firebaseio.com/books/${id}.json`,
        { available: false }
      );
      
    } catch (error) {
      console.error("Error deleting book: ", error);
    }
    
  }

  return (
    <>
      <h1>Book Catalog</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          PostBools();
        }}
      >
        <div className="All_input_books">
          <div className="input_books">
            <label>Title</label>
            <input
              required
              type="text"
              onChange={(e) =>
                setBookData({ ...bookData, title: e.target.value })
              }
            />
            <label>Author</label>
            <input
              required
              type="text"
              onChange={(e) =>
                setBookData({ ...bookData, author: e.target.value })
              }
            />
            <label>Isbn</label>
            <input
              required
              type="text"
              onChange={(e) =>
                setBookData({ ...bookData, isbn: e.target.value })
              }
            />
            {/* <label>Id</label>
            <input
              type="text"
              onChange={(e) => setBookData({ ...bookData, id: e.target.value })}
            /> */}

            <input className="submit_button" type="submit" />
          </div>
        </div>
      </form>
      <div className="AllCard">
        {books.map((book) =>
          book.available ? (
            <div className="Card" key={book.id}>
              <h2>{book.title}</h2>
              <br />
              <h3>{book.author}</h3>
              <br />
              <h5>{book.isbn}</h5>
              <br />
              <h6>{book.id}</h6>
              <div className="button_Card">
                <button
                  className="button_Edit"
                  onClick={() => UpdateBooks(book.id)}
                >
                  Edit
                </button>

                <button
                  className="button_Delete"
                  onClick={() => Delete(book.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default BookCatalog;
