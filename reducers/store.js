import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Use AsyncStorage for persistence in React Native
import rootReducer from '.'; // Your root reducer combining all your app's reducers

// Redux Persist configuration
const persistConfig = {
  key: 'root', // Key for the root persist store
  storage: AsyncStorage, // Use AsyncStorage for storing state in React Native
  whitelist: ['auth'], // Optionally, specify reducers to persist (if not all)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persisted reducer
export const store = createStore(persistedReducer);

// Create a persistor for Redux Persist
export const persistor = persistStore(store);
