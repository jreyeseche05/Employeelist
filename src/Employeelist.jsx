import { Link } from "react-router-dom";
import data from "./Data";

export default function Employeelist() {
  return (
   <div className="name">
     
     {data.map((person) => (
      <Link to = {"/employeepage/" + person.id} key={person.id}>
        <div className="person" >
          <img src= {person.headshot} />
          <h3>{person.name}</h3>
          <h4>{person.title}</h4>
        </div>  
        </Link>
      ))}
       
    </div>
    
  );
}