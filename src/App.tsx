import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from './components/StrictModeDroppable';
import taskData from './data';
import Column from './components/Column/Column';
import classes from './App.module.css';

const InnerList = React.memo(function InnerList({ column, taskMap, index }: any) {
  const tasks = column.taskIds.map((taskId: any) => taskMap[taskId])
  return <Column column={column} tasks={tasks} index={index} />;
});

function App() {
  const [data, setData] = useState<any>(taskData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if(type === 'column') {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setData({
        ...data,
        columnOrder: newColumnOrder
      })
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId)
  
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }
  
      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      })
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    })
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className={classes.container}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.columnOrder.map((columnId: any, index: any) => {
              const column = data.columns[columnId];
              return (
                <InnerList
                  key={column.id}
                  column={column}
                  taskMap={data.tasks}
                  index={index}
                />
              )
            })}
            {provided.placeholder}
        </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default App
