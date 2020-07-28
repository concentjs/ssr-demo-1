import { run } from 'concent';

function delay(ms = 2000) {
  return new Promise((r) => setTimeout(r, ms));
}

run({
  home: {
    state: {
      tip: 'hello concent', loading: false,
    },
    reducer: {
      changeTip(e) {
        const tip = e.target.value;
        return { tip };
      },
      async fetchData(p, m, ac) {
        ac.setState({ loading: true });
        await delay();
        return { tip: 'fetched tip at ' + Date.now(), loading: false };
      }
    },
    computed:{
      reversedTip({tip}){
        return tip.split('').reverse().join('');
      }
    }
  }
})
