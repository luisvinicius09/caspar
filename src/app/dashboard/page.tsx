const infoBoxStyle = 'bg-secondary/70 pr-24 rounded-xl p-4';

export default function Dashboard() {
	return (
		<>
			<div>
				<div className='flex justify-between'>
					<div className={`${infoBoxStyle}`}>
						<p>box</p>
						<p>box</p>
						<p>box</p>
					</div>

					<div className={`${infoBoxStyle}`}>
						<p>box</p>
						<p>box</p>
						<p>box</p>
					</div>

					<div className={`${infoBoxStyle}`}>
						<p>box</p>
						<p>box</p>
						<p>box</p>
					</div>
				</div>

				<div>
					<div>
						<p>graph</p>
					</div>
					<div>
						<p>graph</p>
					</div>
				</div>
			</div>
		</>
	);
}
