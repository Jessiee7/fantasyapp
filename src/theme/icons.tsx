import {Image} from 'react-native';
import {VectorIconProps} from '../utils/types';
import {getWidth} from '../utils/utilities';
import {colors} from './colors';

export const EyeIcon: React.FC<VectorIconProps> = ({size}) => (
  <Image
    source={require('../assets/images/visible.png')}
    style={{
      width: size ? size : getWidth(24),
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const EyeSlashIcon: React.FC<VectorIconProps> = ({size}) => (
  <Image
    source={require('../assets/images/hide.png')}
    style={{
      height: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
  />
);
export const CheckIcon: React.FC<VectorIconProps> = ({size, color}) => (
  <Image
    source={require('../assets/images/check.png')}
    style={{
      height: size ? size : getWidth(24),
      width: size ? size : getWidth(24),
    }}
    resizeMode={'contain'}
    tintColor={color ? color : colors.BLACK_SECONDARY}
  />
);
