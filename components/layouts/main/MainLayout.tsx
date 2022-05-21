import React from 'react';
import Container from '@/components/elements/container';
import Header from '@/components/elements/header';
interface LayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: LayoutProps) {
  return (
    <div className="bg-black h-screen-100">
      <div className="border-b-1 border-gray-100">
        <section>
          <Header />
        </section>
      </div>
      <Container>
        <main className="h-full">{children}</main>
      </Container>

      <div>
        <section>
          {/* <Seperator />
          <Footer /> */}
        </section>
      </div>
      <div />
    </div>
  );
}

function Layout({ children }: LayoutProps) {
  const render = () => <section>{children}</section>;

  return <BaseLayout>{render()}</BaseLayout>;
}

export default Layout;
