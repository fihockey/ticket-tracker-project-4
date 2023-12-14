import { team } from "../data/data"
import Counter from "../Counter/Counter"
import "./EmployeeTiles.scss"

type EmployeeTileProps = {
    name: string;
    role: string;
}

const EmployeeTile = ({ name, role }: EmployeeTileProps) => {


    return (
            <div className="employee-tile">
                <h1 className="employee-tile__name">{name}</h1>
                <h2 className="employee-tile__role">{role}</h2>
                <div>
                    <Counter/>
                </div>
            </div>
    )
}

export default EmployeeTile