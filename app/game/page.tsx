import Game from '@/components/Game';
import dynamic from 'next/dynamic';

const GameIframe = dynamic(() => import('@/components/Game'), {
  ssr: false
});

export default function GameDev() {
  return (
    <>
      <div className='sticky top-11 w-full bg-white z-10'>
        <p>Game WIP, no defeat/victory condition or mobile support yet. Use WASD keys to move: W to jump and S to fall rapidly. Press space bar to jump very far.</p>
      </div>
      <div className="flex flex-col h-screen">
        <GameIframe></GameIframe>
      </div>
    </>
  );
}
