import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})``;

export const PodcastDetails = styled.View`
  align-items: center;
  padding: 0 0 20px;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: ${310 + getStatusBarHeight()}px;
  opacity: 0.2;
`;

export const PodcastTitle = styled.Text`
  margin-top: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.2,
})`
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 50px;
  margin: 30px 40px 0;
  border-radius: 25px;
  background: #1db954;
`;

export const PlayButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight()}px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: ${({ active }) => (active ? '#1db954' : 'white')};
  font-size: 16px;
`;

export const Author = styled.Text`
  color: #c4c4c4;
  font-size: 14px;
  margin-top: 3px;
`;
