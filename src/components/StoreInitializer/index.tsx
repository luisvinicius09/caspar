'use client';

import { AuthStore, authStore } from '@/app/authStore';
import { useRef } from 'react';

export function StoreInitializer(data: AuthStore) {
	const initialized = useRef(false);

	if (!initialized.current) {
		authStore.setState(data);
		initialized.current = true;
	}

	return null;
}
