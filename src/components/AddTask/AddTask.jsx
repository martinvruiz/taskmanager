import PropTypes from 'prop-types';


const AddTask = ({onSubmit, value, onChange}) => {


return (
    <form onSubmit={onSubmit}  className="w-2/5 flex flex-col p-2 my-2 gap-2 justify-center items-center bg-white rounded-2xl text-black">
        <input type="text" className="w-full p-4 border-2 border-gray-500 rounded-2xl" placeholder="Añadir tarea" value={value} onChange={onChange}/>
        <button className="bg-green-500 w-full p-2 rounded-2xl text-white">Añadir</button>
    </form>
)
}

AddTask.propTypes = {
onSubmit: PropTypes.func.isRequired,
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired
}

export default AddTask;