import Car from "./components/Car.jsx";


function App() {
  const honda = {
    make : "Honda",
    model : "Accord",
    year: 2024,
    color : "red"
  }

  const audi = {
    make : "Audi",
    model : "A4",
    year : 2015,
    color : "black"
  }

  return (
    <>
      <Car make={honda.make} model={honda.model} year={honda.year} color={honda.color}/>
      <br/>
      <Car make={audi.make} model={audi.model} year={audi.year} color={audi.color}/>
    </>
  )
}

export default App
