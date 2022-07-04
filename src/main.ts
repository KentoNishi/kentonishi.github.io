import './i18n/i18n';
import 'no-darkreader';
import App from './views/App.svelte';
import { loaded } from './ts/stores';

const app = new App({
  target: document.getElementById('app'),
});
setTimeout(() => {
  loaded.set(true);
}, 2000);

export default app;
