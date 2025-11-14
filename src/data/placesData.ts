export interface PlaceData {
  name: string;
  nameEn?: string;
  category: string;
  country: string;
  city: string;
  image: string;
  rating: number;
  distance: string;
  openHours: string;
  description: string;
  highlights: string[];
  tips: string[];
  hashtags: Array<{
    tag: string;
    count: number;
    users: Array<{ name: string; avatar: string; country: string }>;
  }>;
}

export const placesData: Record<string, PlaceData> = {
  '에펠탑': {
    name: '에펠탑',
    nameEn: 'Eiffel Tower',
    category: '랜드마크',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
    rating: 4.8,
    distance: '850m',
    openHours: '09:00 - 23:00',
    description: '1889년 파리 만국박람회를 위해 건설된 324m 높이의 철탑. 파리의 상징이자 세계에서 가장 많이 방문하는 유료 관광지 중 하나입니다. 야경이 특히 아름답고, 매시간 정각에 5분간 반짝이는 조명쇼가 펼쳐집니다.',
    highlights: ['매시간 정각 조명쇼', '전망대에서 파리 전경', '샹드마르스 공원 산책', '야경 촬영 명소'],
    tips: ['온라인 예매로 대기시간 단축', '일몰 1시간 전 방문 추천', '2층 전망대가 가성비 좋음', '근처 트로카데로 광장에서 인증샷'],
    hashtags: [
      { tag: '#야경이멋져요', count: 245, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
        { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
      ]},
      { tag: '#사진명소', count: 198, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'John Smith', avatar: '👨', country: '🇬🇧' },
      ]},
      { tag: '#꼭가봐야해요', count: 176, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
      { tag: '#로맨틱해요', count: 143, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
    ]
  },
  '루브르 박물관': {
    name: '루브르 박물관',
    nameEn: 'Louvre Museum',
    category: '박물관',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    rating: 4.9,
    distance: '1.2km',
    openHours: '09:00 - 18:00 (화요일 휴관)',
    description: '세계 3대 박물관 중 하나로, 모나리자, 밀로의 비너스 등 인류 최고의 예술 작품들을 소장하고 있습니다. 옛 왕궁을 박물관으로 개조한 건물 자체도 예술 작품입니다.',
    highlights: ['모나리자 관람', '밀로의 비너스', '나폴레옹 홀', '유리 피라미드 입구'],
    tips: ['수요일/금요일 야간 개장 이용', '온라인 예매 필수', '최소 3-4시간 소요', '화요일 휴관 주의'],
    hashtags: [
      { tag: '#예술의전당', count: 287, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Marie Laurent', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#모나리자', count: 234, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Anna Müller', avatar: '👩', country: '🇩🇪' },
      ]},
      { tag: '#역사적가치', count: 198, users: [
        { name: '정민호', avatar: '👨', country: '🇰🇷' },
        { name: 'Sophie Martin', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#꼭가봐야해요', count: 176, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
    ]
  },
  '도쿄 타워': {
    name: '도쿄 타워',
    nameEn: 'Tokyo Tower',
    category: '랜드마크',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    rating: 4.6,
    distance: '1.5km',
    openHours: '09:00 - 23:00',
    description: '1958년 완공된 높이 333m의 전파탑으로, 도쿄의 상징적인 랜드마크입니다. 에펠탑을 모델로 설계되었으며, 메인 전망대(150m)와 톱 데크(250m)에서 도쿄 전경을 감상할 수 있습니다.',
    highlights: ['메인 전망대 야경', '톱 데크 투어', '원피스 타워', '푸트타운 쇼핑'],
    tips: ['날씨 좋은 날 후지산 보임', '야간 조명 시간대 방문 추천', '주말 오전이 비교적 한산', '근처 조조지 절 함께 방문'],
    hashtags: [
      { tag: '#야경이멋져요', count: 189, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
      ]},
      { tag: '#전망대최고', count: 156, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#도쿄여행필수', count: 134, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'John Smith', avatar: '👨', country: '🇬🇧' },
      ]},
    ]
  },
  '센소지': {
    name: '센소지',
    nameEn: 'Sensoji Temple',
    category: '랜드마크',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=80',
    rating: 4.7,
    distance: '2.1km',
    openHours: '06:00 - 17:00',
    description: '도쿄에서 가장 오래된 사찰로 628년에 창건되었습니다. 가미나리몬(雷門) 대문과 나카미세도리 상점가가 유명하며, 전통 일본 문화를 체험할 수 있는 최고의 장소입니다.',
    highlights: ['가미나리몬 대문', '나카미세도리 쇼핑', '오미쿠지(운세) 뽑기', '오층탑 야경'],
    tips: ['아침 일찍 방문하면 한산함', '기모노 대여 후 방문 추천', '인력거 체험 가능', '연말연시 특별 행사 볼거리'],
    hashtags: [
      { tag: '#일본전통', count: 223, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
      ]},
      { tag: '#사진명소', count: 198, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Marie Laurent', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#문화체험', count: 167, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
    ]
  },
  '콜로세움': {
    name: '콜로세움',
    nameEn: 'Colosseum',
    category: '랜드마크',
    country: '이탈리아',
    city: '로마',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    rating: 4.9,
    distance: '650m',
    openHours: '08:30 - 19:00',
    description: '서기 80년에 완공된 고대 로마의 원형 경기장으로, 검투사 경기가 열렸던 곳입니다. 약 5만 명을 수용할 수 있으며, 세계 7대 불가사의 중 하나로 선정되었습니다.',
    highlights: ['경기장 내부 투어', '지하 구조 관람', '포로 로마노 연계 방문', '야간 조명'],
    tips: ['온라인 사전 예약 필수', '아침 일찍 방문 추천', '오디오 가이드 대여', '포로 로마노 통합권 구매'],
    hashtags: [
      { tag: '#역사적가치', count: 312, users: [
        { name: '정민호', avatar: '👨', country: '🇰🇷' },
        { name: 'Sophie Martin', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#고대로마', count: 267, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Anna Müller', avatar: '👩', country: '🇩🇪' },
      ]},
      { tag: '#꼭가봐야해요', count: 234, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Lucas Silva', avatar: '👨', country: '🇧🇷' },
      ]},
    ]
  },
  '트레비 분수': {
    name: '트레비 분수',
    nameEn: 'Trevi Fountain',
    category: '랜드마크',
    country: '이탈리아',
    city: '로마',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80',
    rating: 4.7,
    distance: '900m',
    openHours: '24시간',
    description: '바로크 양식의 로마에서 가장 큰 분수로, 1762년에 완공되었습니다. 동전을 던지면 로마에 다시 돌아올 수 있다는 전설이 있어, 매일 약 3,000유로의 동전이 던져집니다.',
    highlights: ['동전 던지기 전통', '넵튠 조각상', '야간 조명', '주변 젤라또 맛집'],
    tips: ['이른 아침이 가장 한산함', '뒤돌아서 왼손으로 던지기', '소매치기 주의', '근처 스페인 광장 도보 10분'],
    hashtags: [
      { tag: '#로맨틱해요', count: 289, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
      { tag: '#사진명소', count: 245, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Marie Laurent', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#소원빌기', count: 198, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
    ]
  },
  '사그라다 파밀리아': {
    name: '사그라다 파밀리아',
    nameEn: 'Sagrada Familia',
    category: '랜드마크',
    country: '스페인',
    city: '바르셀로나',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    rating: 4.9,
    distance: '1.3km',
    openHours: '09:00 - 18:00',
    description: '안토니 가우디가 설계한 미완성 대성당으로, 1882년부터 건축이 시작되어 현재도 진행 중입니다. 독특한 건축 양식과 화려한 스테인드글라스가 압권이며, 유네스코 세계문화유산입니다.',
    highlights: ['탄생의 파사드', '수난의 파사드', '스테인드글라스', '타워 전망대'],
    tips: ['온라인 예매 필수 (수개월 전)', '오전 10시경 빛이 아름다움', '타워 입장권 별도', '근처 가우디 건축물 함께 관람'],
    hashtags: [
      { tag: '#가우디천재', count: 298, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Carlos Garcia', avatar: '👨', country: '🇪🇸' },
      ]},
      { tag: '#건축의신', count: 256, users: [
        { name: '정민호', avatar: '👨', country: '🇰🇷' },
        { name: 'Anna Müller', avatar: '👩', country: '🇩🇪' },
      ]},
      { tag: '#꼭가봐야해요', count: 234, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sophie Martin', avatar: '👩', country: '🇫🇷' },
      ]},
    ]
  },
  '구엘 공원': {
    name: '구엘 공원',
    nameEn: 'Park Güell',
    category: '랜드마크',
    country: '스페인',
    city: '바르셀로나',
    image: 'https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=800&q=80',
    rating: 4.8,
    distance: '2.5km',
    openHours: '08:00 - 20:30',
    description: '가우디가 설계한 공원으로, 형형색색의 모자이크 타일과 독특한 건축물이 특징입니다. 바르셀로나 시내가 한눈에 보이는 전망도 일품입니다.',
    highlights: ['모자이크 도마뱀', '기둥의 방', '바르셀로나 전망', '가우디 하우스 박물관'],
    tips: ['온라인 예매로 대기 없이', '아침 일찍 방문 추천', '편한 신발 필수 (언덕)', '무료 구역도 넓음'],
    hashtags: [
      { tag: '#가우디예술', count: 267, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Carlos Garcia', avatar: '👨', country: '🇪🇸' },
      ]},
      { tag: '#사진명소', count: 234, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'Marie Laurent', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#컬러풀해요', count: 198, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
    ]
  },
  '왓 아룬': {
    name: '왓 아룬',
    nameEn: 'Wat Arun',
    category: '랜드마크',
    country: '태국',
    city: '방콕',
    image: 'https://images.unsplash.com/photo-1563492065213-f0c8c41da0ed?w=800&q=80',
    rating: 4.7,
    distance: '1.1km',
    openHours: '08:00 - 18:00',
    description: '새벽 사원으로도 불리며, 차오프라야 강변에 위치한 태국의 대표적인 불교 사원입니다. 높이 79m의 크메르 양식 탑이 특징이며, 일몰 시간대가 특히 아름답습니다.',
    highlights: ['중앙 탑 등반', '강 건너 전망', '일몰 야경', '도자기 장식'],
    tips: ['보트로 강 건너 접근', '일몰 1시간 전 방문', '무릎 덮는 옷 필수', '계단 가파름 주의'],
    hashtags: [
      { tag: '#사원미', count: 245, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
      { tag: '#야경이멋져요', count: 212, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#방콕필수', count: 189, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
    ]
  },
  '짜뚜짝 시장': {
    name: '짜뚜짝 시장',
    nameEn: 'Chatuchak Market',
    category: '쇼핑',
    country: '태국',
    city: '방콕',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80',
    rating: 4.6,
    distance: '3.2km',
    openHours: '09:00 - 18:00 (주말)',
    description: '세계 최대 규모의 주말 시장으로, 15,000개 이상의 점포가 있습니다. 의류, 액세서리, 공예품, 음식 등 없는 게 없는 쇼핑 천국입니다.',
    highlights: ['빈티지 패션', '수공예품', '태국 음식', '반려동물 구역'],
    tips: ['주말만 풀 오픈', '아침 일찍 가면 시원함', '현금 준비', '지도 앱 필수'],
    hashtags: [
      { tag: '#쇼핑천국', count: 278, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
      { tag: '#먹거리많아요', count: 234, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#주말명소', count: 198, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
    ]
  },
};

// Restaurant data
export interface RestaurantData {
  name: string;
  nameEn?: string;
  category: string;
  country: string;
  city: string;
  image: string;
  rating: number;
  distance: string;
  priceRange: string;
  cuisine: string;
  openHours: string;
  description: string;
  signature: string[];
  menuItems: Array<{
    name: string;
    description: string;
    price: string;
    isRecommended?: boolean;
  }>;
  tips: string[];
  hashtags: Array<{
    tag: string;
    count: number;
    users: Array<{ name: string; avatar: string; country: string }>;
  }>;
}

export const restaurantsData: Record<string, RestaurantData> = {
  'Le Jules Verne': {
    name: 'Le Jules Verne',
    category: '레스토랑',
    country: '프랑스',
    city: '파리',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    rating: 4.7,
    distance: '850m',
    priceRange: '€€€€',
    cuisine: '프렌치 파인다이닝',
    openHours: '12:00 - 13:30, 19:00 - 21:00',
    description: '에펠탑 2층에 위치한 미슐랭 1스타 레스토랑으로, 파리 전경을 감상하며 최고급 프렌치 요리를 즐길 수 있습니다. 알랭 뒤카스가 운영하며, 특별한 날을 위한 완벽한 선택입니다.',
    signature: ['푸아그라', '랍스터', '송아지 요리', '시즌 트러플'],
    menuItems: [
      { name: '푸아그라 테리느', description: '무화과 컴포트와 함께', price: '€48', isRecommended: true },
      { name: '블루 랍스터', description: '감귤 버터 소스', price: '€68', isRecommended: true },
      { name: '송아지 안심', description: '트러플 주스', price: '€58' },
      { name: '초콜릿 수플레', description: '바닐라 아이스크림', price: '€24', isRecommended: true },
    ],
    tips: ['최소 2개월 전 예약 필수', '점심 코스가 저렴', '복장 규정 있음 (스마트 캐주얼)', '창가 자리 요청'],
    hashtags: [
      { tag: '#미슐랭1스타', count: 189, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Marie Laurent', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#특별한날', count: 156, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
      { tag: '#에펠탑뷰', count: 134, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Sophie Martin', avatar: '👩', country: '🇫🇷' },
      ]},
    ]
  },
  '스시 사이토': {
    name: '스시 사이토',
    nameEn: 'Sushi Saito',
    category: '레스토랑',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
    rating: 4.9,
    distance: '2.3km',
    priceRange: '¥¥¥¥',
    cuisine: '에도마에 스시',
    openHours: '12:00 - 14:00, 18:00 - 22:00 (일요일 휴무)',
    description: '미슐랭 3스타를 받은 도쿄 최고의 스시야 중 하나입니다. 사이토 다카시 장인이 직접 만드는 에도마에 스시는 예약하기 가장 어려운 레스토랑으로 유명합니다.',
    signature: ['오토로 니기리', '우니 군함', '고등어 조림', '타마고'],
    menuItems: [
      { name: '오마카세 코스', description: '제철 재료 15~20피스', price: '¥40,000', isRecommended: true },
      { name: '오토로', description: '최상급 참치 뱃살', price: '코스에 포함', isRecommended: true },
      { name: '보탄 새우', description: '살아있는 단새우', price: '코스에 포함' },
      { name: '아나고', description: '장어 니기리', price: '코스에 포함', isRecommended: true },
    ],
    tips: ['예약은 단골 소개 또는 호텔 컨시어지', '카드 결제 불가, 현금만', '사진 촬영 자제', '일본어 구사 권장'],
    hashtags: [
      { tag: '#미슐랭3스타', count: 312, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
      ]},
      { tag: '#최고의스시', count: 278, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#오마카세', count: 245, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'John Smith', avatar: '👨', country: '🇬🇧' },
      ]},
    ]
  },
  'Osteria Francescana': {
    name: 'Osteria Francescana',
    category: '레스토랑',
    country: '이탈리아',
    city: '모데나',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    rating: 5.0,
    distance: '2.8km',
    priceRange: '€€€€',
    cuisine: '모던 이탈리안',
    openHours: '12:30 - 14:00, 19:30 - 22:00 (월화 휴무)',
    description: '마시모 보투라 셰프의 미슐랭 3스타 레스토랑으로, 세계 베스트 레스토랑 50에서 1위를 차지한 바 있습니다. 전통 이탈리아 요리를 현대적으로 재해석한 예술 작품 같은 요리를 선보입니다.',
    signature: ['다섯 가지 질감의 파마산', '기억 속 레몬 타르트', '비둘기 요리', '발사믹 캐비어'],
    menuItems: [
      { name: '테이스팅 메뉴', description: '12코스 시그니처', price: '€270', isRecommended: true },
      { name: '다섯 가지 파마산', description: '5가지 온도와 질감', price: '메뉴에 포함', isRecommended: true },
      { name: '기억 속 레몬 타르트', description: '디컨스트럭션 디저트', price: '메뉴에 포함', isRecommended: true },
      { name: '와인 페어링', description: '소믈리에 추천 6잔', price: '€150' },
    ],
    tips: ['6개월 전 예약 필수', '점심이 상대적으로 예약 쉬움', '와인 페어링 강력 추천', '드레스 코드 있음'],
    hashtags: [
      { tag: '#미슐랭3스타', count: 298, users: [
        { name: '정민호', avatar: '👨', country: '🇰🇷' },
        { name: 'Sophie Martin', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#세계1위', count: 267, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Anna Müller', avatar: '👩', country: '🇩🇪' },
      ]},
      { tag: '#예술적인요리', count: 234, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Carlos Garcia', avatar: '👨', country: '🇪🇸' },
      ]},
    ]
  },
  'Jay Fai': {
    name: 'Jay Fai',
    category: '레스토랑',
    country: '태국',
    city: '방콕',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    rating: 4.8,
    distance: '1.5km',
    priceRange: '฿฿฿',
    cuisine: '태국 길거리 음식',
    openHours: '14:00 - 01:00 (월요일 휴무)',
    description: '미슐랭 1스타를 받은 태국 길거리 음식점으로, 고글을 쓴 할머니가 직접 요리하는 것으로 유명합니다. Netflix "스트리트 푸드"에 소개되어 세계적으로 유명해졌습니다.',
    signature: ['크랩 오믈렛', '드라이 똠얌 씨푸드', '팟타이', '랍스터 볶음밥'],
    menuItems: [
      { name: '크랩 오믈렛', description: '신선한 게살 가득', price: '฿1,000', isRecommended: true },
      { name: '드라이 똠얌', description: '해산물 볶음 요리', price: '฿600', isRecommended: true },
      { name: '팟타이', description: '새우 팟타이', price: '฿400' },
      { name: '랍스터 카레', description: '코코넛 카레', price: '฿1,200', isRecommended: true },
    ],
    tips: ['오픈 시간 전 웨이팅 필수', '2-3시간 대기 각오', '현금 결제만', '1인 1메뉴 주문'],
    hashtags: [
      { tag: '#미슐랭길거리', count: 289, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
      { tag: '#크랩오믈렛', count: 256, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#방콕맛집', count: 223, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
    ]
  },
  '맥도날드': {
    name: '맥도날드',
    nameEn: "McDonald's",
    category: '레스토랑',
    country: '일본',
    city: '도쿄',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    rating: 4.2,
    distance: '350m',
    priceRange: '¥',
    cuisine: '패스트푸드',
    openHours: '06:00 - 23:00',
    description: '전 세계에서 사랑받는 패스트푸드 체인으로, 일본에서는 테리야키 버거, 에비 필레오 등 현지화된 독특한 메뉴를 경험할 수 있습니다. 빠르고 저렴하며 친숙한 맛을 제공합니다.',
    signature: ['테리야키 맥버거', '에비 필레오', '사쿠라 맥플러리', '메가 맥'],
    menuItems: [
      { name: '테리야키 맥버거', description: '달콤한 테리야키 소스', price: '¥390', isRecommended: true },
      { name: '에비 필레오', description: '새우 패티 버거', price: '¥390', isRecommended: true },
      { name: '빅맥', description: '클래식 빅맥', price: '¥450' },
      { name: '맥너겟 세트', description: '치킨 너겟 10조각', price: '¥600' },
      { name: '사쿠라 맥플러리', description: '한정판 벚꽃 맛', price: '¥320', isRecommended: true },
      { name: '테리야키 맥치킨', description: '치킨 패티에 테리야키 소스', price: '¥420' },
    ],
    tips: ['모바일 앱 쿠폰 사용', '아침 메뉴 저렴함', '현지 한정 메뉴 꼭 시도', '셀프 주문 키오스크 편리'],
    hashtags: [
      { tag: '#현지화메뉴', count: 234, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: '佐藤健', avatar: '👨', country: '🇯🇵' },
      ]},
      { tag: '#테리야키맛있어요', count: 198, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#가성비좋아요', count: 176, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'John Smith', avatar: '👨', country: '🇬🇧' },
      ]},
    ]
  },
  '파이브가이즈': {
    name: '파이브가이즈',
    nameEn: 'Five Guys',
    category: '레스토랑',
    country: '미국',
    city: '뉴욕',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    rating: 4.5,
    distance: '680m',
    priceRange: '$$',
    cuisine: '버거 전문점',
    openHours: '11:00 - 22:00',
    description: '1986년 버지니아에서 시작된 프리미엄 버거 체인으로, 신선한 재료와 커스터마이징 가능한 토핑이 특징입니다. 무료 땅콩과 넉넉한 양의 감자튀김으로 유명합니다.',
    signature: ['치즈버거', '베이컨 치즈버거', '케이준 프라이', '밀크쉐이크'],
    menuItems: [
      { name: '치즈버거', description: '더블 패티 기본 (토핑 15가지 무료)', price: '$9.99', isRecommended: true },
      { name: '베이컨 치즈버거', description: '베이컨 추가 더블 패티', price: '$11.49', isRecommended: true },
      { name: '리틀 치즈버거', description: '싱글 패티 버전', price: '$7.99' },
      { name: '레귤러 프라이', description: '신선한 감자 (넉넉한 양)', price: '$5.49', isRecommended: true },
      { name: '케이준 프라이', description: '매콤한 시즈닝', price: '$5.99', isRecommended: true },
      { name: '밀크쉐이크', description: '바닐라/초콜릿/딸기', price: '$5.29' },
      { name: '핫도그', description: '올비프 핫도그', price: '$6.49' },
    ],
    tips: ['프라이 사이즈 주의 (리틀도 충분)', '무료 땅콩 마음껏', '토핑 15가지 전부 무료', '밀크쉐이크 믹스 가능'],
    hashtags: [
      { tag: '#버거맛집', count: 312, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#프라이양많아요', count: 267, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
      { tag: '#토핑천국', count: 234, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
    ]
  },
  '블루보틀': {
    name: '블루보틀',
    nameEn: 'Blue Bottle Coffee',
    category: '카페',
    country: '미국',
    city: '샌프란시스코',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    rating: 4.6,
    distance: '420m',
    priceRange: '$$',
    cuisine: '스페셜티 커피',
    openHours: '07:00 - 19:00',
    description: '2002년 오클랜드에서 시작된 스페셜티 커피 브랜드로, 48시간 이내 로스팅한 원두만 사용합니다. 미니멀한 인테리어와 정성스러운 핸드드립이 특징이며, 커피 본연의 맛을 중요시합니다.',
    signature: ['뉴올리언스', '블루보틀 블렌드', '싱글 오리진 드립', '카페 라떼'],
    menuItems: [
      { name: '뉴올리언스', description: '아이스 커피+치커리+밀크', price: '$5.50', isRecommended: true },
      { name: '블루보틀 블렌드 드립', description: '시그니처 블렌드', price: '$5.00', isRecommended: true },
      { name: '싱글 오리진 드립', description: '매일 바뀌는 원두', price: '$6.00', isRecommended: true },
      { name: '카페 라떼', description: '부드러운 라떼아트', price: '$5.50' },
      { name: '콜드브루', description: '12시간 추출', price: '$5.00' },
      { name: '아포가토', description: '에스프레소+아이스크림', price: '$6.50' },
      { name: '리에타', description: '에스프레소+우유+민트', price: '$5.50' },
    ],
    tips: ['모바일 앱 선주문 가능', '원두 구매 시 그라인딩 무료', '매장마다 인테리어 다름', '웨이팅 각오'],
    hashtags: [
      { tag: '#커피맛집', count: 289, users: [
        { name: '최유진', avatar: '👩', country: '🇰🇷' },
        { name: 'Sarah Kim', avatar: '👩', country: '🇺🇸' },
      ]},
      { tag: '#뉴올리언스추천', count: 256, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'David Lee', avatar: '👨', country: '🇺🇸' },
      ]},
      { tag: '#감성카페', count: 223, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Emma Wilson', avatar: '👩', country: '🇦🇺' },
      ]},
    ]
  },
  '스타벅스': {
    name: '스타벅스',
    nameEn: 'Starbucks',
    category: '카페',
    country: '이탈리아',
    city: '밀라노',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80',
    rating: 4.3,
    distance: '290m',
    priceRange: '$$',
    cuisine: '커피 체인',
    openHours: '07:00 - 21:00',
    description: '세계 최대 커피 체인으로, 밀라노 로스터리는 유럽 최초로 2018년 오픈한 플래그십 매장입니다. 이탈리아 전통 바 문화와 스타벅스 스타일이 결합된 독특한 경험을 제공합니다.',
    signature: ['아포가토', '이탈리안 로스트', '티라미수 라떼', '프라푸치노'],
    menuItems: [
      { name: '카페 아메리카노', description: '클래식 아메리카노', price: '€3.50' },
      { name: '카페 라떼', description: '부드러운 우유 거품', price: '€4.50' },
      { name: '카푸치노', description: '전통 이탈리안 스타일', price: '€4.50', isRecommended: true },
      { name: '아포가토', description: '에스프레소+젤라또', price: '€5.50', isRecommended: true },
      { name: '티라미수 라떼', description: '이탈리아 한정', price: '€5.50', isRecommended: true },
      { name: '카라멜 마키아또', description: '달콤한 카라멜', price: '€5.00' },
      { name: '프라푸치노', description: '다양한 맛', price: '€5.50' },
    ],
    tips: ['로스터리 매장 방문 추천', '현지 한정 메뉴 체크', '텀블러 지참 시 할인', '모바일 앱 리워드 적립'],
    hashtags: [
      { tag: '#밀라노로스터리', count: 267, users: [
        { name: '박지호', avatar: '👨', country: '🇰🇷' },
        { name: 'Sophie Martin', avatar: '👩', country: '🇫🇷' },
      ]},
      { tag: '#티라미수라떼', count: 234, users: [
        { name: '이서연', avatar: '👩', country: '🇰🇷' },
        { name: 'Anna Müller', avatar: '👩', country: '🇩🇪' },
      ]},
      { tag: '#편하게한잔', count: 198, users: [
        { name: '김민준', avatar: '👨', country: '🇰🇷' },
        { name: 'Carlos Garcia', avatar: '👨', country: '🇪🇸' },
      ]},
    ]
  },
};
