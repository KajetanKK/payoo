import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Kajetan', lastname: 'JSM' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image src='/icons/logo.svg' width={30} height={30} alt='logo'/>
          <dir>
            <MobileNav user={loggedIn} />
          </dir>
        </div>
        {children}
      </div>
    </main>
  );
}
