//@flow
import { Button } from 'react-native';
import React from 'react';

export default props => {
  const { color = "#ff927b", title } = props;
  return <Button color={color} title={title} />;
};
