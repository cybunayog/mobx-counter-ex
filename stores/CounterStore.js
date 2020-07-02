// Import packages
import { observable, action, decorate, computed } from 'mobx';
import { persist } from 'mobx-persist';

/**
 * count
 */
class CounterStore { 
    count = 0;

    /**
     * Getter function 
     * 
     * 
     * 
     * @returns {Int} String + count
     */
    get myCountValue() {
        return "Count=" + this.count;
    }

    /**
     * Increments by 1
     * 
     * @param {String} newCount asdf
     * @returns {String} asdf
     */
    incrementCountValue  = () => {
        this.count += 1;
    }

    /**
     * Decrements by 1
     * 
     * @param {String} newCount asdf
     * @returns {String} asdf
     */
    decrementCountValue = () => {
        this.count -= 1;
    }

    

}

decorate(CounterStore, {
    count: [observable, persist],
    myCountValue: computed,
    incrementCountValue: action,
    decrementCountValue: action,
});

export default CounterStore;

