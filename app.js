const app = Vue.createApp({
	data() {
		return {
			url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3',
			showBooks: true,
		books:[
		{title: 'name of me', author: 'slave ng', img: 'img/1.jpeg', isFav:true},
		{title: 'name of you', author: 'hell of us',img: 'img/2.jpeg',isFav:false},
		{title: 'the way of your walk', author: 'nensi',img: 'img/3.jpeg',isFav:true},


		]
		}
	},

	methods: {
		
		toggleShowBooks(){
			this.showBooks = !this.showBooks
		},
		toggleFav(book){
			book.isFav = !book.isFav
		}

	},

	computed: {
		filteredBooks(){
			return this.books.filter((book)=>book.isFav)
		}
	}
})

app.mount('#app')