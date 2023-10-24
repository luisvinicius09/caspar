import { create } from 'zustand';

export interface AuthStore {
	isAuthorized: boolean;
	authToken: string;

	signIn: () => void;
	signOut: () => void;
}

export const authStore = create<AuthStore>((set) => ({
	isAuthorized: false,
	authToken: '',

	signIn: () => set((state) => ({ isAuthorized: true })),
	signOut: () => set((state) => ({ isAuthorized: false })),
}));
