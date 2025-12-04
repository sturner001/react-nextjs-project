import Link from 'next/link';


export default function Home() {
  console.log('Hello World');
  return (
    
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      
      <p><Link href="/about">About Us</Link></p>
      <p><Link href="/community">Community</Link></p>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Sharing</Link></p>
      <p><Link href="/meals/mealspost">Meals Post</Link></p>
    </main>
  );
}
