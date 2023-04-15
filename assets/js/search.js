window.onload = function () {
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<li><a href="{url}"> <p> {title} </p>  </a></li>',
        noResultsText: '<li> <p> No posts found. </p>  </li>'
    })

    var $results_container = document.getElementById("results-container");
    var $search_input = document.getElementById("search-input");
    $search_input.addEventListener("input", function(e){
        console.log(e);
        $p = $search_input.value;
        console.log($p);
        if ($p == "") {
            $results_container.style.display = 'none';
        }
        else {
            $results_container.style.display = 'block';
        }
    });
}
