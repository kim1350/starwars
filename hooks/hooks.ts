import {type StackNavigationProp} from '@react-navigation/stack';
import {
  type ParamListBase,
  useNavigation as useDefaultNavigation,
} from '@react-navigation/native';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../store';
export const useNavigation = useDefaultNavigation<
  StackNavigationProp<ParamListBase>
>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
