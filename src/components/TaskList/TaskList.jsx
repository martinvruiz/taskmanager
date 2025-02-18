import AddTask from "../AddTask/AddTask";
import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";


const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        if(newTask.trim() === "") return;
        const setTask = {
            id: Date.now(),
            name: newTask,
            status: "to-do"}
        setTasks([...tasks, setTask]);
        setNewTask("");
        console.log(tasks)
    }

    const handleTaskStatus = (id) => {
        const newTasks = tasks.map((task) => {
            if(task.id === id){
                if(task.status === "to-do"){
                    return {...task, status: "in-progress"}
                }
                if(task.status === "in-progress"){
                    return {...task, status: "done"}
                }
            }
            return task;
        })
        setTasks(newTasks);
    }

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }


    return (
        <div className="w-full overflow-x-hidden flex flex-col items-center min-h-full p-4">
            <h1 className="text-4xl font-bold p-4 text-gray-200">Lista de tareas</h1>
            <AddTask onSubmit={handleAddTask} value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mt-4">
                <div className="bg-white shadow-md rounded-lg p-4 w-full flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Por hacer</h2>
                    <ul className="list-none p-0 m-0">
                        {tasks.map((task) => {
                            if (task.status === "to-do") {
                                return (
                                    <TaskItem
                                        task={task.name}
                                        id={task.id}
                                        key={task.id}
                                        onClick={() => handleTaskStatus(task.id)}
                                        onDelete={() => handleDelete(task.id)}
                                        showMoveButton={true}
                                    />
                                );
                            }
                        })}
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 w-full flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">En proceso</h2>
                    <ul className="list-none p-0 m-0">
                        {tasks.map((task) => {
                            if (task.status === "in-progress") {
                                return (
                                    <TaskItem
                                        task={task.name}
                                        id={task.id}
                                        key={task.id}
                                        onClick={() => handleTaskStatus(task.id)}
                                        onDelete={() => handleDelete(task.id)}
                                        showMoveButton={true}
                                    />
                                );
                            }
                        })}
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 w-full flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Terminado</h2>
                    <ul className="list-none p-0 m-0">
                        {tasks.map((task) => {
                            if (task.status === "done") {
                                return (
                                    <TaskItem
                                        task={task.name}
                                        id={task.id}
                                        key={task.id}
                                        onDelete={() => handleDelete(task.id)}
                                        showMoveButton={false}
                                    />
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default TaskList;