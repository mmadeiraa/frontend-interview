import React from 'react';

import CandidateInformation from 'src/components/CandidateInformation';
import Header from 'src/components/Header';
import PlayArea from 'src/containers/PlayArea';
import Statistics from 'src/containers/Statistics';
import Footer from 'src/components/Footer';

import Context from 'src/store';

import './style.scss';

const App = () => (
	<Context>
		<Header />
		<main>
			<CandidateInformation />
			<PlayArea />
			<Statistics/>
		</main>
		<Footer />
	</Context>
);

export default App;