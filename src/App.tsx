import './App.css'

function App() {
  return (
    <div className='h-[100dvh] bg-gradient-to-t from-accent-light/50 to-accent-light/90 px-2 pb-5'>
      <div className='grid gap-4 pt-5'>
        <div>
          <p className='text-center text-2xl font-bold text-black/80'>Leatherboard</p>
          <p className='text-center text-lg font-medium'>Last 3 Winners</p>
        </div>
        <div className='mt-5 flex h-[25dvh] w-full items-center px-2'>
          <div className='flex h-full flex-grow flex-col items-start justify-end'>
            <Card img='2nd.png' />
          </div>
          <div className='flex h-full flex-grow flex-col items-center justify-start'>
            <Card img='1st.png' />
          </div>
          <div className='flex h-full flex-grow flex-col items-end justify-end'>
            <Card img='3rd.png' />
          </div>
        </div>
      </div>
      <div className='p-3'>
        <Nav />
        <div className='grid gap-3'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </div>
  )
}

export default App

function Nav() {
  return (
    <div className='flex items-center justify-around pb-5 pt-6 text-sm font-semibold'>
      <div className='active w-[45%] border-b-[3px] border-accent-dark py-2 text-center text-black/80 shadow-accent-light/70'>
        Top Winnings
      </div>
      <div className='w-[45%] rounded-full px-4 py-2 text-center text-black/70'> Top Earners</div>
    </div>
  )
}

function ListItem() {
  return (
    <div className='flex grow items-center justify-between rounded-[1.2rem] border border-accent bg-accent-light p-4 font-medium text-gray-900'>
      <div className='flex items-center justify-around gap-3'>
        <div className='flex aspect-square items-center justify-center rounded-full bg-accent px-3 text-center text-sm font-medium text-black/70'>
          1
        </div>
        <img src='https://picsum.photos/50' alt='' className='aspect-square w-9 rounded-full bg-blue-500' />
        <div className='text-sm text-black/70'>123456789</div>
      </div>
      <div></div>
      <div className='flex items-center justify-around gap-4'>
        <img src='trophy2.jpg' alt='' className='w-5 mix-blend-multiply' />
        <div className='rounded-full bg-accent px-3 py-1 text-xs text-black/80 shadow-md shadow-accent-dark/20'>
          1900.0
        </div>
      </div>
    </div>
  )
}

function Card({ img }: { img?: string }) {
  return (
    <div
      className='flex aspect-[2/3] w-[92%] flex-col items-center justify-around rounded-2xl border border-accent-dark bg-accent py-2 shadow-xl shadow-accent/30
    '
    >
      <img src={img} alt='' className='w-10 ' />
      <div className='text-sm font-semibold text-black/80'>Ananta</div>
      <div className='rounded-full border border-accent-dark/40 bg-accent-light px-3 py-1 text-xs font-medium text-black/80 shadow-md shadow-accent-dark/20'>
        1000.0
      </div>
    </div>
  )
}
