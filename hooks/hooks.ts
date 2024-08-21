import {type StackNavigationProp} from '@react-navigation/stack';
import {
  type ParamListBase,
  useNavigation as useDefaultNavigation,
} from '@react-navigation/native';

export const useNavigation = useDefaultNavigation<
  StackNavigationProp<ParamListBase>
>;
