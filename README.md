## Ticket Tracker
The aim of this project was to create a ticket tracking system. Each employee should be able to increment/decrement their ticket
count.


## Project Goals

1. The project should be built in React + Typescript
2. Each component should manage its own state
3. The components should be generated using a map()


## Code Snippet

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


## Getting Started

To clone down and run this project locally, follow the below steps:

1. Clone the repository: git clone [https://github.com/fihockey/ticket-tracker-project-4.git]
2. Run " npm install "
3. Run " npm run dev ", this will open a local version of the code for you to try in your default browser.


## About Me

I am a Junior Software Engineer in training, with a background in sport and education. Wild career change, right? 
My passion lies in communication, creativity, problem-solving and constantly pushing to exceed my limits. 

I love a good chat, so if you're interested in collaborating with me, or simply connecting, feel free to reach out! We'll have a virtual cuppa! ☕