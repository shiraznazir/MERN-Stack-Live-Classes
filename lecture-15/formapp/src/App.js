 import logo from './logo.svg';
import './App.css';
import markers from './data/forms/markers';

function InputField(props) {
  
  return <div className="ifdiv">
    <p
      style={{
        width: "200px"
      }}
    >
      {props.label}
    </p>
    <input
      name={props.name}
      type={props.type}
      value={props.value}
      style={{
        maxWidth: "400px",
        margin: "32px",
        padding: "8px"
      }}
      ></input>
  </div>
}

function App() {
  
  return (
    <div 
      className="App" 
      style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
    >
     {
       markers.map(function(marker, index){
         return( 
         <InputField 
         name={marker.name} 
         type={marker.type}
         label={marker.label}
         />
         );
       })}
    </div>
  );
}

export default App;
