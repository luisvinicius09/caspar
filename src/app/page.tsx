import { StoreInitializer } from '@/components/StoreInitializer';
import { authStore } from './authStore';

export default function Home() {
	return (
		<>
			<StoreInitializer {...authStore.getState()}/>
		</>
	);
}
