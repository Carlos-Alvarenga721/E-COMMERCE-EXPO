import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
    {/* Sección superior: Producto destacado */}
    <View style={styles.featuredProduct}>
      <Image
        source={{ uri: 'https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart' }} 
        style={styles.featuredImage}
      />
      <Text style={styles.featuredText}>Shop Sale</Text>
      <TouchableOpacity style={styles.checkButton}>
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>
    </View>

    {/* Sección inferior: Nuevos productos */}
    <View style={styles.newProductsSection}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <Text style={styles.subtitle}>You've never seen it before!</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.productCard}>
          <Image
            source={{ uri: 'https://i.ebayimg.com/thumbs/images/g/61gAAOSwkLNezrbK/s-l640.jpg' }} // Cambia esto a la imagen de tu producto
            style={styles.productImage}
          />
          <Text style={styles.newLabel}>NEW</Text>
        </View>
        <View style={styles.productCard}>
          <Image
            source={{ uri: 'https://example.com/product2.png' }} // Cambia esto a la imagen de tu producto
            style={styles.productImage}
          />
          <Text style={styles.newLabel}>NEW</Text>
        </View>
        {/* Agrega más productos según sea necesario */}
      </ScrollView>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  featuredProduct: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  featuredImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  featuredText: {
    position: 'absolute',
    top: 100,
    left: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF',
  },
  checkButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#FF3D00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  checkButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newProductsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: '#007BFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  productCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  newLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF3D00',
    color: '#FFF',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
