import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

class Clock extends Component {
	state = { time: Date.now() };
  
	// Called whenever our component is created
	componentDidMount() {
	  // update time every second
	  this.timer = setInterval(() => {
		this.setState({ time: Date.now() });
	  }, 1000);
	}
  
	// Called just before our component will be destroyed
	componentWillUnmount() {
	  // stop when not renderable
	  clearInterval(this.timer);
	}
  
	render() {
	  let time = new Date(this.state.time).toLocaleTimeString();
	  return <span>{time}</span>;
	}
  }
   
class NCLSHIP extends Component {
	render() {
	  return  <img src="/assets/images/polyline.svg" alt="Polyline" width="256" height="256"></img>;

	}
  }

const Icon2 = ({fill, width, height}) => {
	return (
	  <svg height={height} width={width} fill={fill} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
	</svg>
   );
  }

const NCLlogo = ({fill, width, height}) => {
	return (
	  <svg height={height} width={width} fill={fill} viewBox="0 0 300 156.47"><path d="M0,0V153s35.73-17.24,76.18-16.22c46.63,1.17,83.77,19.69,129.57,19.71,66.94,0,94.25-25.67,94.25-25.67V0ZM84.65,106.07h-13L38.06,61.71v44.36H23V36.28H37.07l32.51,43v-43H84.65Zm41.68,2.14c-20.14,0-35.08-16.09-35.08-36.44v-.21c0-20.15,14.65-36.65,35.65-36.65,12.9,0,20.63,4.46,27,10.93l-9.58,11.45c-5.28-5-10.66-8-17.5-8-11.52,0-19.83,9.92-19.83,22.06v.21c0,12.15,8.11,22.27,19.83,22.27,7.82,0,12.61-3.23,18-8.3l9.59,10C147.34,103.36,139.52,108.21,126.33,108.21ZM212,106.07H162.51V36.28h15.15V92.11H212Zm66,.38H263.16V79H234.72v27.47H219.88V36.67h14.84v27.5h28.44V36.67H278Z"/>
	</svg>
   );
}


export default class One extends Component {
  // Initialise our state. For now we only store the input value
  state = { value: '', name: 'world' }

  onInput = ev => {
    // This will schedule a state update. Once updated the component
	// will automatically re-render itself.
	this.setState({ value: ev.target.value });
	  }

  // Add a submit handler that updates the `name` with the latest input value
  onSubmit = ev => {
    // Prevent default browser behavior (aka don't submit the form here)
    ev.preventDefault();

    this.setState({ name: this.state.value });
  }

	render() {
		return (
			<div class={`${style.one} page`}>
				<h4>Page One</h4>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Simple text example</h2>
						<div class=" mdc-typography--caption">Welcome to Mock one</div>
					</div>
					<div class={style.cardBody}>
						This is simply some text for mock one
					</div>
				</Card>
				<br></br>
				<Card>
					<div class={style.cardHeader}>
						<h4 class=" mdc-typography--title">Form Example</h4>
					</div>
					<div class={style.cardHeader}>
						<h4>Hello, {this.state.name}!</h4>
						<form onSubmit={this.onSubmit}>
          					<input type="text" value={this.state.value} onInput={this.onInput} />
          					<button type="submit">Update</button>
       					</form>
					</div>
				</Card>
				<Card>
					<div class={style.cardHeader}>
						<h4 class=" mdc-typography--title">Clock Example</h4>
					</div>
					<div class={style.cardHeader}>
						<Clock />
					</div>
					<div class={style.cardHeader}>
						<Icon2 fill="blue" width={50} height={50}/> 
					</div>
					<div class={style.cardHeader}>
						<NCLlogo fill="cyan" width={50} height={50}/> 
					</div>



				</Card>
			</div>
		);
	}
}
