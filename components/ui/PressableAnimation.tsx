import {
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {usePressAnimation} from '../../hooks/usePressAnimation';

interface IPressableAnimated extends PressableProps {
  bounce?: boolean;
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  isDisabled?: boolean;
  isPressed?: boolean;
  scaleValue?: number;
}

const PressableAnimation = ({
  bounce = false,
  children,
  customStyles,
  isDisabled = false,
  isPressed = false,
  onPress,
  onPressIn,
  onPressOut,
  scaleValue = 1,
  ...props
}: IPressableAnimated) => {
  const {scale, animateIn, animateOut} = usePressAnimation({
    scaleValue,
    bounce,
  });

  const handleOnPress = () => {
    onPress && onPress();
  };

  const handleOnPressIn = () => {
    onPressIn && onPressIn();
    animateIn();
  };

  const handleOnPressOut = () => {
    onPressOut && onPressOut();
    animateOut();
  };
  return (
    <Pressable
      disabled={isDisabled}
      onPress={handleOnPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      delayLongPress={180}
      {...props}>
      <Animated.View
        style={[
          customStyles,
          {
            transform: [
              {
                scale: isPressed ? scaleValue : scale,
              },
            ],
          },
        ]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default PressableAnimation;
