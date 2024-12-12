import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: [], 
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product); 
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));
    },
    removeFromBag(state, productId) {
      state.productsInBag = state.productsInBag.filter(item => item.id !== productId);
    },
    loadBag(state, products) {
      state.productsInBag = products;
    },
    
  },
  
  actions: {
    loadProducts({ commit }) {
      axios
        .get('https://fakestoreapi.com/products')
        .then(response => {
          commit('loadProducts', response.data);
        });
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({ commit }, productId) {
      if (confirm('Deseja remover o produto?')) {
        commit('removeFromBag', productId);
      }
    },
    loadBag({ commit }) {
      if( localStorage.getItem("productsInBag")){
        commit('loadBag', JSON.parse(localStorage.getItem("productsInBag")));
      }    
    }
  },
  
  modules: {}
});
