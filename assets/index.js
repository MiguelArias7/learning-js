const API =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet%2Cid&order=date&maxResults=10';
const content = null || document.getElementById('content');

async function fetchData(apiUrl, apiOptions) {
  const response = await fetch(apiUrl, apiOptions);
  const data = await response.json();
  return data;
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fe35d038b0msh1e6ac5cd0b3a0f6p174032jsn2e3b9302c7f9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

(async () => {
  try {
    const videos = await fetchData(API, options);
    let template = `${videos.items
      ?.map(
        (video) =>
          ` <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>`
      )
      .slice(0, 4)
      .join('')}`;

    console.log(template);
    content.innerHTML = template;
  } catch (error) {
    console.log(error);
    alert(error);
  }
})();
