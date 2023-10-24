'use client';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<h2>Algo de errado ocorreu</h2>

			<button onClick={() => reset()}>Tente Novamente</button>
		</div>
	);
}
