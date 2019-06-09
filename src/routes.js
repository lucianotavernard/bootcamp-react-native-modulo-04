import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/main';
import Podcast from '~/pages/podcast';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Podcast,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
