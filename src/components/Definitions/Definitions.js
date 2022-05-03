import React from 'react'
import './Definitions.css';

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className='meanings'>
        { console.log("Meanings", meanings[0], word, category)}
        {
          meanings[0] && word && category === "en" && (
            <div class="singleMeaning">
              <b>Pronunciation: {meanings[0].phonetics[0] && meanings[0].phonetics[0].text} </b>
              <br></br>
              { 
                meanings[0].phonetics[0] && meanings[0].phonetics[0].audio !== "" && (
                  <audio 
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    controls
                  >
                  </audio>
                )
              }           
            </div>
          )
        }

        { word === "" ? (
            <span className="subTitle">Start by searching a word</span>
         ) : ( 
             meanings.map((meaning) => meaning.meanings.map((item) => (
                item.definitions.map((def) => (
                    <div className="singleMeaning">
                        <b>{def.definition}</b>
                        {
                          def.example && (
                            <span>
                              <hr style={{ backgroundColor: "black", width: "100%"}} />
                              <b>Example : </b> {def.example}
                            </span>
                          )
                        }
                        {def.synonyms.length > 0 && (
                          <span>
                            <hr style={{ backgroundColor: "black", width: "100%"}} />
                            <b>Synonyms : </b> {def.synonyms.map((s) => `${s}, `)}
                          </span>
                        )}
                    </div>
                ))
             ))) 
        )}
    </div>
  )
}

export default Definitions