import EditTask from "./EditTask";
import InProgress from "./InProgres";
import DeleteDiscard from "./DeleteDiscard";

function TaskCard({ user, setUpdate }) {

  const { title, priority, status } = user;
  return (
    <>
    <article className="task-card">
        <div className="task-card-info">
          <h2>Task</h2>
          <p>{title}</p>
        </div>
        <div className="task-card-info-priority">
          <h2>Priority</h2>
          <p className =
            {priority === "Low"
              ? "Low-color"
              : priority === "Medium"
              ? "Medium-color"
              : priority === "High"
              ? "High-color"
              : ""}>
            {priority}
          </p>
        </div>
        <div className="task-card-info-progress">
        <InProgress setUpdate={setUpdate} user={user}/>
        </div>
        <div className="task-card-info-edit">
          <EditTask setUpdate={setUpdate} user={user}/>
          <DeleteDiscard user={user} setUpdate={setUpdate} />
        </div>
    </article>
      </>
  );
}

export default TaskCard;
