import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class One extends Component {
	render() {
		return (
			<div class={`${style.one} page`}>
				<h4>Page One</h4>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">One Card</h2>
						<div class=" mdc-typography--caption">Welcome to Mock one</div>
					</div>
					<div class={style.cardBody}>
						This is simply some text for mock one
					</div>
					<Card.Actions>
						<Card.ActionButton>OKAY</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
