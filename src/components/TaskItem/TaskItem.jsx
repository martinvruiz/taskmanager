import PropTypes from 'prop-types';
import '../../TaskItem.css';

const TaskItem = ({ task, id, onClick, onDelete, showMoveButton }) => {
    return (
        <li key={id} className="task-item p-4 border border-gray-300 rounded-lg mb-2 bg-white shadow-sm text-center max-w-full">
            <p className="text-lg text-gray-800 w-full break-words">{task}</p>
            <div className='flex gap-2 justify-center mt-2'>
                {showMoveButton && (
                    <button onClick={onClick} className='task-item-button text-sm bg-blue-500 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-600'>Mover</button>
                )}
                <button onClick={onDelete} className='task-item-button text-sm bg-red-500 text-white p-2 rounded-lg transition duration-300 hover:bg-red-600'>Eliminar</button>
            </div>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    showMoveButton: PropTypes.bool.isRequired
};

export default TaskItem;