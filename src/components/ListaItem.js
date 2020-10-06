import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
  padding-left: 20px;
  padding-right: 20px;
  background: #eee;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  align-items: center;
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
    <Item onPress={props.onPress} underlayColor="#DDD" activeOpacity={1}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done} />
      </>
    </Item>
  );
};
