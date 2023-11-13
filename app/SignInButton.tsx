'use client';

import { useUser } from '@/context/userContext';
import { initFirebase } from '@/firebase/firebase.config';
import fetchUser from '@/lib/fetchUser';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { redirect } from 'next/navigation';
import RegistrationModal from './RegistrationModal';
import { useState } from 'react';

initFirebase();
const provider = new GoogleAuthProvider();
const auth = getAuth();

function SignInButton() {
    const { user, setUser } = useUser();
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);

    const openRegistrationModal = () => {
        setRegistrationModalOpen(true);
    };

    const closeRegistrationModal = () => {
        setRegistrationModalOpen(false);
        if (user && !user.username) {
            signOut(auth)
                .then(() => {
                    setUser(null);
                })
                .catch((error) => {
                    console.error('Error during sign-out:', error);
                });
        }
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error('Error during sign-out:', error);
            });
    };


    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user.email) {
                fetchUser(user.email)
                    .then((existingUser) => {
                        if (existingUser) {
                            setUser(existingUser);
                        } else {
                            const newUser = {
                                username: '',
                                name: user.displayName || '',
                                email: user.email || '',
                                avatar_url: user.photoURL || '',
                            };
                            setUser(newUser);
                            openRegistrationModal();
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    });
            }
        } catch (error) {
            console.error('Error during Google Sign-In:', error);
        }
    };

    return (
        <div>
            {user && user.username ? (
                <button onClick={handleSignOut} className="md:flex w-25 hidden bg-slate-900 text-white px-4 lg:px-4 py-2 dark:bg-slate-600 lg:py-2 rounded-full" >
                    <span className="ml-10 mr-5 mt-1">Sign Out</span>
                    <img
                        src={user.avatar_url}
                        alt="User Avatar"
                        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                    />
                </button>
            ) : (
                <button
                    onClick={signIn}
                    className="hidden md:flex w-25 bg-slate-900 text-white px-4 dark:bg-slate-600 lg:px-8 py-2 lg:py-4 rounded-full"
                >
                    Sign In
                </button>
            )}
            {isRegistrationModalOpen && (
                <RegistrationModal onClose={closeRegistrationModal} />
            )}
        </div>
    );
}

export default SignInButton;