import { TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface Props {
    onPress?: () => void,
    placeholder: string,
    value?: string,
    onChangeText?: (text: string) => void
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Feather name={'search'} size={20} color={'#ab8bff'} ></Feather>
            <TextInput onPress={onPress} placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#ab8bff'
                className='flex-1 ml-2 text-white'
            />
        </View>
    )
}

export default SearchBar