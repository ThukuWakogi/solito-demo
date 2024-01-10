'use client'

import { Text, View } from 'dripsy'
import { TextLink } from 'solito/link'
import { useParams } from 'solito/navigation'

export function UserDetailScreen() {
  const { id } = useParams<{ id: string }>()

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`User ID: ${id}`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
