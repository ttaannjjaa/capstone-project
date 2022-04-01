import styled from 'styled-components';
import { useState, useEffect } from 'react';
import iconarrowup from '../images/icon_arrow-up_circle_fill.svg';

export default function ScrollToTop() {
  const [noScrollToTopButton, setNoScrollToTopButton] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (Window.pageYOffset > 400) {
        setNoScrollToTopButton(false);
      } else {
        setNoScrollToTopButton(true);
      }
    });
  }, []);

  function onScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <ScrollToTopButton
      onClick={onScrollToTop}
      type="button"
      hidden={noScrollToTopButton}
    >
      <span className="sr-only">ScrollToTop</span>
      <img src={iconarrowup} alt="icon with arrow up" />
    </ScrollToTopButton>
  );
}

const ScrollToTopButton = styled.button`
  width: 50px;
  height: 50px;
  text-decoration: none;
  border-radius: 50%;

  background-color: var(--lightsteel);
`;
