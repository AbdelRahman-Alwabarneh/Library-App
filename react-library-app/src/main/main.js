import React, { useEffect } from "react";
import "./main.css";

const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون ",
      author: "ابن خلدون ",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب ",
      author: "ابو بكر الرازي ",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "كليلة ودمنة",
      author: "ابن المقفع",
      isbn: "0987654321",
    },
    {
      id: 4,
      title: "الحروب الصليبية كما رآها العرب",
      author: "أمين معلوف",
      isbn: "1122334455",
    },
    {
      id: 5,
      title: "الف ليلة وليلة",
      author: "مجهول",
      isbn: "2233445566",
    },
    {
      id: 6,
      title: "كتاب الحيوان",
      author: "الجاحظ",
      isbn: "3344556677",
    },
    {
      id: 7,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "4455667788",
    },
    {
      id: 8,
      title: " 2 ألف ليلة وليلة",
      author: "مجهول",
      isbn: "1234567890",
    },
  ],
};
function Main() {
  useEffect(() => {
    if (localStorage.getItem("welcome") === "true") {
      const FirstName = JSON.parse(localStorage.getItem("First_Name"));
      alert(`Welcome ${FirstName}`);
      localStorage.removeItem("welcome");
    }
  }, []);
  return (
    <>
      <div className="AllCard">
        {initState.books.map((element) => (
          <div className="Card">
            <h2>{element.title}</h2>
            <br />
            <h3>{element.author}</h3>
            <br />
            <h5>{element.isbn}</h5>
          </div>
        ))}
      </div>
    </>
  );
}
export default Main;
