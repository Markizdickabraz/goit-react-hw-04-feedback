import { List, Btn } from './feedbackStyled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    <List>
        {options.map(optionItem => {return(
            <li key = {optionItem}><Btn type="button" onClick={onLeaveFeedback}>{optionItem}  </Btn></li>
            )})}
            </List>
        )
    }


FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}