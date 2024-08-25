import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const MenuIcon = ({
  width = 24,
  height = 24,
  color = '#212121',
}: LogoProps): JSX.Element => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M3 6C3 5.44772 3.44772 5 4 5H14C14.5523 5 15 5.44772 15 6C15 6.55228 14.5523 7 14 7H4C3.44772 7 3 6.55228 3 6Z"
        fill={color}
      />
      <Path
        d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
        fill={color}
      />
      <Path
        d="M3 18C3 17.4477 3.44772 17 4 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H4C3.44772 19 3 18.5523 3 18Z"
        fill={color}
      />
    </Svg>
  );
};

export default MenuIcon;
