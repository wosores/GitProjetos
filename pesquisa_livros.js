
const booksByCategory = [
    {
        category:"Riqueza",
        books:[
        {
            title:"Os segredos da mente milionaria",
            author:"T. Harv Eker",
        },
        {
            title:"O homem mais rico da babilonia",
            author:"George S. Clason",
        },
        {
            title:"Pai rico, pai pobre",
            author:"Robert T. Kiyosaki e Sharon L. Lechter",
        },
        ],
    },
    {
        category:"Inteligencia Emocional",
        books:[
        {
            title: "Você é Insubstituivel",
            author:"Augusto Cury",
        },
        {
            title:"Ansiedade",
            author:"Augusto Cury",
        },
        {
            title:"Os 7 habitos",
            author:"Stephen R. Covey"
        },
    
        ],
    },
    ];
    
    const totalCategories = booksByCategory.length // mostra numero de categorias
    console.log(`Contém ${totalCategories} categorias na biblioteca, que são:`)
    
    //busca e  mostra o nome das categorias
    for(let category of booksByCategory){
        console.log(`Categoria: ${category.category}`)/*primeiro category junta todas as categorias e o segundo busca dentro do ajuntamentocategory*/
        /* Conta o numero de livros nas categorias */
        console.log(`Contém ${category.books.length} livros.`)
    }
    
    function countAuthors(){
        let authors = [];
    
        for(let category of booksByCategory){
            for(let book of category.books){
                if(authors.indexOf(book.author) == -1){
                    authors.push(book.author)
                }
            }
        }
        console.log(`Total de autores: ${authors.length} `)
     }
     countAuthors();
    
     function booksOfAuthor(author){
         let books=[];
    
         for(let category of booksByCategory){
             for(let book of category.books){
                 if(book.author === author){
                     books.push(book.title)
                 }
             }
         }
         console.log(`Livros do autor ${author}: ${books.join(" e ")}`)
     }
    
    booksOfAuthor('Augusto Cury');
    