import "./index.css";

function City(props) {
    return (
      <li className="nav-item">
        {props.city} <span className="innerItem">({props.country})</span>
      </li>
    );
}

export default City;