import { Connect } from "react-redux";
import AddCar from "../components/AddCar";
import addCar from "./actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}; 

export default connect(null, mapDispatchToProps)(AddCar)

