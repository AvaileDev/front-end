import dynamic from 'next/dynamic';
import { memo } from 'react';

const GameIframe = memo(() => (
  <iframe src="Export-Web/game.html" className="w-full h-full border-none" />
));

GameIframe.displayName = 'GameIframe';

const DynamicGameIframe = dynamic(() => Promise.resolve(GameIframe), {
  ssr: false,
});

export default function GameDev() {
  return (
    <>
      <div className='sticky top-11 w-full bg-white z-10'>
        <p>Game in progress: no win/loss condition or mobile support yet. Use WASD to move, W to jump, and S for quick descent. Hold shift to mega-jump if on ground.</p>
      </div>
      <div className="flex flex-col h-screen">
        <DynamicGameIframe></DynamicGameIframe>
      </div>
    </>
  );
}
