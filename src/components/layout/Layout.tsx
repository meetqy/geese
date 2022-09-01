import { useRouter } from 'next/router';
import * as React from 'react';

import Header from '@/components/layout/Header';
import ToTop from '@/components/toTop/ToTop';

import IndexSide from '../side/IndexSide';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  const router = useRouter();
  const showIndexSide = React.useMemo<boolean>(() => {
    const { pathname } = router;
    return pathname !== '/periodical/volume/[id]';
  }, [router]);

  return (
    <>
      <Header></Header>
      <main className='container mx-auto px-0 pt-14 xl:px-40'>
        {showIndexSide ? (
          <div className='flex shrink grow flex-row sm:border-l sm:dark:border-slate-600 md:border-none'>
            <div className='relative w-0 shrink grow lg:w-9/12 lg:grow-0'>
              {children}
            </div>

            <div className='relative hidden w-3/12 shrink-0 md:block md:grow-0'>
              <IndexSide></IndexSide>
              <ToTop />
            </div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </main>
    </>
  );
}
