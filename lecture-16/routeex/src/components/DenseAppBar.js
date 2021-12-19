import * as React from 'react';
import reportWebVitals from '../reportWebVitals';


export default function DenseAppBar() {
  return (
    <div style={{
      height: "60px",
      width: "100px",
      position: "absolute",
      bottom: "0px",
      background: "#999999",
      display: "flex",
      flexDirection: "row",
    }}>
        <button> 
          One 
        </button>

        <button> 
          Two 
        </button>
        
        <button> 
          Three     
        </button>
    </div>
  );
}