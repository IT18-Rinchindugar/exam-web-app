import React from 'react';
import Container from '@/components/elements/container';
import styles from './header.module.css';
import { Heading } from '@/components/elements/typography';
import { CloseIcon } from '../icons';

function Header() {
  return (
    <header>
      <Container>
        <section className={styles.headerClass}>
          <div>
            <button className="flex justify-center items-center h-10 w-10 rounded bg-[#333333]">
              <CloseIcon />
            </button>
          </div>
        </section>
      </Container>
    </header>
  );
}

export default Header;
