import React from 'react';

import CandidateInformation from 'src/components/CandidateInformation';
import Header from 'src/components/Header';
import PlayArea from 'src/containers/PlayArea';
import Statistics from 'src/containers/Statistics';
import Footer from 'src/components/Footer';

import './style.scss';

const App = () => (
	<>
		<Header />
		<main>
			<CandidateInformation />
			<PlayArea />
			<Statistics/>
		</main>
		<Footer />
	</>
);

export default App;