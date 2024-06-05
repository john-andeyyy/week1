
export function CreateTodo({ newTitle, setNewTitle, newDescription, setNewDescription,
    addTodo, toggleCreateTodo, Count, setNewCount, showCreateTodo }) {
    return (
        <>
            {showCreateTodo && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white px-6 py-5 rounded-2xl shadow w-[31rem]">
                        <h4 className='font-semibold text-xl'>Create Todo</h4>
                        <input
                            type="text"
                            placeholder='Task Name'
                            value={newTitle}
                            maxLength='40'
                            onChange={(e) => {
                                setNewTitle(e.target.value);
                                setNewCount(40 - e.target.value.length);
                            }}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm"
                        />
                        <p>{Count} / 40</p>
                        <textarea
                            placeholder='Add Description'
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-sm resize-none"
                        />
                        <div className="bg-blue-500 text-white text-center font-semibold text-xl rounded-xl">
                            <button className="bg-blue-500 text-white text-center font-semibold text-xl py-2 rounded-xl w-full"
                                onClick={addTodo}>
                                Create
                            </button>
                        </div>
                        <button className='text-red-500 py-4 text-xl font-semibold' onClick={toggleCreateTodo}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
