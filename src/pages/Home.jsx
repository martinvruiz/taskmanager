import { Link } from 'react-router';


const Home = () => {
    return (
        <div className='w-full h-screen text-center flex flex-col items-center justify-center rounde'>
            <h1 className='text-3xl my-4 text-gray-700'>Bienvenido/a a Task Manager</h1>
            <div className='w-1/2 h-1/2 flex justify-center items-center flex-col bg-white text-black shadow-2xl rounded-xl'>
            <p className='text-xl p-4'>Donde organizar tus tareas es mas facil</p>
                <Link className='p-4 bg-blue-200 rounded-md' to="/task-manager">Empezar</Link>
            </div>
        </div>
    );
}


export default Home;