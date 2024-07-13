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

async function getBooks() {
  try {
    const response = await axios.get(
      "https://library-app-79fea-default-rtdb.firebaseio.com/books.json"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

function BookCatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((dataBooka) => setBooks(dataBooka));
  }, []);

  return (
    <>
      <h1>Book Catalog</h1>
      <div className="AllCard">
        {books.map((book) => (
          <div className="Card">
            <h2>{book.title}</h2>
            <br />
            <h3>{book.author}</h3>
            <br />
            <h5>{book.isbn}</h5>
            <br />
            <h6>{book.id}</h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookCatalog;
