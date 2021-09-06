<template>
        <!-- This will show a button that gives you the ability to show or hide the books - referring to the script section -->
        <div v-if="showBooks" class="py-4 px-8 bg-gray-300 shadow-lg rounded-lg my-20">
            <ul>
                <!-- This here will loop through the items listing all books in the list -->
                <li v-for="book in books" @click="FavChange(book)" :class="{ fav: book.isFav }" :key="book.id">
                    <img :src="book.img" :alt="book.title">
                    <h3>{{ book.title }}</h3>
                    <p>{{ book.author }}</p>
                </li>
            </ul>
            <!-- This here will filter off the favorite books and put them together in a container -->
            <div class="max-w-md py-4 px-8 bg-gray-300 shadow-lg rounded-lg my-20">
                <ul>
                    <li v-for="book in filteredBooks" @click="FavChange(book)" :class="{ fav: book.isFav }" :key="book.id">
                    <img :src="book.img" :alt="book.title">
                    <h3>{{ book.title }}</h3>
                    <p>{{ book.author }}</p>
                    </li>
                </ul>
            </div>

        </div>

        <div v-else>
            <p>Click the button below to show books</p>
        </div>

        <button @click="toggleShowBooks" class="my-8">
            <span v-if="showBooks" class="max-w-sm py-4 px-8 bg-gray-300 shadow-lg rounded-lg my-20">Hide books</span>
            <span v-else class="max-w-sm py-4 px-8 bg-gray-300 shadow-lg rounded-lg my-20">Show books</span>
        </button>

        <SecondComponent />

</template>

<script>
import SecondComponent from './SecondComponent'

export default {

    // This is the name of the current component
    name: 'Vue Test',
    // This will register the current active components
    components: { SecondComponent },

    data() {
        return {
            // This is the data that will be used in the component
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: './public/assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: './public/assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: './public/assets/3.jpg', isFav: true },
                ],
            }
    },
    methods: {
        toggleShowBooks() {
        this.showBooks =  !this.showBooks
        },
        FavChange(book) {
            // This will change the isFav property of the book. The ! will reverse the value
            book.isFav = !book.isFav
        }


    },
    computed: {

        filteredBooks(){
            // This will filter the books based on the isFav property
            return this.books.filter((book) => book.isFav)
        }

    }
}
</script>


<style>

            /*  This is the style section for the component inluding tailwind imports */
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

            body{
              background: #eee;
              max-width: 960px;
              margin: 20px auto;
            }
            p, h3, ul{
              margin: 0;
              padding: 0;
            }
            li{
              list-style-type: none;
              background: #fff;
              margin: 20px auto;
              padding: 10px 20px;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            li.fav{
              background: #73ff00;
              color: white;
            }
</style>
