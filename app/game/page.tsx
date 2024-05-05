import Game from '@/components/Game';
import dynamic from 'next/dynamic';

const GameIframe = dynamic(() => import('@/components/Game'), {
  ssr: false
});

export default function GameDev() {
  return (
    <>
      <div className="h-screen">
        <GameIframe></GameIframe>
      </div>
    </>
  );
}
