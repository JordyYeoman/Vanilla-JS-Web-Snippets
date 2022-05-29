const title = document.querySelector('.fade-title');

		document.addEventListener('scroll', () => {
			if (title !== null) {
				title.style.opacity = "0.0"
			}
			if (isElementInViewport(title)) {
				var rect = title.getBoundingClientRect();
				var bottomOfViewport = window.innerHeight || document.documentElement.clientHeight;
				var centreOfViewport = (window.innerHeight || document.documentElement.clientHeight) / 2;
				var distanceFromCenter = centreOfViewport - rect.top;
				var d = ((centreOfViewport - rect.top) * -1) / 1000;
				// If top of hidden element hits bottom of viewport, begin animation until center
				if (rect.top <= bottomOfViewport) {
					title.style.opacity = 1 - d
					title.style.transform = `translateY(${(1 - d * 100) * 2}px)`;
				}
				if (rect.top <= centreOfViewport) {
					title.style.opacity = "1";
					title.style.transform = "translateY(0)";
				}
			}
		});

		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();

			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}
