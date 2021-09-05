import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards";
import data from "./components/colleges.json";
function App() {
  const [limit, setlimit] = useState(0);
  const [arr, ] = useState([]);
  let firstCol = [];
  let SecondCol = [];

  console.log(limit + 10);
  console.log(arr);
  console.log(data.length);
  //Infinite Scrolling
  window.addEventListener(
    "scroll",
    () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight - 5 &&
        arr.length <= data.length
      ) {
        let a=limit+10
        setlimit(a);
        console.log(a);
        console.log( loadData(a))
        loadData(a);
      }
    },
    {
      passive: true,
    }
  );
console.log(limit)
  const loadData = (limit) => {
    let i = limit;
    console.log(i)
    if (limit < data.length) {
      for (i; i < limit+10; i++) {
        arr.push(data[i]);
      }
    }
    firstCol = arr.filter((arr, index) => index % 2 === 0);
    SecondCol = arr.filter((arr, index) => index % 2);
  };
  loadData(0)
  //console.log(arr);
  return (
    <div>
      <div className='header'>
        <p>Colleges in North</p>
        <hr />
      </div>
      <div className='container'>
        
        <div>
          {firstCol.map((item, index) => (
            <Cards key={index} detail={item} />
          ))}
        </div>
        <div>
          {SecondCol.map((item, index) => (
            <Cards key={index} detail={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
