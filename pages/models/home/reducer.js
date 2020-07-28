function delay(ms = 2000) {
  return new Promise((r) => setTimeout(r, ms));
}

export function changeTip(e) {
  const tip = e.target.value;
  return { tip };
}

export function suffixBomb(p, m) {
  return { tip: `${m.tip}_bomb` };
}

export async function fetchData(p, m, ac) {
  ac.setState({ loading: true });
  await delay();
  return { tip: 'fetched tip at ' + Date.now(), loading: false };
}