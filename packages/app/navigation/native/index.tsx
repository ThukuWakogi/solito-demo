import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NewsDetailScreen from '../../../../apps/next/app/latest-news/[id]/page'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': { id: string }
  'latest-news': { id: string }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{ title: 'User' }}
      />
      <Stack.Screen
        name="latest-news"
        component={NewsDetailScreen}
        options={{ title: 'News' }}
      />
    </Stack.Navigator>
  )
}
