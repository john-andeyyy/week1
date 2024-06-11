import { useState } from 'react';
import Modal from './Modal';

export function CreateTodo({ setTodos, toggleCreateTodo, showCreateTodo }) {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [count, setCount] = useState(40);

    const addTodo = () => {
        if (newTitle.trim() !== '') {
            setCount(40 - newTitle.length);
            if (newTitle.length <= 40) {
                const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setTodos(todos => [
                    ...todos,
                    {
                        id: todos.length + 1,
                        title: newTitle,
                        description: newDescription,
                        time: currentTime,
                        completed: false
                    }]);
                setNewTitle('');
                setNewDescription('');
                setCount(40);
                toggleCreateTodo();
            } else {
                alert("The title must be only 40 characters.");
            }
        }
    };

    const close = () => {
        toggleCreateTodo()
        setNewTitle('')
        setNewDescription('')
    }

    return (

        <Modal isVisible={showCreateTodo} handleClose={() => close()}>

            {showCreateTodo && (
                <div className="">

                    <h4 className='font-semibold text-xl pb-3'>Create Todo</h4>
                    <div className="">

                        <input
                            type="text"
                            placeholder='Task Name'
                            value={newTitle}
                            maxLength='40'
                            onChange={(e) => {
                                setNewTitle(e.target.value);
                                setCount(40 - e.target.value.length);
                            }}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow  text-lg"
                        />
                        <p className='text-gray-400 text-right'>{count} / 40</p>

                    </div>
                    <div className="py-5">

                        <textarea
                            placeholder='Add Description'
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-lg resize-none"
                        />
                    </div>

                    <div className="bg-blue-500 text-white text-center font-semibold text-xl rounded-xl ">
                        <button className="bg-blue-500 text-white text-center font-semibold text-xl py-3 rounded-xl w-full"
                            onClick={addTodo}>
                            Create
                        </button>
                    </div>



                </div>
            )}
        </Modal>



    );
}