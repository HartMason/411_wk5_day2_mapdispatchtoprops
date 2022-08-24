import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        state: state.cars
    }
}

export default connect(mapStateToProps)(Total)