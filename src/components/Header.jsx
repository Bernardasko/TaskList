import ModalComponent from "./AddCreateNewTask";

function Header({users, setUpdate}) {
    return ( 
        <div className="add-create">
            <h1>Task List</h1>
            <ModalComponent users={users} setUpdate={setUpdate}/>
        </div>
     );
}

export default Header;