import React from 'react';

const WordColor = (props) => {
  const colors = {
    color: props.color,
    background: props.bgColor,
  }

  return (
    <div style = { colors }>
      <h1>The word is { props.id } </h1>
    </div>
  )
}

export default WordColor;