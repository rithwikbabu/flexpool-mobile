import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { darkColors } from '../infrastructure/theme/colors';
import { TouchableOpacity, View } from 'react-native';
export const Infoicon = () => {
    return (
        <TouchableOpacity>
            <Ionicons name='information-circle-outline' size={15} color='#0069ff' />
        </TouchableOpacity>
    );
};