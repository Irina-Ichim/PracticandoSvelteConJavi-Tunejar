<script>
  import logo from '../img/tunejar-logo.png';
  import { onMount } from 'svelte';

  let songs = [];
  onMount(() => {
    fetch('http://localhost:9000/api/songs')
      .then(respuesta => respuesta.json())
      .then(datos => {
        songs = datos; // Asignar los datos recibidos a la variable songs
      });
  });
  let playlistName = '';

  async function createPlaylist() {
    try {
      const response = await fetch('/api/playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: playlistName
        })
      });

      if (response.ok) {
        console.log('La playlist se creó correctamente');
      } else {
        console.error('Error al crear la playlist');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  }
</script>

<main>
  <header>
    <img src={logo} alt="logo de tunejar" class="logo" />
    <h1>TuneJar</h1>
    <button>LOGIN</button>
  </header>

  <h2>Crear Playlist</h2>

  <form on:submit|preventDefault={createPlaylist}>
    <input type="text" bind:value={playlistName} placeholder="Nombre de la playlist">
    <button type="submit">Crear playlist</button>
  </form>

  <div class="song-grid">
    {#each songs as song}
    <div class="song-card">
      <img src={song.cover} alt="" />
      <h3>{song.title}</h3>
      <p>{song.singer}</p>
    </div>
    {/each}
  </div>
</main>

<style>
  /* Estilos CSS personalizados */
</style>
