import { Data } from '@utils/types';

import { FaGithub, FaFacebook, FaBlogger, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const data: Data = {
	// FixedSocialComponents
	social: [
		{
			id: 1,
			icon: <FaFacebook />,
			href: 'https://www.facebook.com/profile.php?id=100000812930344',
			ariaLabel: 'Facebook',
			tooltip: 'Facebook',
			flow: 'right',
		},
		{
			id: 2,
			icon: <FaBlogger />,
			href: 'https://lsw96.tistory.com/',
			ariaLabel: 'Blog',
			tooltip: 'Blog',
			flow: 'right',
		},
		{
			id: 3,
			icon: <FaInstagram />,
			href: 'https://www.instagram.com/seongwoo_1112/',
			ariaLabel: 'Instagram',
			tooltip: 'Instagram',
			flow: 'right',
		},
		{
			id: 4,
			icon: <FaGithub />,
			href: 'https://github.com/Lsw96',
			ariaLabel: 'GitHub',
			tooltip: 'GitHub',
			flow: 'right',
		},
		{
			id: 5,
			icon: <MdEmail />,
			href: 'mailto:tjddn1007@naver.com',
			ariaLabel: 'Email',
			tooltip: 'Email',
			flow: 'right',
		},
	],
	// Section 01
	about: [
		{
			title: '프론트엔드로 전향한 이유',
			desc: '웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초 지식을 쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 사용자와의 상호작용을 극대화하는 프로젝트를 개발하기 위해 프론트엔드 개발자로 전향을 결심하게 되었습니다. React, Zustand, Framer-Motion, GSAP 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고 있습니다.',
		},
		{
			title: '프론트엔드로 전향한 이유',
			desc: '웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초 지식을 쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 사용자와의 상호작용을 극대화하는 프로젝트를 개발하기 위해 프론트엔드 개발자로 전향을 결심하게 되었습니다. React, Zustand, Framer-Motion, GSAP 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고 있습니다.',
		},
		{
			title: '프론트엔드로 전향한 이유',
			desc: '웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초 지식을 쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 사용자와의 상호작용을 극대화하는 프로젝트를 개발하기 위해 프론트엔드 개발자로 전향을 결심하게 되었습니다. React, Zustand, Framer-Motion, GSAP 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고 있습니다.',
		},
	],

	// Section 02
	career: [
		{
			title: '커리어',
			desc: [
				{
					name: '주식회사 메이즈',
					description:
						'전반적인 UI/UX를 담당했으며 주로 게이미 피케이션 설계 및 최적화 부분을 담당했습니다.',
					tags: ['회사 사정으로 인한 권고사직', '2023.12 - 2024.08', '프론트엔드'],
				},
				{
					name: '이솔 스튜디오',
					description: '디자인으로 활동했습니다.',
					tags: ['개인사업', '2019.02 - 2023.12(임시중단)', '디자인'],
				},
			],
		},
		{
			title: '교육',
			desc: [
				{
					name: '라인컴퓨터아트학원',
					description: 'UI/UX와 자바스크립트와 관련된 부분들은 학습했습니다.',
					tags: ['수료', '2023.03 - 2023.09', '프론트엔드'],
				},
			],
		},
	],

	// Section 03
};
