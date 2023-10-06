import { McLaren } from 'next/font/google';

const mclaren = McLaren({ weight: '400', subsets: ['latin'] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={'' + ' ' + mclaren.className}>
			<div className='flex flex-col h-screen relative'>
				<div className='bg-secondary rounded-b-[150px] absolute top-0 left-0 h-48 w-full z-0 shadow-lg'></div>

				<div className='flex justify-between px-28 py-4 z-10'>
					<div className=''></div>

					<div className='w-12 h-12 bg-primary rounded-full'></div>
				</div>

				<div className='bg-background grow rounded-t-[100px] mx-6 z-10 shadow-lg'>
					<div className='flex pt-20 px-20 h-full'>
						<div className='bg-secondary/70 py-4 text-xl rounded-xl px-4 max-h-[36rem] max-w-64 shadow-lg mr-12'>
							<div className='pl-8 my-2'>
								<p className='pt-2'>Menu</p>
							</div>

							<hr className='bg-primary my-4 border-[2px] border-primary' />

							<div className=''>
								<div className='py-2 pl-4 my-2 rounded-xl bg-secondary'>
									<a href='#'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-100'>Inicio</p>
										</div>
									</a>
								</div>

								<div className='py-2 pl-4 my-2 rounded-xl'>
									<a href='#'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-60'>Cobranças</p>
										</div>
									</a>
								</div>

								<div className='py-2 pl-4 my-2 rounded-xl'>
									<a href='#'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-60'>Clientes</p>
										</div>
									</a>
								</div>

								<div className='py-2 pl-4 my-2 rounded-xl'>
									<a href='#'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-60'>Configurações</p>
										</div>
									</a>
								</div>
							</div>
						</div>

						<main className='w-full'>{children}</main>
					</div>
				</div>
			</div>
		</div>
	);
}
