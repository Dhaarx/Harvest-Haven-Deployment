import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function ChatBot() {
  const [selectedTab, setSelectedTab] = useState('Crops');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages(prevMessages => [...prevMessages, { from: 'Me', text: inputMessage }]);

    const endpoint = selectedTab === 'Crops'
      ? 'https://cropbot-api.onrender.com/crops'
      : 'https://cropbot-api.onrender.com/livestock';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, { from: selectedTab, text: data.response }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setInputMessage('');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header Tabs */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#f5f5f5' }}>
        <TouchableOpacity onPress={() => setSelectedTab('Crops')}>
          <Text style={{
            fontWeight: selectedTab === 'Crops' ? 'bold' : 'normal',
            backgroundColor: selectedTab === 'Crops' ? '#03A376' : '#f5f5f5',
            padding: 15, borderRadius: 20, fontFamily: 'monospace'
          }}>
            Crops AI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Livestock')}>
          <Text style={{
            fontWeight: selectedTab === 'Livestock' ? 'bold' : 'normal',
            backgroundColor: selectedTab === 'Livestock' ? '#03A376' : '#f5f5f5',
            padding: 15, borderRadius: 20, fontFamily: 'monospace'
          }}>
            Livestock AI
          </Text>
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{
            alignSelf: item.from === 'Me' ? 'flex-end' : 'flex-start',
            margin: 10, padding: 10,
            backgroundColor: item.from === 'Me' ? '#d3f4ff' : '#e2e2e2',
            borderRadius: 10, maxWidth: '80%'
          }}>
            {item.text.split('\n').map((line, idx) => (
              <Text key={idx} style={{ marginBottom: 5 }}>
                {line}
              </Text>
            ))}
          </View>
        )}
      />

      {/* Message Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderTopWidth: 1, borderColor: '#ddd' }}>
        <TextInput
          placeholder="Ask me anything..."
          style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 20 }}
          value={inputMessage}
          onChangeText={setInputMessage}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleSendMessage}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
