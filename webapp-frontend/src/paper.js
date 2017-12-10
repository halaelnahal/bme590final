import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 500,
  margin: 200,
  padding: 60,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleCircle = () => (
  <div>
    <Paper style={style} zDepth={3} circle={true} />
  </div>
);

export default PaperExampleCircle;