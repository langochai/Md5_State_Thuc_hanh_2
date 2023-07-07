import {useState, useEffect} from 'react'
import './App.css'

function App() {
    const [state, setState] = useState("black")
    useEffect(() => {
        setInterval(() => {
            setState("pink")
        }, Math.random() * 1000)
        setInterval(() => {
            setState("blue")
        }, Math.random() * 1000)
    }, [])
    return (
        <>
            <div>
                <div
                    style={{
                        backgroundColor: state,
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: 'auto'
                    }}
                />
            </div>
        </>
    )
}

export default App
