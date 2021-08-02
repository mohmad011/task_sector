import Highway from '@dogstudio/highway'
import {Fade , Fade2 , Fade3} from './transition'


const H = new Highway.Core({
	transitions: {
		home: Fade,
    end:Fade2,
    products:Fade3,
		search:Fade2
	}
})

new Splide( '.splide', {
  type    : 'loop',
  perPage : 3,
  autoplay: true,
  speed:2000,
  interval:0,
  lazyLoad: 'loaded',
} ).mount();