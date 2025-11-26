import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {datasource} from './Data';

const Edit = ( {navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
                value={letter} maxLength={1} style={{borderWidth: 1}} onChangeText={ (text) => setLetter(text)}></TextInput>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, margin: 10}}>
                    <Button title='SAVE'
                    onPress={() => {
                        let indexnum = 1
                        if(route.params.type=="Vowels") {
                            indexnum = 0;
                    }
                    datasource[indexnum].data[route.params.index].key = letter;
                    navigation.navigate('Home');
                    }}/>
                </View>
                <View style={{flex: 1, margin: 10}}>
                    <Button title='DELETE'
                            onPress={() => {
                                let indexnum = 1;
                                if (route.params.type === 'Vowels') {
                                    indexnum = 0;
                                }
                                Alert.alert("Are you sure?", '', [
                                    {text: 'Yes',
                                        onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate('Home');
                                        }},
                                    {text: 'No'}
                                ]);
                            }}
                    />
                </View>

            </View>
        </View>
    );
};

export default Edit;