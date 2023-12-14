import data from "./Data";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Employeepage() {
  let param = useParams()
  let navigate = useNavigate()

  let employee = data.filter((person)=> person.id == param.employee)
  employee = employee[0]

  return (<>

    <button onClick = {() => {navigate("/")}}>Return</button>

    <div className="employee">
      <h1>{employee.name}</h1>
      <img src={`.${employee.headshot}`}/>
      <h3>{employee.title}</h3>
      <h3>{employee.office}</h3>
      <h3>{employee.mobile}</h3>
      <h3>{employee.email}</h3>
      
      
    </div>
    </>
  )

}