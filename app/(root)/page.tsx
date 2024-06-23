import HeaderBox from '@/components/HeaderBox'
import TotalBox from '@/components/TotalBox';
import RightSideBar from '@/components/RightSideBar';

const Home = () => {
  const loggedIn = { firstName: 'Kajetan', lastName: 'Knaś', email: 'knas.kajetan@gmail.com' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="start"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Manage your account and transactions with ease."
          />

          <TotalBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 212.32}, {currentBalance: 531.86}]}
      />
    </section>
  )
}

export default Home