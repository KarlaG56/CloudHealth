import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const SelectInput = ({ label, items, value, onValueChange }) => {
    return (
        <RNPickerSelect
            placeholder={{ label: label, value: null }}
            items={items.map((item, index) => ({ label: item, value: index }))}
            value={value}
            onValueChange={onValueChange}
            style={pickerSelectStyles}
            placeholderTextColor={'#777'}
        />
    );
};

const pickerSelectStyles = {

    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#EBEBEB',
        marginBottom: 10,
        borderRadius: 5,

    },
    placeholder: {
        color: '#777',
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
};

export default SelectInput;
