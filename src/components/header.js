import React from 'react';

import './style.scss';

const Header = ({ siteTitle }) => (
	<section className="hero is-info">
		<div className="hero-body">
			<div className="container">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-size-3 has-text-white">
								PlayStation 5 の発売日を思い出す為のサイト
							</h1>
							<p className="subtitle">
								PlayStation 5が入手困難すぎて
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
