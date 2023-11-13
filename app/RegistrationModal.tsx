import createNewUser from "@/lib/createNewUser";
import RegistrationForm from "./RegistrationForm";
import { useUser } from "@/context/userContext";

interface RegistrationModalProps {
    onClose: () => void; 
    }

    const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
    const {user} = useUser(); 

        const handleRegistration = (username: string) => {
    if (user) {
        const { name, email, avatar_url } = user;

        createNewUser(username, name, email, avatar_url)
        .then((response) => {
            console.log('User registered successfully:', response);
            onClose();
        })
        .catch((error) => {
            console.error('User registration error:', error);
        });
    }
    };

    return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-slate-100 text-white p-8 rounded-lg shadow-lg w-100">
        <RegistrationForm
            onClose={() => {
            onClose();
            }}
            onSubmit={handleRegistration}
        />
        </div>
    </div>  
    );
};

export default RegistrationModal;