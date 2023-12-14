import { useState } from "react"
import "./Counter.scss"


const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        counter > 0 && setCounter(counter - 1)
    }

    return (
        <div className="counter-tile">
            <h4 className="counter-tile__title">Counter</h4>
            <button
            className="counter-tile__decrement"
            aria-label="Decrement"
            onClick={handleDecrement}
            > - </button>

            <p>{counter}</p>

            <button className="counter-tile__increment"
            aria-label="Increment"
            onClick={handleIncrement}
            > + </button>

        </div>
    )
}

export default Counter