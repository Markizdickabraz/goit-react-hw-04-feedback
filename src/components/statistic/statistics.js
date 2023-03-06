import Notification from "../notification/notification"
import { Stats } from "./statisticsStyled"
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    
    return (
        <div>
            <h2>Statistics</h2>
           {!total ?<Notification message="There is no feedback"></Notification>: <Stats>
        <li>Good:{good}</li>
        <li>Nuetral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li></Stats>} 
            </div>
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}