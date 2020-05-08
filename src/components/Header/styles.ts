import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 100%;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '40px 20px' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;
        &.active::after {
          content: '';
          position: absolute;
          height: 2px;
          background: #ff872c;
          width: 100%;
          bottom: -10px;
          left: 0;
        }
        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
