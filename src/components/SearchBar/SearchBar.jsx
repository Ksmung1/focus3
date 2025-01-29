import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

export const SearchBar = ({ setResults }) => {
          const [input, setInput] = useState("");

          const localData = [
                    { id: 1, name: "Maths" },
                    { id: 2, name: "Physics" },
                    { id: 3, name: "Biology" },
                    { id: 3, name: "Chemistry" },
                    { id: 3, name: "Psychology" },
                    { id: 3, name: "Politics" },
                    { id: 3, name: "History" },
                    { id: 3, name: "Geology" },
          ]

          const filterData = (value) => {
                    const results = localData.filter((user) => {
                              return (
                                        value &&
                                        user &&
                                        user.name.toLowerCase().includes(value.toLowerCase())
                              );
                    });
                    setResults(results);
          }
          // const fetchData = (value) => {
          //           fetch("https://jsonplaceholder.typicode.com/users")
          //                     .then((response) => response.json())
          //                     .then(json => {
          //                               const results = json.filter((user) => {
          //                                         return (
          //                                                   value &&
          //                                                   user &&
          //                                                   user.name.toLowerCase().includes(value)
          //                                         )
          //                               });
          //                               setResults(results)
          //                     })
          // }


          const handleChange = (value) => {
                    setInput(value)
                    filterData(value)
          }
          return (
                    <div className="input-wrapper">
                              <FaSearch id='search-icon'></FaSearch>
                              <input placeholder="Search" value={input} onChange={(e) => handleChange(e.target.value)} />
                    </div>
          )

}
