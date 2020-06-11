// Import packages
import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';
// Import all other stores
import CounterStore from './CounterStore';
// Hydration configuration for mobx-persist
const hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
});
/**
 * 	RootStore
 * 	A store that stores all stores.
 */
class RootStore {
    // Instantiate each store
    CounterStore = new CounterStore(this);
    constructor() {
        // Hydrate each store
        hydrate('counter', this.CounterStore).then(res => {
            // TokenStore has been hydrated!
        });
    }
}
// Export the store
export default new RootStore();