import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../StrictModeDroppable";
import Task from "../Task/Task";
import classes from "./Column.module.css";

const InnerList = React.memo(function InnerList({ tasks }: any) {
  return tasks.map((task: any, index: any) => 
    <Task key={task.id} task={task} index={index} />
  )
});

function Column({ column, tasks, index }: any) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className={classes.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <h3
            className={classes.title}
            {...provided.dragHandleProps}
          >
            {column.title}
          </h3>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => ( 
              <div
                className={classes.taskList}
                style={{ backgroundColor: snapshot.isDraggingOver ? "lightgrey": "inherit" }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <InnerList tasks={tasks} />
                {provided.placeholder}
              </div>  
            )}
          </Droppable>
        </div>
      )}
      
    </Draggable>
  )
}

export default Column