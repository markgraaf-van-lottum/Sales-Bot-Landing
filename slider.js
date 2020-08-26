let 	slidesFilm__howWorks = document.querySelector('.slider--how-works .slides-film'),
		btnPrev__howWorks 	= document.querySelector('.slider--how-works .btn--prev-slide'),
		btnNext__howWorks 	= document.querySelector('.slider--how-works .btn--next-slide'),
		slidesFilm__cases 	= document.querySelector('.slider--cases .slides-film'),
		btnPrev__cases 		= document.querySelector('.slider--cases .btn--prev-slide'),
		btnNext__cases 		= document.querySelector('.slider--cases .btn--next-slide'),
		goPrevSlide__howWorks = function() {
			if (slidesFilm__howWorks.classList.contains('slide-2--active')) 
				{slidesFilm__howWorks.className = "slides-film slide-1--active";}
			if (slidesFilm__howWorks.classList.contains('slide-3--active')) 
				{slidesFilm__howWorks.className = "slides-film slide-2--active";}
			if (slidesFilm__howWorks.classList.contains('slide-4--active')) 
				{slidesFilm__howWorks.className = "slides-film slide-3--active";}
		},
		goNextSlide__howWorks = function() {
			if (slidesFilm__howWorks.classList.contains('slide-3--active')) 
				{slidesFilm__howWorks.className = "slides-film slide-4--active";}
			if (slidesFilm__howWorks.classList.contains('slide-2--active')) 
				{slidesFilm__howWorks.className = "slides-film slide-3--active";}
			if (slidesFilm__howWorks.classList.contains('slide-1--active')) 
				{slidesFilm__howWorks.className = "slides-film slide-2--active";}
		},
		goPrevSlide__cases = function() {
			if (slidesFilm__cases.classList.contains('slide-2--active')) 
				{slidesFilm__cases.className = "slides-film slide-1--active";}
		},
		goNextSlide__cases = function() {
			if (slidesFilm__cases.classList.contains('slide-1--active')) 
				{slidesFilm__cases.className = "slides-film slide-2--active";}
		};

btnPrev__howWorks.addEventListener('click', goPrevSlide__howWorks, false);
btnNext__howWorks.addEventListener('click', goNextSlide__howWorks, false);
btnPrev__cases.addEventListener('click', goPrevSlide__cases, false);
btnNext__cases.addEventListener('click', goNextSlide__cases, false);
