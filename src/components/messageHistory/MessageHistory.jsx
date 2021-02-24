import PropTypes from 'prop-types';
import Message from '../message/Message';
import Response from '../response/Response';
import Typing from '../typing/Typing';

function MessageHistory({ list }) {
    if (list.length === 0) return null

    const messageItem = list.map(item => {
        if (item.type === 'message') {
            return (
                <Message key={item.id} from={item.from} message={item} />
            )
        }

        if (item.type === 'response') {
            return (
                <Response key={item.id} from={item.from} message={item} />
            )
        }

        if (item.type === 'typing') {
            return (
                <Typing key={item.id} from={item.from} message={item} />
            )
        }

        return null       
    })
    
    return (
        <ul>{messageItem}</ul>
    )
}


MessageHistory.defaultProps = {
    list: []
}

MessageHistory.propTypes = {
    list: PropTypes.array.isRequired
}

export default MessageHistory