import PropTypes from 'prop-types';

export default function Notification({ message }) {
    return (
        <h3>{message}</h3>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired,
}