import TaskCard from './TaskCard';

function TaskCardList({ users, setUpdate }) {
    return (
        <>
            {users.map((user) => (
                <TaskCard key={user.id} user={user} setUpdate={setUpdate} /> 
            ))}
        </>
    );
}

export default TaskCardList;


