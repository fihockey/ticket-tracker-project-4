import { useState } from 'react'
import EmployeeTile from './componants/EmployeeTiles/EmployeeTiles'
import team from './componants/data/data'
import './App.scss'

function App() {
  
return (
  <div className="employee-tiles">
    {team.map((teamMember) => <EmployeeTile key={teamMember.id} name={teamMember.name} role={teamMember.role}/>)}
  </div>






)

}

export default App