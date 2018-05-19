function item(){
var title = document.getElementById('input1').value;
var author = document.getElementById('input2').value;
var publisher = document.getElementById('input3').value;
var Gerne = document.getElementById('input4').value;
var img = document.getElementById('input5').value;
document.getElementById("demo2").innerHTML+=`
		<div class=" col-lg-4  col-xs-12">
			<div class="media">
			<img class="mr-3" src="`+img+`" width="200" height="200">
			  <div class="media-body">
			    <h5 class="mt-0">`+title+`</h5>
			    <p>`+author+`</p>
			    <p>`+publisher+`</p>
			    <p>`+Gerne+`</p>
			  </div>
			</div>
		</div>`
}
