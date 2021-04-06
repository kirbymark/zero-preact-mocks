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

				</Card>
			</div>
		);
	}
}
