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
    <div className="flex flex-col items-center">
      <h1 className="mb-4">Please choose a username</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center mb-4">
          <input
            className="flex-1 appearance-none border rounded py-2 px-3 mr-2 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter a username"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      <button onClick={onClose} className="text-sm text-gray-500">
        Cancel
      </button>
    </div>
  );
};

export default RegistrationForm;