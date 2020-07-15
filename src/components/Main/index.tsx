import React from 'react';

import Profile from '../Profile';

import {
	Container,
	Header,
	BackIcon,
	ProfileInfo,
	BottomMenu,
	HomeIcon,
	SearchIcon,
	BellIcon,
	EmailIcon,
} from './styles';

const Main: React.FC = () => {
	return (
		<Container>
			<Header>
				<button>
					<BackIcon />
				</button>

				<ProfileInfo>
					<strong>Júnior Albuquerque</strong>
					<span>14532 Tweets</span>
				</ProfileInfo>
			</Header>

			<Profile />

			<BottomMenu>
				<HomeIcon className="active" />
				<SearchIcon />
				<BellIcon />
				<EmailIcon />
			</BottomMenu>
		</Container>
	);
};

export default Main;
