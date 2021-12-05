$(document).ready(function () {
    var item, tile, author, publisher, bookLink, bookImg;
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    var apiKey = "key=AIzaSyCjHvDJyUf_arPQGQ4075vt2URGjQ7JMqM";
    var placeHldr = '<img src="https://via.placeholder.com/150">';
    var searchData;
    var searchAuth;
    //var searchGenre;

    //listener for search button
    $("#search").click(function () {
        outputList.innerHTML = ""; 
        document.body.style.backgroundImage = "url('')";
        searchData = $("#search-box").val();
        searchAuth = $("#search-box2").val();
        //searchGenre = $("#search-box3").val();
        //handling empty search input field
        if (searchData === "" || searchData === null) {
            displayError();
        }
        else {
           
            
            $.ajax({
                url: bookUrl + "intitle:" + searchData + "+inauthor:" + searchAuth + "&maxResults=40&" + apiKey,
                //need to use both title and author for the search
                dataType: "json",
                success: function (response) {
                    console.log(response)
                    if (response.totalItems === 0) {
                        alert("No results. Please try again.")
                    }
                    else {
                        $("#title").animate({ 'margin-top': '5px' }, 1000); //search box 
                        $(".book-list").css("visibility", "visible");
                        displayResults(response);
                    }
                },
                error: function () {
                    alert("Something went wrong. Please try again.");
                }
            });
        }
        $("#search-box").val(""); //clear search box
        $("#search-box2").val("");
    });


    //function to display the results
    function displayResults(response) {
        
        for (var i = 0; i < response.items.items; i += 2)
        //i+=2 because we will be displaying two instances on the row so need two sets of details
        {
            item = response.items[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.authors;
            publisher1 = item.volumeInfo.publisher;
            bookLink1 = item.volumeInfo.previewLink;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier
            bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr;

            item2 = response.items[i + 1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr;

            // output
            outputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn) +
                formatOutput(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
                '</div>';

            console.log(outputList);
        }
    }


    function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
        
        
        var htmlCard = <div class="col-lg-6">
            <div class="card" style="">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${bookImg}" class="card-img" alt="..."></img>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">Author2: ${author}</p>
                            <p class="card-text">Publisher: ${publisher}</p>
                            <p class="card-text">ISBN: ${bookIsbn}</p>
                            <p class="card-text">Read: ${bookLink}</p>
                            <a target="_blank" href="${bookLink}" class="btn btn-secondary">Read Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        return htmlCard;
    }

    //handling error for empty search box
    function displayError() {
        alert("Please enter a value to begin the search.")
    }

});
