import { useState } from "react"
import { StringCalculator } from "../utils/utils"

const Calculator = () => {
    const [calculationString, setCalculationString] = useState("")
    const [calculationResult, setCalculationResult] = useState("")

    const handleCalculation = () => {
        try {
            const result = StringCalculator.add(calculationString)
            setCalculationResult(result)
        } catch (error) {
            console.log("Error", error)
        }
    }
    return (
        <div>
            <h1>String Calculator</h1>
            <input value={calculationString} onChange={(e) => setCalculationString(e.target.value)} />
            <button onClick={handleCalculation}>Calculation</button>
            <h3>{calculationResult}</h3>
        </div>
    )
}

export default Calculator