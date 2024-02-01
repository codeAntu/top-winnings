import './App.css'

function App() {
  return (
    <div className='min-h-[100dvh] bg-gradient-to-t from-accent-light/50 to-accent-light/90 bg-fixed pb-10'>
      <div className='pt-3'>
        <p className='text-center text-xl font-bold text-black/80'>Leatherboard</p>
        <p className='text-center text-base font-medium'>Last 3 Winners</p>
      </div>
      <div className='mt-5 flex w-full gap-3 px-3'>
        <div className='mt-10 w-full'>
          <Card img='2nd.png' />
        </div>
        <div className='w-full'>
          <Card img='1st.png' />
        </div>
        <div className='mt-10 w-full'>
          <Card img='3rd.png' />
        </div>
      </div>
      <div className='px-4'>
        <Nav />
        <div className='grid gap-2'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
    <div className='flex items-center justify-around pb-3 pt-6 text-sm font-semibold'>
      <div className='active w-[45%] border-b-[3px] border-accent-dark py-2 text-center text-black/80 shadow-accent-light/70'>
        Top Winnings
      </div>
      <div className='w-[45%] rounded-full px-4 py-2 text-center text-black/70'> Top Earners</div>
    </div>
  )
}

function ListItem() {
  return (
    <div className='flex grow items-center justify-between rounded-[1.2rem] border border-accent bg-accent-light p-2 px-3 font-medium text-gray-900'>
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
        <div className='flex items-center justify-center gap-1 rounded-full bg-accent px-2 py-1 text-xs text-black/80 shadow-md shadow-accent-dark/20'>
          <Coin /> 1900.0
        </div>
      </div>
    </div>
  )
}

function Card({ img }: { img?: string }) {
  return (
    <div className='flex aspect-[3/4] w-full flex-col items-center justify-around rounded-2xl border border-accent-dark bg-accent py-2 shadow-xl shadow-accent/30'>
      <img src={img} alt='' className='w-10' />
      <div className='text-sm font-semibold text-black/80'>Ananta</div>
      <div className='flex items-center justify-center gap-1 rounded-full border border-accent-dark/40 bg-accent-light px-2 py-1 text-xs font-medium text-black/80 shadow-md shadow-accent-dark/20'>
        <Coin /> 1000.0
      </div>
    </div>
  )
}

function Coin() {
  return <img src='coin.png' alt='' className='h-4 w-4' />
}
