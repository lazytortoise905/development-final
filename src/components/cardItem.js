import "../style.css"

const offenseL = ["QB", "WR", "TE", "RB", "OT", "C", "K"]

const CardItem = ({item, addCart, removeCart, aggregator}) => {
    const adder = () => {
        addCart(item)
    }
    const remover = () => {
        removeCart(item)
    }

    return (
        <div className="card-info">
            <img src={"../"+item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <div className="card-footer">
                {aggregator.includes(item) ? 
                    <button onClick={(remover)} active="true">Remove</button> :
                    <button onClick={(adder)}>Add</button>
                }
            </div>
            <h2 className="number">#{item.number}</h2>
            <div className="position">
                <h2>{item.position}</h2>
                <p>{offenseL.includes(item.position) ? "Offense" : "Defense"}</p>
            </div>
            <h3 className="games">{item.games_played} games</h3>
        </div>
    )
}

export default CardItem;