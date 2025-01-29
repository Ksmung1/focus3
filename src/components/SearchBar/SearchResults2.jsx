import React from "react";
import "./SearchResults2.css"

export const SearchResult = ({ result }) => {
          const resultName = result.name

          return (
                    < div className="search-result" onClick={(e) => {
                              if (resultName === "Physics") {
                                        window.location.href = '/physics'
                              }
                              else {
                                        window.location.href = '/idjfosid'
                              }
                    }
                    }> {result.name}</div >
          )
}