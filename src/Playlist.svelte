<script>
    let playlistName = '';
  
    async function createPlaylist() {
      try {
        const response = await fetch('/api/songs', {  // Ajusta la ruta a '/api/songs'
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: playlistName
          })
        });
  
        if (response.ok) {
          // La playlist se creó con éxito, puedes mostrar un mensaje o realizar alguna acción adicional
          console.log('La playlist se creó correctamente');
        } else {
          // Ocurrió un error al crear la playlist, puedes mostrar un mensaje de error o realizar alguna acción adicional
          console.error('Error al crear la playlist');
        }
      } catch (error) {
        // Ocurrió un error en la solicitud, puedes mostrar un mensaje de error o realizar alguna acción adicional
        console.error('Error en la solicitud', error);
      }
    }
  </script>
  
  <h2>Crear Playlist</h2>
  
  <form on:submit|preventDefault={createPlaylist}>
    <input type="text" bind:value={playlistName} placeholder="Nombre de la playlist">
    <button type="submit">Crear playlist</button>
  </form>
  