import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import data from "./components/colleges.json";
function App() {
  const [limit, setlimit] = useState(0);
  const [arr, setarr] = useState([]);
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
        limit <= data.length
      ) {
        setlimit(limit + 10);
        console.log(limit + 10);
        loadData(limit + 10);
      }
    },
    {
      passive: true,
    }
  );

  const loadData = (limit) => {
    let i = limit;
    console.log(i)
    //let newar=[...arr]
    if (limit < data.length) {
      for (i; i <data.length; i++) {
        arr.push(data[i]);
      }
    }
    //setarr(newar)
    firstCol = arr.filter((arr, index) => index % 2 === 0);
    SecondCol = arr.filter((arr, index) => index % 2);
  };
  console.log(arr);
  return (
    <div>
      <div className='header'>
        <p>Colleges in North</p>
        <hr />
      </div>
      <div className='container'>
        {loadData(0)}
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
