import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Bag = () => {
  // Lista de productos de ejemplo
  const [items, setItems] = useState([
    { id: '1', name: 'Smart Tv', color: 'Black', brand: 'Samsung', price: 550, quantity: 1, image: 'https://link-to-image1.com' },
    { id: '2', name: 'Wireless Headphone', color: 'Black', brand: 'JBL', price: 110, quantity: 2, image: 'https://link-to-image2.com' },
    { id: '3', name: 'Sport Dress', color: 'Black', size: 'M', price: 65, quantity: 1, image: 'https://link-to-image3.com' },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Función para incrementar/decrementar cantidad de items
  const updateQuantity = (id, action) => {
    setItems(prevItems =>
      prevItems.map(item => item.id === id 
        ? { ...item, quantity: action === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
        : item
      )
    );
  };

  // Renderizado de cada producto en la lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemInfo}>Color: {item.color}  {item.brand ? `Brand: ${item.brand}` : `Size: ${item.size}`}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrement')}>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 'increment')}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bag</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.promoContainer}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter your promo code"
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <TouchableOpacity style={styles.promoButton}>
          <Ionicons name="arrow-forward-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total amount:</Text>
        <Text style={styles.totalPrice}>${totalAmount}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  listContainer: { paddingBottom: 20 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
  itemImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemInfo: { fontSize: 14, color: 'gray', marginBottom: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  quantity: { fontSize: 16, marginHorizontal: 10 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  promoContainer: { flexDirection: 'row', marginTop: 20, alignItems: 'center' },
  promoInput: { flex: 1, padding: 10, backgroundColor: '#fff', borderRadius: 10, marginRight: 10 },
  promoButton: { padding: 10 },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' },
  totalText: { fontSize: 18, fontWeight: 'bold' },
  totalPrice: { fontSize: 18, fontWeight: 'bold', color: '#e53935' },
  checkoutButton: { backgroundColor: '#e53935', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  checkoutText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default Bag;
