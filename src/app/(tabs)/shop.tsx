import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShopScreen() {
  // Datos de ejemplo para las categorías
  const categories = [
    { id: '1', name: 'Phones', icon: 'phone-portrait-outline' },
    { id: '2', name: 'Computers', icon: 'desktop-outline' },
    { id: '3', name: 'SmartWatch', icon: 'watch-outline' },
    { id: '4', name: 'Clothes', icon: 'shirt-outline' },
    { id: '5', name: 'HeadPhones', icon: 'headset-outline' },
    { id: '6', name: 'Gaming', icon: 'game-controller-outline' },
  ];

  // Renderizado de cada categoría
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Ionicons name={item.icon} size={40} color="black" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Barra de navegación superior */}
      <View style={styles.navBar}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={styles.navBarTitle}>Categories</Text>
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

      {/* Botón "VIEW ALL ITEMS" */}
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>

      {/* Título "Choose category" */}
      <Text style={styles.chooseCategory}>Choose category</Text>

      {/* Cuadrícula de categorías */}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Mostrar las categorías en 2 columnas
        contentContainerStyle={styles.categoryGrid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  navBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  viewAllText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chooseCategory: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
    color: '#777777',
  },
  categoryGrid: {
    justifyContent: 'space-between',
  },
  categoryItem: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    margin: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Para sombras en Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // Para sombras en iOS
  },
  categoryText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
