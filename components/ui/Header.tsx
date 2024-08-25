import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {type FC, Fragment} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import MyStatusBar from './MyStatusBar';
import ArrowIcon from '../../assets/Arrow';
import {colors} from '../../constants';
import MenuIcon from '../../assets/MenuIcon';

type HeaderType = 'logo' | 'title';

interface HeaderProps {
  type?: HeaderType;
  title?: string | JSX.Element;
  back?: boolean;
  shadow?: boolean;
  rightAction?: boolean;
  border?: boolean;
}

const Header: FC<HeaderProps> = props => {
  const {
    type = 'title',
    title,
    back = true,
    shadow = true,
    rightAction,
    border = true,
  } = props;
  const {goBack, dispatch} = useNavigation();

  const drawerMenuAction = () => {
    dispatch(DrawerActions.openDrawer());
  };
  return (
    <View
      style={[
        {backgroundColor: colors.BG},
        shadow ? styles.shadow : undefined,
        border ? styles.border : undefined,
      ]}>
      <MyStatusBar colorStatus={colors.BG2} barStyleT="dark-content" />
      <View
        style={[styles.container, type === 'title' && styles.titleContainer]}>
        {type === 'logo' && (
          <Fragment>
            <Image
              width={66}
              height={40}
              style={{height: 40, width: 66}}
              source={require('../../assets/Logo.png')}
            />

            {title && <Text style={styles.logoTitle}>{title}</Text>}
            {rightAction && (
              <TouchableOpacity
                onPress={drawerMenuAction}
                style={styles.rightAction}>
                <MenuIcon color={colors.WHITE} />
              </TouchableOpacity>
            )}
          </Fragment>
        )}
        {type === 'title' && (
          <Fragment>
            {back && (
              <TouchableOpacity
                style={styles.back}
                onPress={() => {
                  goBack();
                }}>
                <ArrowIcon
                  width={24}
                  height={24}
                  color={colors.ORANGE}
                  rotate={90}
                />
              </TouchableOpacity>
            )}
            {typeof title === 'string' ? (
              <Text style={styles.title}>{title}</Text>
            ) : typeof title === 'object' ? (
              title
            ) : null}

            {rightAction && (
              <TouchableOpacity style={styles.rightAction}>
                <MenuIcon />
              </TouchableOpacity>
            )}
          </Fragment>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.BG,
  },
  border: {
    borderBottomWidth: 0.25,
    borderColor: colors.BORDER_GRAY,
  },
  shadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    height: 60,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.BG,
  },
  logoTitle: {
    color: colors.BLACK,
    marginTop: 6,
    marginLeft: 8,
    lineHeight: 22,
    letterSpacing: -0.36,
    textTransform: 'uppercase',
  },
  titleContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    color: colors.BLACK,
  },
  back: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  rightAction: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: '100%',
  },
});

export default Header;
