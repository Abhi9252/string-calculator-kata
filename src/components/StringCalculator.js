import { useState } from "react"
import { StringCalculator } from "../utils/utils"

const Calculator = () => {
    const [calculationString, setCalculationString] = useState("")
    const [calculationResult, setCalculationResult] = useState("")

    const handleCalculation = () => {
        const result = StringCalculator.add(calculationString)
        setCalculationResult(result)
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