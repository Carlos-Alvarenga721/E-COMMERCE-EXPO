import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProfileOption {
  id: string;
  title: string;
  subtitle: string;
}

const ProfileScreen = () => {
  // Datos de las opciones del perfil
  const profileOptions = [
    { id: '1', title: 'Shipping addresses', subtitle: '3 addresses' },
    { id: '2', title: 'Payment methods', subtitle: 'Visa **34' },
    { id: '3', title: 'Promocodes', subtitle: 'You have special promocodes' },
    { id: '4', title: 'Settings', subtitle: 'Notifications, password' },
  ];

  // Renderizado de cada opción de la lista
  const renderOptionItem = ({ item } : {item: ProfileOption}) => (
    <TouchableOpacity style={styles.optionItem}>
      <View>
        <Text style={styles.optionTitle}>{item.title}</Text>
        <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado: imagen de perfil, nombre y correo */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/47.jpg' }} // Imagen de perfil (puedes cambiar la URL)
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Maria Eunice</Text>
          <Text style={styles.profileEmail}>mariaEu246@gmail.com</Text>
        </View>
      </View>

      {/* Lista de opciones del perfil */}
      <FlatList
        data={profileOptions}
        renderItem={renderOptionItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProfileScreen;
