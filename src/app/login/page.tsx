import { TestBlock } from '@/components/test-block'
import './style.scss'

export default function Login() {

  const card = () => {
    return (
      <div id='card'>
        <div>
          <img src='/icons/chat-icon.png' />
        </div>
        <div id='content'>
          <span className='text'>ChitChat</span>
          <span className='subtext'>You have a new message!</span>
        </div>
      </div>
    )
  }

  const cardTw = () => {
    return (
      <div className='p-2 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-2'>
        <div>
          <img className='h-18' src='/icons/chat-icon.png' />
        </div>
        <div className='flex flex-col ml-10'>
          <span className='text-xl font-medium text-black' >ChitChat</span>
          <span className='text-slate-500'>You have a new message!</span>
        </div>
      </div>
    )
  }


  const chatCardTailwind = () => { }
  return (
    <main>
      <h1>Helloworld boy - Let`s understand some tailwind tricks</h1>
      <TestBlock>
        {card()}
      </TestBlock>
      {cardTw()}
    </main>
  );
}
