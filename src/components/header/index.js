import { h, Component } from 'preact';
import { route } from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';

//import logo from './assets/images/logo-nclh-shield-solid-white.svg';

import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';

// import style from './style';

const NCLlogo = ({fill, width, height}) => {
	return (
	  <svg height={height} width={width} fill={fill} viewBox="0 0 300 156.47"><path d="M0,0V153s35.73-17.24,76.18-16.22c46.63,1.17,83.77,19.69,129.57,19.71,66.94,0,94.25-25.67,94.25-25.67V0ZM84.65,106.07h-13L38.06,61.71v44.36H23V36.28H37.07l32.51,43v-43H84.65Zm41.68,2.14c-20.14,0-35.08-16.09-35.08-36.44v-.21c0-20.15,14.65-36.65,35.65-36.65,12.9,0,20.63,4.46,27,10.93l-9.58,11.45c-5.28-5-10.66-8-17.5-8-11.52,0-19.83,9.92-19.83,22.06v.21c0,12.15,8.11,22.27,19.83,22.27,7.82,0,12.61-3.23,18-8.3l9.59,10C147.34,103.36,139.52,108.21,126.33,108.21ZM212,106.07H162.51V36.28h15.15V92.11H212Zm66,.38H263.16V79H234.72v27.47H219.88V36.67h14.84v27.5h28.44V36.67H278Z"/>
	</svg>
   );
}


export default class Header extends Component {
	closeDrawer() {
		this.drawer.MDComponent.open = false;
		this.state = {
			darkThemeEnabled: false
		};
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	goToMyProfile = this.linkTo('/profile');
	goToOne = this.linkTo('/one');

	toggleDarkTheme = () => {
		this.setState(
			{
				darkThemeEnabled: !this.state.darkThemeEnabled
			},
			() => {
				if (this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
				}
				else {
					document.body.classList.remove('mdc-theme--dark');
				}
			}
		);
	}

	render(props) {
		console.log(props.selectedRoute);
		return (
			<div>
				<TopAppBar className="topappbar">
					<TopAppBar.Row>
					<NCLlogo align-start fill="white" width={50} height={50}/>
						<TopAppBar.Section align-start>    
							<TopAppBar.Icon menu onClick={this.openDrawer}>
								menu
							</TopAppBar.Icon>
							<TopAppBar.Title>Crusie Pricing & Inventory HQ - Concepts</TopAppBar.Title>
						</TopAppBar.Section>
						<TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
							<TopAppBar.Icon>settings</TopAppBar.Icon>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>
				<Drawer modal ref={this.drawerRef}>
					<Drawer.DrawerContent>
						<Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
							<List.ItemGraphic>home</List.ItemGraphic>
							Home
						</Drawer.DrawerItem>
						<Drawer.DrawerItem selected={props.selectedRoute === '/profile'} onClick={this.goToOne}>
							<List.ItemGraphic>chevron_right</List.ItemGraphic>
							One
						</Drawer.DrawerItem>
						<Drawer.DrawerItem selected={props.selectedRoute === '/profile'} onClick={this.goToMyProfile}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Profile
						</Drawer.DrawerItem>
					</Drawer.DrawerContent>
				</Drawer>
				<Dialog ref={this.dialogRef}>
					<Dialog.Header>Settings</Dialog.Header>
					<Dialog.Body>
						<div>
							Enable dark theme <Switch onClick={this.toggleDarkTheme} />
						</div>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton accept>OK</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}
