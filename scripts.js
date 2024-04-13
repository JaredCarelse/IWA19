import{books,authors,genres, BOOKS_PER_PAGE} from './data.js'

const fragment = document.createDocumentFragment()
const extracted = books.slice (0.36)

const bookPreview = (book) => {
    const {author: id,title,image,authorId} = book;
    const preview = document.createElement('button')
preview.classList.add('preview')
preview.setAttribute('data-preview', id)
preview.innerHTML = /*html*/

    <><img
        class="preview__image"
        src="${image}" /><div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors}{authorId}</div>
        </div></>
;
return preview
};

extracted.forEach((book) => {
    const preview = bookPreview(book)
    fragment.appendChild(preview);
});

const dataListItems = document.querySelector('[data-list-items]');
dataListItems.appendChild(fragment);

//As a user, I want to view a list of book previews, by title and author, so that I can discover new books to read. 
// As a user, I want an image associated with all book previews so that I can recognize a book by the cover even if I forgot the name.
// Handle click on book previews
data-list-items.addEventListener('click', (event) => {
   const preview = event.target.closest('.preview');
   if (!preview) return;
   const previewId = preview.dataset.preview;
   const active = matches.find(book => book.id === previewId);
   if (!active) return;
   data-list-active.open = true;
   data-list-blur.src = active.image;
   data-list-title.textContent = active.title;
   const authorName = authors[active.author];
   const publishedYear = new Date(active.published).getFullYear();
   data-list-subtitle.textContent = `${authorName} (${publishedYear})`;
   data-list-description.textContent = active.description;
});

// Create a document fragment to hold book previews
const documentfragment = document.createDocumentFragment();


// Loop through extracted books and create previews
for (const { author, image, title, id } of extracted) {
   const preview = createPreview({ author, id, image, title });
   fragment.appendChild(preview);
}

//As a user, I want to have the option of reading a summary of the book so that I can decide whether I want to read it.
//As a user, I want to have the option of seeing the date that a book was published so that I can determine how easy it is to obtain second-hand.

// Handle click on book previews
data-list-items.addEventListener('click', (event) => {
   const preview = event.target.closest('.preview');
   if (!preview) return;
   const previewId = preview.dataset.preview;
   const active = matches.find(book => book.id === previewId);
   if (!active) return;
   data-list-active.open = true;
   data-list-blur.src = active.image;
   data-list-title.textContent = active.title;
   const authorName = authors[active.author];
   const publishedYear = new Date(active.published).getFullYear();
   data-list-subtitle.textContent = `${authorName} (${publishedYear})`;
   data-list-description.textContent = active.description;
});

//As a user, I want to find books based on specific text phrases so that I don’t need to remember the entire title of a book. As a user, I want to filter books by genre so that I can find books to read in genres that I enjoy.
// Handle search form submission
data-header-search.addEventListener('click', () => {
   data-search-overlay.open = true;
   data-search-title.focus();
});
data-search-form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formData = new FormData(event.target);
   const filters = Object.fromEntries(formData);
   const result = matches.filter(book => {
       const titleMatch = !filters.title.trim() || book.title.toLowerCase().includes(filters.title.toLowerCase());
       const authorMatch = filters.author === 'any' || book.author === filters.author;
       const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);
       return titleMatch && authorMatch && genreMatch;
   });
   data-list-message.classList.toggle('list__message_show', result.length === 0);
   data-list-items.innerHTML = '';
   const previewsFragment = createPreviewsFragment(result, 0, 36);
   data-list-items.appendChild(previewsFragment);
   const initial = matches.length - (page * BOOKS_PER_PAGE);
   const remaining = Math.max(initial, 0);
   data-list-button.disabled = initial > 0;
   data-list-button.textContent = `Show more (${remaining})`;
   window.scrollTo({ top: 0, behavior: 'smooth' });
   data-search-overlay.open = false;
});


//As a user, I want to filter books by author so that I can find books to read by authors that I enjoy.
// Create options for authors filter
const authors = document.createDocumentFragment();
const allAuthorsOption = document.createElement('option');
allAuthorsOption.value = 'any';
allAuthorsOption.textContent = 'All Authors';
authors.appendChild(allAuthorsOption);
for (const author of Object.keys(authors)) {
   const option = document.createElement('option');
   option.value = author;
   option.textContent = author;
   authors.appendChild(option);
}


//As a user, I want to toggle between dark and light modes so that I can use the app comfortably at night.
// Define day and night theme colors
const { dark: dayDark, light: dayLight } = day;
const { dark: nightDark, light: nightLight } = night;




// Handle settings form submission
data-settings-overlay.addEventListener('submit', (event) => {
   event.preventDefault();
   const formData = new FormData(event.target);
   const result = Object.fromEntries(formData);
   const theme = result.theme;
   document.documentElement.style.setProperty('--color-dark', theme === 'night' ? nightDark : dayDark);
   document.documentElement.style.setProperty('--color-light', theme === 'night' ? nightLight : dayLight);
   data-settings-overlay.open = false;
});







































