import React from 'react'
import './Definitions.css';

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className='meanings'>
        { word === "" ? (
            <span className="subTitle">Start by searching a word</span>
         ) : ( 
             meanings.map((meaning) => meaning.meanings.map((item) => (
                item.definitions.map((def) => (
                    <div className="singleMeaning" style={{backgroundColor: "grey", color: "black"}}>
                        {def.definition}
                    </div>
                ))
             ))) 
        )}
    </div>
  )
}

export default Definitions