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
`;
export default props => {
  return (
    <Item onPress={() => {}} activeOpacity={0.5}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck />
      </>
    </Item>
  );
};
