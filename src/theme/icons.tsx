import {Image} from 'react-native';
import {VectorIconProps} from '../utils/types';
import {getWidth} from '../utils/utilities';

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
