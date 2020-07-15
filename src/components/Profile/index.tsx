import React from 'react';

import {
	Container,
	Banner,
	Avatar,
	ProfileData,
	LocationIcon,
	CakeIcon,
	Followage,
	EditButton,
} from './styles';

const Profile: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>

			<ProfileData>
				<EditButton outlined>Editar Perfil</EditButton>

				<h1>Júnior Albuquerque</h1>
				<h2>@jnralb_</h2>

				<p>
					Developer at{' '}
					<a
						href="http://mowahtecnologia.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mowah Tecnologia
					</a>
				</p>

				<ul>
					<li>
						<LocationIcon />
						Itacoatiara, Brasil
					</li>
					<li>
						<CakeIcon />
						19 de outubro
					</li>
				</ul>

				<Followage>
					<span>
						seguindo <strong>5</strong>
					</span>
					<span>
						<strong>10 </strong> seguidores
					</span>
				</Followage>
			</ProfileData>
		</Container>
	);
};

export default Profile;
