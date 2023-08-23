import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card'; // Assuming you have a Card component

const SwimlaneContainer = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 8px;
  width: 300px;
  margin: 16px;
`;

const SwimlaneTitle = styled.h2`
  margin-bottom: 8px;
`;

const CardsContainer = styled.div`
  min-height: 50px;
`;

const Swimlane = ({ title, cards, id }) => {
  return (
    <SwimlaneContainer>
      <SwimlaneTitle>{title}</SwimlaneTitle>
      <Droppable droppableId={id} direction="vertical">
        {(provided) => (
          <CardsContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Draggable
                key={card.id}
                draggableId={card.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card text={card.text} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </SwimlaneContainer>
  );
};

export default Swimlane;
