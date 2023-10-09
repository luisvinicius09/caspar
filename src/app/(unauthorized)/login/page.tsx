export default function Login() {
	return (
		<div className='justify-center flex h-screen items-center'>
			<div className='bg-background flex flex-col rounded-xl px-12 pb-12 pt-8 gap-4 shadow-lg'>
				<div className='text-center'>
					<p>Logo? </p>
				</div>

				<section>
					<div className='flex flex-col'>
						<label className='font-bold'>Login</label>
						<input className='bg-secondary rounded-md text-md p-2 shadow-md' />
					</div>
				</section>

				<section>
					<div className='flex flex-col'>
						<label className='font-bold'>Password</label>
						<input className='bg-secondary rounded-md text-md p-2 shadow-md' />
					</div>
				</section>

				<section>
					{/* <p className='text-red-600'>Email ou senha incorretos</p> */}

					<button className='bg-primary text-white uppercase rounded-md py-2 w-full'>
						Login
					</button>
				</section>
			</div>
		</div>
	);
}
