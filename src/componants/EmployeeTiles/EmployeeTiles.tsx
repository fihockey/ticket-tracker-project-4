import Counter from "../Counter/Counter"
import "./EmployeeTiles.scss"

type EmployeeTileProps = {
    name: string;
    role: string;
}

const EmployeeTile = ({ name, role }: EmployeeTileProps) => {


    return (
            <div className="employee-tile">
                <div className="employee">
                    <h1 className="employee-tile__name">{name}</h1>
                    <h2 className="employee-tile__role">{role}</h2>
                </div>
                <div>
                    <Counter/>
                </div>
            </div>
    )
}

export default EmployeeTile