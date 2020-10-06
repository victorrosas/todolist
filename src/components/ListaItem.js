import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding: 10px;
  background: #eee;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemText = styled.Text`
  font-size: 15px;
  justify-content: space-between;
`;
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #ccc;
  background-color: ${props => (props.done ? 'green' : '#FFF')};
`;
export default props => {
  return (
    <Item onPress={props.onPress} activeOpacity={0.7}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done} />
      </>
    </Item>
  );
};
