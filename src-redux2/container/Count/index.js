import {connect} from 'react-redux'
import Content from '../../component/index'

function mapStateToPros(state){
    return {value:state}
}

function mapDispatchToProps(dispatch){
    return (
        {
            add: () => dispatch({type:'+',amount:1}),
            subtract: (amount) => dispatch({type:'-',amount:amount})
        }
    )
}

export default connect(mapStateToPros,mapDispatchToProps)(Content)
