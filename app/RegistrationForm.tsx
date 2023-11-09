import { useState } from "react";

interface RegistrationFormProps {
    onClose: () => void;
    onSubmit: (username: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose, onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(username);
    };

    return (
    <div className="modal">
        <div className="modal-content">
        <h1>Please choose a username</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter a username"
            />
            <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Cancel</button>
        </div>
    </div>
    );
};

export default RegistrationForm;