/*import { onMount } from 'svelte'
import './app.css'
// @ts-ignore
import App from './App.svelte'



console.log('irina')

const app = new App({
  target: document.getElementById('app'),
})
export default app


let songs = []
onMount(() => {
  fetch('http://localhost:9000/api/songs')
    .then(respuesta => respuesta.json())
    .then(datos => {
      songs = datos // Asignar los datos recibidos a la variable songs
    })
    console.log(songs)
})*/
import { onMount } from 'svelte';
import './app.css';
import App from './App.svelte';

console.log('irina');

const app = new App({
  target: document.getElementById('app'),
});

export default app;

let songs = [];
onMount(() => {
  fetch('http://localhost:9000/api/songs')
    .then(respuesta => respuesta.json())
    .then(datos => {
      songs = datos; // Asignar los datos recibidos a la variable songs
      console.log(songs);
    });
});





  