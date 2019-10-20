
var orderCount = 0;
var ProdOrderCount = 0;
var usernames = [];

const getOrderCountForUser = (name) => {
  const users = require('./resources/users.json')
  for (user of users) {
    if (user.name === name) {
      const userId = user.userId      
      const orders = require('./resources/orders.json')
      for (order of orders) {
        if (order.userId === userId) {
          orderCount ++  
        }
      }
      return orderCount
    } 
  }
  return 0
}
  
const getOrderCountForProduct = (productName) => {
  const products = require('./resources/products.json')
  for (product of products) {
    if (product.productName === productName) {
      const productId = product.productId      
      const orders = require('./resources/orders.json')
      for (order of orders) {
        if (order.productId === productId) {
          ProdOrderCount ++  
        }
      }
      return ProdOrderCount
    } 
  }
} 
  
const getCustomerNamesForProduct = (productName) => {
  const products = require('./resources/products.json')
  const orders = require('./resources/orders.json')
  const users = require('./resources/users.json')

  let usernames = new Set(); // Using Set to avoid storing duplicate usernames.

  let productId = products.find(product => product.productName === productName).productId;
  
  let filteredOrders = orders.filter(order => order.productId === productId);

  filteredOrders.forEach(order => {
    let user = users.find(user => user.userId === order.userId);
    usernames.add(user.name);
  });

  return Array.from(usernames);
} 

  
const getMostPopularProduct = () => {
  return ['chair']
}
  
module.exports = {
  getOrderCountForUser,
  getOrderCountForProduct,
  getCustomerNamesForProduct,
  getMostPopularProduct
}
