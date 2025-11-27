document.addEventListener('DOMContentLoaded', function () {
    // Fetch SPSA Events via Posts, Category 15 = "Saskatoon Events"
    fetch('https://spsa.ca/wp-json/wp/v2/posts?categories=15')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (data) {
            console.log('Posts:', data);
            
            const main = document.querySelector('main');

            data.map(post => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <a href="${post.link}" target="_blank">
                        <h3>${post.title.rendered}</h3>
                    </a>
                    <img src="${post.featured_image_src_large[0]}" alt="${post.title.rendered}">
                    <div>${post.content.rendered}</div>
                `;
                main.appendChild(article);
            });
        })
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
});
