import Counter from '~/components/atoms/Counter';


function Index() {
  return (
		<main class='text-center mx-auto text-gray-700 p-4'>
			<h1 class='max-6-xs text-6xl text-sky-700 font-thin uppercase my-16'>Hello world!</h1>
			<Counter />
			<p class='my-4'>
				<span>
					Home
				</span>{' - '}
				<Link href='/about' class='text-sky-600 hover:underline'>
					About Page
				</Link>{' '}
			</p>
		</main>
  );
}

export default Index;
