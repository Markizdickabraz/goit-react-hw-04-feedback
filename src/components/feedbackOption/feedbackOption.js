import { List, Btn } from './feedbackStyled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    <List >
            {options.map(optionItem => {

             
                return (
                    <li key={Object.keys(optionItem)}><Btn type="button" name={Object.keys(optionItem)} onClick={onLeaveFeedback}>{Object.keys(optionItem)}  </Btn></li>
            )})}
            </List>
        )
    }


FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}