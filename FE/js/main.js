/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		// openbtn.addEventListener( 'click', toggleMenu );
		// if( closebtn ) {
		// 	closebtn.addEventListener( 'click', toggleMenu );
		// }

		// // close the menu element if the target it麓s not the menu element or one of its descendants..
		// content.addEventListener( 'click', function(ev) {
		// 	var target = ev.target;
		// 	if( isOpen && target !== openbtn ) {
		// 		toggleMenu();
		// 	}
		// } );

		//点击icon跳转
		document.getElementsByClassName("content6")[0].addEventListener('click',function(event){
			var target = event.target;
			var type = event.target.parentElement.getAttribute("t");	
			 $.get("http://www.gucunzhaopin.com/query.ashx?p=0&ty="+type,
  
  function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
  });		
		});

	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();