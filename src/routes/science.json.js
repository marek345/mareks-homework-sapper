import fetch from 'node-fetch'

export async function get(req, res) {
    const posts = await fetch('https://api.chucknorris.io/jokes/random?category=science')

    const contents = await posts.text()

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}
