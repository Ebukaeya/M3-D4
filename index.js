
let node = document.querySelector(".container >div")



eyo = () => {


    
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => (books=data))
    .then((data)=>{
        
        /* data.map((book)=>{console.log(book["img"]);}) */
        console.log(Object.keys(data[0]));

        data.map(
            (book)=>{

                let div =   `   <div>
                <div class="image-div">
                <img
                    style="width: 100%; height: 100%"
                    src="${book["img"]}"
                    alt=""
                />
                </div>
                <div class="title">
                <h5>${book["title"]}</h5>
                <div class="content">
                    <div class="d-flex mx-1" style="gap: 3px">
                    <div style="background-color: rgb(255, 255, 255); color: rgb(60, 58, 58); width: 60px; display:flex; align-items: center;">
                        Kr.${book["price"]}
                    </div>
                    <div><button class="btn btn-primary">Add Cart</button></div>
                    </div>
                    <div>
                    <button class="btn btn-danger">skip</button>
                    </div>
                </div>
                </div>
                </div>
                    ` 
                node.innerHTML+=div


            }
        )


              

        

    
    
    
    });
 
};

/* setTimeout((books) => {
  console.log(books);
}, 4000); */








console.log(node);


eyo()