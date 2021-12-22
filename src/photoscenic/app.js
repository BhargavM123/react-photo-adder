import Main1 from "./Main1"
import {connect} from 'react-redux' 
function mapStateToProps(state){
    return{
        posts : state
    }
}

const App = connect(mapStateToProps)(Main1)

export default App