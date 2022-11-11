import { useEffect, useState } from "react"
import "../style.css"

const offenseL = ["QB", "WR", "TE", "RB", "OT", "C", "K"]

const Control = ({setData, original, data}) => {
    const [offense, setOffense] = useState(false)
    const [defense, setDefense] = useState(false)
    const [number, setNumber] = useState(false)
    const [position, setPosition] = useState(false)

    const reset = () => {
        setData(original)
        setOffense(false)
        setDefense(false)
        setNumber(false)
        setPosition(false)
    }

    const handleFilter = () => {
        if (offense && defense) setData([])
        else if (offense) {
            handleSort(original.filter((player) => offenseL.includes(player.position)))
        }
        else if (defense) {
            handleSort(original.filter((player) => !(offenseL.includes(player.position))))
        }
        else handleSort(original)
    }
    
    const handleSort = (filtered) => {
        if (number) {
            setData([...filtered].sort((a, b) => a.number - b.number))
        } else if (position) {
            setData([...filtered].sort((a, b) => a.position > b.position ? 1 : -1))
        } else setData([...filtered])
    }

    useEffect(() => {
        handleFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offense, defense, number, position])

    const getOffense = () => {
        setOffense(!offense)
        handleFilter()
    }
    
    const getDefense = () => {
        setDefense(!defense)
        handleFilter()
    }

    const byPosition = () => {
        setNumber(false)
        setPosition(!position)
        handleFilter()
    }

    const byNumber = () => {
        setPosition(false)
        setNumber(!number)
        handleFilter()
    }

    return (
        <div className="control-container">
            <h3>Sort</h3>
            <div className="control-buttons">
                {position ?
                    <button onClick={byPosition} active="true">Position</button>:
                    <button onClick={byPosition}>Position</button>
                }
                {number ?
                    <button onClick={byNumber} active="true">Number</button>:
                    <button onClick={byNumber}>Number</button>
                }
            </div>
            <h3>Filter</h3>
            <div className="control-buttons">
                {offense ? 
                    <button onClick={getOffense} active="true">Offense</button>:
                    <button onClick={getOffense}>Offense</button>
                }
                {defense ? 
                    <button onClick={getDefense} active="true">Defense</button>:
                    <button onClick={getDefense}>Defense</button>
                }
            </div>
            <h3>Reset</h3>
            <div className="control-buttons">
                <button onClick={reset}>Revert</button>
            </div>
        </div>
    )

}

export default Control;