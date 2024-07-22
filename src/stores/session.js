import { writable } from 'svelte/store';

export const session = writable({ loggedIn: false });

console.log('session', session);
