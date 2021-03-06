import React, { useState } from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import uuid from 'uuid4';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Listagem = styled.FlatList`
  flex: 1;
`;

export default () => {
  const [items, setItems] = useState(lista);

  const addNewItem = txt => {
    let newItems = [...items];
    newItems.push({
      id: uuid(),
      task: txt,
      done: false,
    });
    setItems(newItems);
  };

  const toggleDone = index => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const deleteItem = index => {
    let newItems = [...items];
    newItems = newItems.filter((it, i) => i != index);

    setItems(newItems);
  };
  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        renderItem={({ item, index }) => (
          <ListaItem onPress={() => toggleDone(index)} data={item} />
        )}
        renderHiddenItem={({ intem, index }) => (
          <ListaItemSwipe onDelete={() => deleteItem(index)} />
        )}
        rightOpenValue={-50}
        disableRightSwipe={true}
        keyExtractor={item => item.id}
      />
    </Page>
  );
};
