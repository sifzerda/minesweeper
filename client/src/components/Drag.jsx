import  { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  '../Drag.css'; // Import CSS for styling (create this file if necessary)

// Define initial squares and boxes data
const initialSquares = [
  { id: 'square-1', content: 'Square 1' },
  { id: 'square-2', content: 'Square 2' },
  { id: 'square-3', content: 'Square 3' },
  { id: 'square-4', content: 'Square 4' },
];

const initialBoxes = [
  { id: 'box-1', squares: [] },
  { id: 'box-2', squares: [] },
  { id: 'box-3', squares: [] },
  { id: 'box-4', squares: [] },
];

const DragAndDropComponent = () => {
  const [squares, setSquares] = useState(initialSquares);
  const [boxes, setBoxes] = useState(initialBoxes);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Dropped in the same position
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Update squares state
    const updatedSquares = [...squares];
    const [draggedSquare] = updatedSquares.splice(source.index, 1);
    updatedSquares.splice(destination.index, 0, draggedSquare);
    setSquares(updatedSquares);

    // Update boxes state
    const updatedBoxes = boxes.map((box) => {
      if (box.id === destination.droppableId) {
        return {
          ...box,
          squares: [...box.squares, draggedSquare],
        };
      } else if (box.id === source.droppableId) {
        return {
          ...box,
          squares: box.squares.filter((sq) => sq.id !== draggedSquare.id),
        };
      }
      return box;
    });

    setBoxes(updatedBoxes);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        <div className="squares">
          <h2>Squares</h2>
          <Droppable droppableId="all-squares" direction="horizontal">
            {(provided) => (
              <div className="square-list" {...provided.droppableProps} ref={provided.innerRef}>
                {squares.map((square, index) => (
                  <Draggable key={square.id} draggableId={square.id} index={index}>
                    {(provided) => (
                      <div
                        className="square"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {square.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="boxes">
          <h2>Boxes</h2>
          {boxes.map((box) => (
            <div key={box.id} className="box">
              <Droppable droppableId={box.id}>
                {(provided, snapshot) => (
                  <div
                    className={`box-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {box.squares.map((sq, index) => (
                      <div key={sq.id} className="square-in-box">
                        {sq.content}
                      </div>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragAndDropComponent;