import PropTypes from 'prop-types';

export default function Section({ title }) {
    return (
        <div><h1>{title}</h1>
        </div>
    )
}

Section.prototype = {
    title: PropTypes.string
}