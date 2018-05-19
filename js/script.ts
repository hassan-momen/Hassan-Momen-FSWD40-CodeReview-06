const MediaThek = [{
	 "Title":"City lights",
	 "Author":"Charlie Chaplin",
	 "Genre":"romantic comedy",
	 "Publisher":"United Artists",
	 "Minutes":87,
	 "img":"img/citylights_image.jpg",
	 "Rating":"&starf;&starf;&starf;&star;&star;",
	 "Description":"City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplin's Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionaire (Harry Myers)."
},{
	"Title":"Dylan",
	 "Author":"Bob Dylan",
	 "Genre":"rock",
	 "Publisher":" Columbia Records",
	 "Minutes":34,
	 "img":"img/Bob_Dylan_-_Dylan_(1973_album).jpg",
	 "Rating":"&starf;&starf;&starf;&starf;&starf;",
	 "Description":"Dylan is the 13th studio album by American singer-songwriter Bob Dylan, released on November 19, 1973 by Columbia Records. Compiled and issued by the label with no input from Dylan himself, it contains no original Dylan songs, the material consisting of two outtakes from Self Portrait and another seven from New Morning. It followed the artist's departure from Columbia for Asylum Records, and the announcement of his first major tour since 1966."
},{
	"Title":"Lawrence of Arabia",
	 "Author":"T.E.Lawrence",
	 "Genre":"historical drama",
	 "Publisher":"Columbia Pictures",
	 "Minutes":222,
	 "img":"img/Lawrence_of_arabia.jpg",
	 "Rating":"&starf;&starf;&starf;&starf;&star;",
	 "Description":" Lawrence of Arabia is a 1962 epic historical drama film based on the life of T. E. Lawrence. It was directed by David Lean and produced by Sam Spiegel through his British company Horizon Pictures, with the screenplay by Robert Bolt and Michael Wilson. The film stars Peter O'Toole in the title role. It is widely considered one of the greatest and most influential films in the history of cinema."
},{
	 "Title":"Diamond Life",
	 "Author":"Sade",
	 "Genre":"smooth soul",
	 "Publisher":" Epic",
	 "Minutes":45,
	 "img":"img/sade-diamond-life.jpg",
	 "Rating":"&starf;&starf;&starf;&starf;&starf;",
	 "Description":"Diamond Life is the debut studio album by English band Sade. It was first released in the United Kingdom on 16 July 1984 by Epic Records and in the United States on 27 February 1985 by Portrait Records. Diamond Life went on to sell over six million copies worldwide, becoming one of the top-selling debut recordings of the '80s and the best-selling debut by a British female vocalist"
},{
	"Title":"Woodwalkers",
	 "Author":" Katja Brandis",
	 "Genre":"belletristik",
	 "Publisher":"Bild",
	 "img":"img/woodwalkers.jpg",
	 "Rating":"&starf;&starf;&starf;&starf;&starf;",
	 "Description":"Auf den ersten Blick sieht Carag aus wie ein normaler Junge. Doch hinter seinen leuchtenden Augen verbirgt sich ein Geheimnis: Carag ist ein Gestaltwandler. Aufgewachsen als Berglöwe in den Wäldern lebt er erst seit Kurzem in der Menschenwelt. Das neue Leben ist für ihn so fremd wie faszinierend."
},{
	"Title":" Foundation",
	 "Author":"Isaac Asimov",
	 "Genre":" fantasy science fiction",
	 "Publisher":"Heyne",
	 "img":"img/fondation-asimov.jpg",
	 "Rating":"&starf;&starf;&starf;&star;&star;",
	 "Description":"Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire."
	 
},{
	"Title":"The Sandman",
	 "Author":"Neil Gaiman",
	 "Genre":"fantasy",
	 "Publisher":"Vertigo",
	 "img":"img/Sandman.jpg",
	 "Rating":"&starf;&starf;&starf;&star;&star;",
	 "Description":"The Sandman is a comic book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaiman's trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe."
	 
},{
	"Title":" Modesty Blaise",
	 "Author":"Peter O'Donnell",
	 "Genre":"mystery",
	 "Publisher":"Titan Books",
	 "img":"img/modesty1.jpg",
	 "Rating":"&starf;&starf;&starf;&starf;&starf;",
	 "Description":"Modesty Blaise is a British comic strip featuring a fictional character of the same name, created by author Peter O'Donnell and illustrator Jim Holdaway in 1963. The strip follows Modesty Blaise, an exceptional young woman with many talents and a criminal past, and her trusty sidekick Willie Garvin."
}];

let i =0;
for(let item of MediaThek){
	document.getElementById("demo2").innerHTML+= `
		<div class=" col-lg-4  col-xs-12">
			<div class="media">
		<a href="" data-toggle="modal" data-target="#media`+i+`">
			  <img class="mr-3" src="${item.img}" width="200" height="200">
		</a>
			  <div class="media-body">
			    <h5 class="mt-0">${item.Title}</h5>
			    <p>${item.Author}</p>
			    <p>${item.Genre}</p>
			    <p>${item.Publisher}</p>
			    <p>${item.Rating}</p>
			  </div>
			</div>
		</div>
		<div class="modal fade" id="media`+i+`" tabindex="-1" role="dialog" aria-labelledby="label`+i+`" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="label`+i+`">${item.Title}</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <img src ="${item.img}" width="100%" height="300">
		        <p>${item.Description}</p>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		      </div>
		    </div>
  		</div>
		</div>
	`;
	i++;
}

