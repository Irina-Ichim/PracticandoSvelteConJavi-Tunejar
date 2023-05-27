
  <script>
    import { navigate } from 'svelte-routing';


  
    function redirectToAgregarCanciones() {
      navigate('/agregar-canciones');
    }
  
    let playlistName = '';
  
    async function createPlaylist() {
      // Lógica para crear la playlist
    }
  </script>
  
  <main>
    <!-- Resto del contenido de tu componente principal -->
  
    <div class="container">
      <h2>Crear Playlist</h2>
  
      <form on:submit|preventDefault={createPlaylist}>
        <input type="text" bind:value={playlistName} placeholder="Nombre de la playlist">
        <button type="submit">Crear playlist</button>
      </form>
    </div>
  
    <button on:click={redirectToAgregarCanciones}>Agregar Canciones</button>
  
  </main>
  
  <style>
    /* Estilos CSS personalizados */
  </style>
  