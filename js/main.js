// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
	$( "body" ).toggleClass( "nav-open" );
});

function closeEverything() {
    $( ".widget__extendednavigation" ).removeClass( "open" );;
    $( "body" ).removeClass( "basket-open" );
    $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
    $( ".navigation-item.folder" ).removeClass( "open" );
}
