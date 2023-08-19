import { useState } from 'react';

export default function TodoForm(props) {
    // State to hold the input value
    const [input, setInput] = useState('');

    // Function to handle input change
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the addTask function passed from parent component
        props.addTask({
            id: Math.floor(Math.random() * 100000),
            text: input,
            isComplete: false
        });
        // Clear the input field
        setInput('');
    };

    return (
        <form className='todo-form'>
            {/* Input field */}
            <input
                type="text"
                placeholder='Add a Todo'
                onChange={handleChange}
                className='todo-input'
                value={input}
                name="text"
            />
            {/* Submit button */}
            <button type="submit" onClick={handleSubmit} className='todo-btn'>
                ADD TODO
            </button>
        </form>
    );
}
