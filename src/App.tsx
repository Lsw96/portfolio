import React, { useEffect } from 'react';

// components
import Header from '@components/layout/Header';
import Main from '@components/layout/Main';
import Footer from '@components/layout/Footer';

import Section01 from '@components/sections/Section01';
import Section02 from '@components/sections/Section02';
import Section03 from '@components/sections/Section03';
import Section04 from '@components/sections/Section04';
import Section05 from '@components/sections/Section05';
import Section06 from '@components/sections/Section06';
import Section07 from '@components/sections/Section07';

import ProgressComponents from '@components/common/ProgressComponents';
import SkipComponents from '@components/common/SkipComponents';

// import LoadingComponents from '@components/common/LoadingComponents';

// import Animation from '@components/utils/animation';

const App: React.FC = () => {

	return (
		<>
			<Header />
			<Main>
				<Section01 />
				<Section02 />
				<Section03 />
				<Section04 />
				<Section05 />
				<Section06 />
				<Section07 />

				<ProgressComponents />
				<SkipComponents />
			</Main>
			<Footer />
		</>
	);
};

export default App;
