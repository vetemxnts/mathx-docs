export default function NavbarContainer({ children }: { children: React.ReactNode }) {
	return (
		<nav className='fixed w-full h-8 px-2 text-base text-neutral-200 bg-neutral-900 flex flex-row justify-between items-center'>
			{children}
		</nav>
	);
}