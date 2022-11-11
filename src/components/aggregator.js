import "../style.css"

const Aggregator = ({aggregator, experience, setAggregator, setExp}) => {
    return (
        <>
            {aggregator.length > 0 ?
                <div className="control-container">
                    {aggregator.map((player, index) => (
                        <div className="aggregator-text" key={index}>
                            <p><strong>{player.name}</strong> | #{player.number} | {player.position}
                            </p>
                        </div>
                    )  
                    )}
                    <h3>Experience: {experience} total games played</h3>
                    <button 
                        className="reset" 
                        onClick={() => {setAggregator([]); setExp(0)}}
                    >
                        Reset
                    </button>
                </div> :
                <h3>Add Players!</h3>
            }
            
        </>
    )

}

export default Aggregator