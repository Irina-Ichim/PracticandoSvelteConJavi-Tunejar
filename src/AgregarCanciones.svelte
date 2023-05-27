<script>
    import { onMount } from 'svelte';
  
    let songs = [];
  
    onMount(async () => {
      // Obtener la lista de canciones desde tu API o cualquier otra fuente de datos
      try {
        const response = await fetch('http://localhost:9000/api/songs');
        if (response.ok) {
          const data = await response.json();
          songs = data;
        } else {
          console.error('Error al obtener la lista de canciones');
        }
      } catch (error) {
        console.error('Error en la solicitud', error);
      }
    });
  
    async function addSong() {
      // Lógica para agregar la canción
      try {
        const response = await fetch('/api/playlists/{playlistId}/songs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            // Datos de la canción que quieres agregar
            title: 'Canción Nueva',
            artist: 'Artista',
            // Otros datos relevantes
          })
        });
  
        if (response.ok) {
          console.log('Canción agregada correctamente');
        } else {
          console.error('Error al agregar la canción');
        }
      } catch (error) {
        console.error('Error en la solicitud', error);
      }
    }
  </script>
  
  <main>
    <h2>Agregar Canciones</h2>
  
    <div class="song-grid">
      {#each songs as song}
      <div class="song-card">
        <img src={song.cover} alt="" />
        <h3>{song.title}</h3>
        <p>{song.singer}</p>
      </div>
      {/each}
    </div>
  
    <form on:submit|preventDefault={addSong}>
      <h3>Agregar Nueva Canción</h3>
      <input type="text" placeholder="Título" />
      <input type="text" placeholder="Artista" />
      <!-- Otros campos de entrada para los datos de la canción -->
  
      <button type="submit">Agregar</button>
    </form>
  </main>
  
  <style>
    h3{
        background: red;
    }
  </style>
  