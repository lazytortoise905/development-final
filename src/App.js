import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import CardItem from "./components/cardItem";
import Aggregator from "./components/aggregator";
import Control from "./components/control";

function App() {
  const [aggregator, setAggregator] = useState([]);
  const [exp, setExp] = useState(0);
  const [sortedData, setSortedData] = useState(data);

  const addCart = (player) => {
    setAggregator([...aggregator, player])
    setExp(exp + player.games_played)
  }

  const removeCart = (playerRemove) => {
    setAggregator(aggregator.filter((player) => player.name !== playerRemove.name))
    setExp(exp - playerRemove.games_played)
  }

  return (
    <div className="App">
      <div className="app-divider">
        <div className="control-wrapper">
          <h2>Control</h2>
          <Control
            setData={setSortedData}
            original={data}
            data={sortedData}
          ></Control>
        </div>
        <div className="cards-divider">
          <h2>2022 Philadelphia Eagles</h2>
          {sortedData.length === 0 &&
            <h3>No players fit these filters</h3>
          }
          <div className="cards-items">
            {sortedData.map((item, index) => (
              <CardItem 
                key={index}
                item={item}
                addCart={addCart}
                removeCart={removeCart}
                aggregator={aggregator}
              ></CardItem>
            ))}
          </div>
        </div>
        <div className="cart">
          <h2>Favorites</h2>
          <Aggregator
            aggregator={aggregator}
            experience={exp}
            setAggregator={setAggregator}
            setExp={setExp}
          >
          </Aggregator>
        </div>
      </div>
    </div>
  );
}

export default App;
