import styled from 'styled-components';

interface OrientationProps {
  orientation: 'horizontal' | 'vertical';
}

export const OverlayContainer = styled.div<OrientationProps>`
  position: relative;
  width: ${(props) => (props.orientation === 'horizontal' ? '800px' : '400px')};
  height: ${(props) =>
    props.orientation === 'horizontal' ? '450px' : '600px'};
  background-color: #111;
  overflow: hidden;
  color: white;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  border: 1px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: calc(50vh - 300px) auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface BackgroundImageProps {
  src: string;
}
export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  filter: brightness(60%);
  z-index: 1;
`;

export const Content = styled.div`
  z-index: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Logo = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 12px;
    color: #888;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Info = styled.div`
  font-size: 14px;
  color: #888;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.5;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
