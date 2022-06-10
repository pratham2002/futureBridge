import {useState,useEffect} from "react";
import './App.css';

function App() {
  const [data,setData]= useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/movies")
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch(err=>console.log(err))
  },[])
// console.log(data)

  return (
    
    <div >
      <h2>List of movies</h2>
    <table className="movietable">
      <thead>
          <th>Movie Name</th>
          <th>Release Date</th>
          <th>IMDB Rating</th>
      </thead>
      <tbody>
      {data.map((item)=>{
        return(<tr >
         <td>{item.Title}</td>
         <td>{item.ReleaseDate}</td>
         <td>{item.IMDBRating}</td>
      </tr>)
})}
</tbody>
      </table>
    </div>
  );
}

export default App;
