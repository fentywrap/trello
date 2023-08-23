import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Swimlane from './Swimlane';

const BoardContainer = styled.div`
  display: flex;
`;

const initialData = {
  todo: {
    title: 'To Do',
    cards: [{ id: 'card-1', text: 'Task 1' }, { id: 'card-2', text: 'Task 2' }],
  },
  inProgress: {
    title: 'In Progress',
    cards: [],
  },
  completed: {
    title: 'Completed',
    cards: [],
  },
};

class Board extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    // Handle the logic for updating swimlanes and cards here
    // Update this.state and re-render
  };

  render() {
    const swimlaneOrder = ['todo', 'inProgress', 'completed'];

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <BoardContainer>
          {swimlaneOrder.map((laneId) => {
            const swimlane = this.state[laneId];
            return (
              <Swimlane
                key={laneId}
                id={laneId}
                title={swimlane.title}
                cards={swimlane.cards}
              />
            );
          })}
        </BoardContainer>
      </DragDropContext>
    );
  }
}

export default Board;
