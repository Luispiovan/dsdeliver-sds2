import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fecthOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../Types';

function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    fecthOrders().then(response => setOrders(response.data))
                 .catch(() => Alert.alert('Houve um erro com os pedidos'))
                 .finally(() => setIsLoading(false));
  }, [])

  return (
    <>
        <Header />
        <ScrollView style={styles.container}>
            {isLoading ? (
              <Text style={styles.container}>Buscando pedidos...</Text>
            ) : (
              orders.map(order => (
                <TouchableWithoutFeedback key={order.id}>
                  <OrderCard order={order}/>
                </TouchableWithoutFeedback>
              ))
            )}
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
    
  }
})
    

export default Orders;
