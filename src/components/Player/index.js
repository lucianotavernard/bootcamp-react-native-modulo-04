import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerActions from '~/store/ducks/player';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon,
} from './styles';

const Player = ({
  player, currentEpisode, play, pause, prev, next,
}) => player.current && (
<Container>
  <CoverBackground source={{ uri: currentEpisode.artwork }} />

  <EpisodeInfo>
    <Title>{currentEpisode.title}</Title>
    <Author>{currentEpisode.artist}</Author>
  </EpisodeInfo>

  <Controls>
    <ControlButton onPress={prev}>
      <ControlIcon name="skip-previous" />
    </ControlButton>

    <ControlButton onPress={player.playing ? pause : play}>
      <ControlIcon name={player.playing ? 'pause-circle-filled' : 'play-circle-filled'} />
    </ControlButton>

    <ControlButton onPress={next}>
      <ControlIcon name="skip-next" />
    </ControlButton>
  </Controls>
</Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    playing: PropTypes.bool,
  }).isRequired,
  currentEpisode: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    artwork: PropTypes.string,
  }),
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

Player.defaultProps = {
  currentEpisode: null,
};

const mapStateToProps = state => ({
  player: state.player,
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(episode => episode.id === state.player.current)
    : null,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
