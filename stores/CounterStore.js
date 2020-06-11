// Import packages
import { observable, action, decorate, computed } from 'mobx';
import { persist } from 'mobx-persist';

class CounterStore { 
    count = 0;

    get myCountValue() {
        return "Count=" + this.count;
    }

    incrementCountValue  = () => {
        this.count += 1;
    }

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

