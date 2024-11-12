import React, { Fragment, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

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

import { data } from '@utils/data';

import LoadingComponents from '@components/common/LoadingComponents';
import SkipComponents from '@components/common/SkipComponents';
import FixedSocialComponents from '@components/common/FixedSocialComponents';
import ScrollToTopButton from '@components/common/ScrollToTopButton';

// import Animation from '@components/utils/animation';

import useRouteLoading from '@hooks/useRouteLoading';

const App: React.FC = () => {
	const { isLoaded, loadingCount } = useRouteLoading();

	return (
		<Fragment>
			<Header />
			<Main>
				<AnimatePresence>
					{isLoaded ? '' : <LoadingComponents count={loadingCount} />}
				</AnimatePresence>
				<Section01 />
				<Section02 data={data.about} />
				<Section03 />
				<Section04 />
				<Section05 />
				<Section06 />
				<Section07 />

				<FixedSocialComponents data={data.social} />
				<ScrollToTopButton />
				<SkipComponents />
			</Main>
			<Footer />
		</Fragment>
	);
};

export default App;
