/* eslint-disable react/prop-types */
function Car({make, model, year, color}) {
    return (
        <center>
            <h1>My {make}</h1>
            <h3>My {make} is {color}</h3>
            <p>It's a {model} from {year}</p>
        </center>
    );
}

export default Car;