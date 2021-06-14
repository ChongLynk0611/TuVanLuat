import React from 'react';
import './Compose.css';

export default function Compose(props) {
    const {sendMess, onChange, values} = props;

    return (
      <div className="compose">
        <input
          onKeyPress = {e => e.key === 'Enter' ? sendMess() : null}
          onChange = {onChange}
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          value={values}
        />

        {
          props.rightItems
        }
      </div>
    );
}