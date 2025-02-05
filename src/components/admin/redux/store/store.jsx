import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Local storage के लिए
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '../reducers/index.jsx'; // Path सही करें

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'services'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist के लिए आवश्यक
    }),
});

export const persistor = persistStore(store);
export default store;
