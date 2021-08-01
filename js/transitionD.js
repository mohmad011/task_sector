import Highway from '@dogstudio/highway'
import {TimelineLite} from 'gsap'

export class Fade extends Highway.Transition{
	in({from,to,done}){

		const t1 = new TimelineLite();
		t1.fromTo(to,0.5,{left:'-100%',top:'50%'},{left:'0%'})
		.fromTo(to,0.5,{height:'2vh'} , {height:'100vh' , top:'0%' , onComplete: () => {
			from.remove();
			done();
		}})

		.fromTo(to.children[0], 2, {display: 'none',opacity:0} , {display: 'block',opacity:1})
	}
	out({from,done}){
		done();
	}
}

export class Fade2 extends Highway.Transition{
	in({from,to,done}){

		const t1 = new TimelineLite();
		t1.fromTo(to,0.5,{top:'-100%'},{right:'0%',top:'0%'})
		.fromTo(to,0.5,{height:'100vh',width:'1vw'} , {width:'100vw' , top:'0%' , onComplete: () => {
			from.remove();
			done();
		}})

		.fromTo(to.children[0], 2, {display: 'none',opacity:0} , {display: 'block',opacity:1})
	}
	out({from,done}){
		done();
	}

}


// export class Fade3 extends Highway.Transition{
// 	in({from,to,done}){

// 		const t1 = new TimelineLite();
// 		t1.fromTo(to,0.5,{top:'-100%'},{left:'0%',bottom:'0%',top:'0%'})
// 		.fromTo(to,0.5,{height:'100vh',width:'1vw'} , {width:'100vw' , top:'0%' , onComplete: () => {
// 			from.remove();
// 			done();
// 		}})

// 		.fromTo(to.children[0], 2, {display: 'none',opacity:0} , {display: 'flex',opacity:1})
// 	}
// 	out({from,done}){
// 		done();
// 	}
// }


export class Fade3 extends Highway.Transition{
	in({from,to,done}){

		const t1 = new TimelineLite();
		t1.fromTo(to,0.5,{left:'-100%',bottom:'0%'},{left:'0%'})
		.fromTo(to,0.5,{height:'2vh'} , {height:'100vh' , top:'0%' , onComplete: () => {
			from.remove();
			setTimeout(location.reload() , 200)
			// location.reload()
			done();
		}})

		.fromTo(to.children[0], 2, {display: 'none',opacity:0} , {display: 'block',opacity:1})
	}
	out({from,done}){
		done();
	}
}