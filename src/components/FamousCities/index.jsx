import "./index.css"
import City from "../City";

function FamousCities() {
    return (
        <ul className="nav">
            <City city="Parij" country="Fransiya"/>
            <City city="Tokio" country="Yaponity"/>
            <City city="Nyu-york" country="AQSh"/>
            <City city="London" country="Angliya"/>
            <City city="Toshkent" country="O'zbekiston"/>
        </ul>
    );
}

export default FamousCities;