import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${74 + getBottomSpace()}px;
  padding: 0 20px ${getBottomSpace()}px;
  background: #111;
`;

export const CoverBackground = styled.Image.attrs({
  blurRadius: 5,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Author = styled.Text`
  margin-top: 3px;
  color: #c4c4c4;
  font-size: 14px;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  },
})`
  margin-left: 10px;
`;

export const ControlIcon = styled(Icon).attrs({
  color: 'white',
  size: 32,
})``;
