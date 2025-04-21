import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
    const [soilType, setSoilType] = useState('black');
    const [cropType, setCropType] = useState('cotton');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [moisture, setMoisture] = useState('');
    const [nitrogen, setNitrogen] = useState('');
    const [potassium, setPotassium] = useState('');
    const [phosphorous, setPhosphorous] = useState('');
    const [prediction, setPrediction] = useState('');

    const handlePredict = () => {
        const data = {
            soil: soilType,
            crop: cropType,
            // features: [parseFloat(temperature), parseFloat(humidity), parseFloat(moisture), parseFloat(nitrogen), parseFloat(potassium), parseFloat(phosphorous)]
        };

        fetch('https://fertilizer-docker-api.onrender.com/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            setPrediction(result.fertilizer);
            console.log(result.fertilizer);

        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Fertilizer Recommendation</Text>

            <Text>Soil Type:</Text>
            <Picker selectedValue={soilType} style={styles.input} onValueChange={(itemValue) => setSoilType(itemValue)}>
                <Picker.Item label="Black" value="black" />
                <Picker.Item label="Clayey" value="clay" />
                <Picker.Item label="Loamy" value="loamy" />
                <Picker.Item label="Red" value="red" />
                <Picker.Item label="Sandy" value="sandy" />
            </Picker>

            <Text>Crop Type:</Text>
            <Picker selectedValue={cropType} style={styles.input} onValueChange={(itemValue) => setCropType(itemValue)}>
                <Picker.Item label="Barley" value="Barley" />
                <Picker.Item label="Cotton" value="cotton" />
                <Picker.Item label="Ground Nuts" value="Ground Nuts" />
                <Picker.Item label="Maize" value="Maize" />
                <Picker.Item label="Millets" value="Millets" />
                <Picker.Item label="Oil seeds" value="Oil seeds" />
                <Picker.Item label="Paddy" value="Paddy" />
                <Picker.Item label="Pulses" value="Pulses" />
                <Picker.Item label="Sugarcane" value="Sugarcane" />
                <Picker.Item label="Tobacco" value="Tobacco" />
                <Picker.Item label="Wheat" value="wheat" />
                <Picker.Item label="coffee" value="coffee" />
                <Picker.Item label="kidneybeans" value="kidneybeans" />
                <Picker.Item label="orange" value="orange" />
                <Picker.Item label="pomegranate" value="pomegranate" />
                <Picker.Item label="rice" value="rice" />
                <Picker.Item label="watermelon" value="watermelon" />
            </Picker>

            <Text>Temperature:</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={temperature} onChangeText={setTemperature} />

            <Text>Humidity:</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={humidity} onChangeText={setHumidity} />

            <Text>Moisture:</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={moisture} onChangeText={setMoisture} />

            <Text>Nitrogen:</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={nitrogen} onChangeText={setNitrogen} />

            <Text>Potassium:</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={potassium} onChangeText={setPotassium} />

            <Text>Phosphorous:</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={phosphorous} onChangeText={setPhosphorous} />

            <Button title="Get Prediction" onPress={handlePredict} />

            {prediction ? (
                <Text style={styles.result}>Predicted Fertilizer: {prediction}</Text>
            ) : null}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        marginBottom: 100,  // Increased margin to create more space at the bottom
        fontWeight: 'bold',
    },
});
