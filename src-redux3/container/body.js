import { connect } from "react-redux";
import Body from "../components/body";

import {add} from '../redux/reducers/configItem'

function mapStateToPros(state){
    return {items:state.configItem.items}
}

const mapDispatchToProps = {
    add,
};


export default connect(mapStateToPros,mapDispatchToProps)(Body)