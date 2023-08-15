
<script>
  import logo from '../img/tunejar-logo.png';
  import { onMount } from 'svelte';

  let songs = [];
  let playlistName = '';

  onMount(() => {
    fetch('http://localhost:9000/api/songs')
      .then(respuesta => respuesta.json())
      .then(datos => {
        songs = datos; 
        console.log(songs);
      });
  });

  async function createPlaylist() {
    try {
      // Generar un nombre aleatorio para la playlist
      const randomPlaylistName = `Playlist ${Math.floor(Math.random() * 1000)}`;
      playlistName = randomPlaylistName;

      // Aquí puedes agregar lógica para enviar la solicitud de creación de la playlist al backend
      // y agregar las canciones a la playlist recién creada

      // Después de crear la playlist, puedes cerrar el modal
      toggleModal();

      console.log('La playlist se creó correctamente');
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  }

  
  let showModal = false; // Variable para controlar la visibilidad del modal

  function toggleModal() {
    showModal = !showModal; // Cambia el valor de la variable al hacer clic en el botón "LOGIN"
  }
</script>

<main>
  <header>
    <img src={logo} alt="logo de tunejar" class="logo" />
    <h1>TuneJar</h1>
    <button on:click={toggleModal}>LOGIN</button>
  </header>

  <div class="song-grid">
    {#each songs as song}
    <div class="song-card">
      <img src={song.cover} alt="" />
      <h3>{song.title}</h3>
      <p>{song.singer}</p>
    </div>
    {/each}
  </div>

  <div class="container">
    <h2>Crear Playlist</h2>

    <form on:submit|preventDefault={createPlaylist}>
      <input type="text" bind:value={playlistName} placeholder="Nombre de la playlist"><br>
      <button type="submit">Crear playlist</button>
    </form>
  </div>
  
  {#if showModal}
    <!-- Modal de inicio de sesión -->
    <div class="modal">
      <h2>Iniciar sesión</h2>
      <form>
        <input type="text" placeholder="Nombre de usuario">
        <input type="password" placeholder="Contraseña">
        <button type="submit">LOGIN</button>
      </form>
      <button class="close-button" on:click={toggleModal}>Cerrar</button>
    </div>
  {/if}

  
</main>

<style>
  /* Estilos CSS personalizados */

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal h2 {
    margin-bottom: 10px;
  }

  .modal form {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .modal input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .modal button {
    padding: 10px 10px;
    background-color: #ff57a6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .close-button {
    margin-top: 10px;
    background-color: #ccc;
    color: white;
  }
</style>
