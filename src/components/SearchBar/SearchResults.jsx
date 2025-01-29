import React from "react";
import "./SearchResults.css"
import { SearchResult } from "./SearchResults2";

export const SearchResults = ({ results }) => {
          return <div className="results-list">
                    {
                              results.map((result, id) => {
                                        return <SearchResult result={result} key={id} />
                              })
                    }
          </div>

}