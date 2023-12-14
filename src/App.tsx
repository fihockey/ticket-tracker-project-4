import EmployeeTile from './componants/EmployeeTiles/EmployeeTiles'
import team from './componants/data/data'
import './App.scss'

function App() {
  
return (
  <div>
    <h1 className="site-title">Ticket Tracker</h1>
      <div className="employee-tiles">
        {team.map((teamMember) => <EmployeeTile key={teamMember.id} name={teamMember.name} role={teamMember.role}/>)}
      </div>
  </div>





)

}

export default App