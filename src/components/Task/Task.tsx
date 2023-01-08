import { Draggable } from "react-beautiful-dnd";
// import { StrictModeDraggable as Draggable } from "../StrictModeDraggable";
import classes from "./Task.module.css";

function Task({ task, index }: any) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={classes.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? 'lightgreen': 'white' 
          }}
          
        >
          {task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task;