const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('nj-book-store-client.herokuapp.com', 'https://nj-book-store-server.herokuapp.com/');

export default environmentUrls.get(window.location.hostname);
