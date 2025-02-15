import { ContentItem } from './ContentCard';

export const dummyContents: ContentItem[] = [
  {
    id: '1',
    userId: 'user1',
    username: '@techie_dev',
    userAvatar: 'https://picsum.photos/200',
    createdAt: new Date('2024-02-07T10:30:00'),
    mainContent: {
      type: 'text',
      content: 'TypeScriptとReactの組み合わせ最高！型安全性とコンポーネントベースの開発で生産性が格段に上がりました。みなさんのお気に入りのTypeScript機能は何ですか？ #TypeScript #React #開発',
    },
    metadata: {
      likes: 1200,
      comments: 89,
      shares: 234,
      views: 15000,
      tags: ['TypeScript', 'React', '開発'],
    }
  },
  {
    id: '2',
    userId: 'user2',
    username: '@travel_jp',
    userAvatar: 'https://picsum.photos/201',
    createdAt: new Date('2024-02-07T09:15:00'),
    mainContent: {
      type: 'text',
      content: '京都の桜、満開です！🌸 古都の風情と桜の組み合わせは最高の癒し。今年は例年より少し早めの開花です。',
    },
    subContents: [
      {
        type: 'image',
        content: 'https://picsum.photos/800/600',
      }
    ],
    metadata: {
      likes: 3500,
      comments: 256,
      shares: 890,
      views: 45000,
      tags: ['京都', '桜', '春'],
    }
  },
  {
    id: '3',
    userId: 'user3',
    username: '@food_lover',
    userAvatar: 'https://picsum.photos/202',
    createdAt: new Date('2024-02-07T08:45:00'),
    mainContent: {
      type: 'text',
      content: '新しいラーメン屋さんを発見！👨‍🍳 濃厚な豚骨スープと自家製麺の相性が抜群です。特に味玉の仕込みが秀逸。これは通いそう...🍜',
    },
    subContents: [
      {
        type: 'image',
        content: 'https://picsum.photos/800/800',
      },
      {
        type: 'text',
        content: '場所：東京都渋谷区○○ 営業時間：11:00-23:00 定休日：水曜',
      }
    ],
    metadata: {
      likes: 2800,
      comments: 167,
      shares: 432,
      views: 28000,
      tags: ['ラーメン', 'グルメ', '渋谷'],
    }
  },
  {
    id: '4',
    userId: 'user4',
    username: '@tech_news',
    userAvatar: 'https://picsum.photos/203',
    createdAt: new Date('2024-02-07T07:30:00'),
    mainContent: {
      type: 'text',
      content: '【速報】新しいAI言語モデルが発表されました。従来モデルと比べて30%の性能向上と50%の計算コスト削減を実現。これにより、よりスケーラブルなAIアプリケーションの開発が可能に。',
    },
    subContents: [
      {
        type: 'link',
        content: 'https://example.com/tech-news/ai-breakthrough',
      }
    ],
    metadata: {
      likes: 5600,
      comments: 892,
      shares: 2300,
      views: 89000,
      tags: ['AI', 'Tech', '機械学習'],
    }
  },
  {
    id: '5',
    userId: 'user5',
    username: '@music_fan',
    userAvatar: 'https://picsum.photos/204',
    createdAt: new Date('2024-02-07T06:20:00'),
    mainContent: {
      type: 'text',
      content: '今日のプレイリスト🎵 最近のお気に入りJ-POPをシャッフル再生中。作業が捗る！',
    },
    subContents: [
      {
        type: 'audio',
        content: 'https://example.com/audio/sample.mp3',
        duration: 180,
      }
    ],
    metadata: {
      likes: 945,
      comments: 73,
      shares: 128,
      views: 12000,
      tags: ['音楽', 'JPOP', 'プレイリスト'],
    }
  }
];

export const dummyImageContents: ContentItem[] = [
  {
    id: 'img1',
    userId: 'photographer1',
    username: '@nature_photo',
    userAvatar: 'https://picsum.photos/seed/user1/40',
    createdAt: new Date('2024-02-08T10:00:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/seed/nature1/800/1200',
      aspectRatio: 2/3
    },
    metadata: {
      likes: 2400,
      comments: 89,
      shares: 156,
      views: 12000,
      tags: ['写真', '自然', 'ポートレート'],
    }
  },
  {
    id: 'img2',
    userId: 'photographer2',
    username: '@landscape',
    userAvatar: 'https://picsum.photos/seed/user2/40',
    createdAt: new Date('2024-02-08T09:30:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/seed/landscape1/1200/800',
      aspectRatio: 3/2
    },
    metadata: {
      likes: 3600,
      comments: 145,
      shares: 278,
      views: 18000,
      tags: ['風景', '写真', 'トラベル'],
    }
  },
  {
    id: 'img3',
    userId: 'photographer3',
    username: '@street_snap',
    userAvatar: 'https://picsum.photos/seed/user3/40',
    createdAt: new Date('2024-02-08T09:00:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/seed/street1/1000/1000',
      aspectRatio: 1
    },
    metadata: {
      likes: 1800,
      comments: 67,
      shares: 92,
      views: 8500,
      tags: ['スナップ', 'モノクロ', 'ストリート'],
    }
  },
  {
    id: 'img4',
    userId: 'photographer4',
    username: '@minimal',
    userAvatar: 'https://picsum.photos/seed/user4/40',
    createdAt: new Date('2024-02-08T08:30:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/seed/minimal1/800/1000',
      aspectRatio: 4/5
    },
    metadata: {
      likes: 4200,
      comments: 234,
      shares: 567,
      views: 25000,
      tags: ['ミニマル', 'デザイン', 'アート'],
    }
  },
  {
    id: 'img5',
    userId: 'photographer5',
    username: '@architecture',
    userAvatar: 'https://picsum.photos/seed/user5/40',
    createdAt: new Date('2024-02-08T08:00:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/seed/architecture1/1200/600',
      aspectRatio: 2/1
    },
    metadata: {
      likes: 5600,
      comments: 342,
      shares: 890,
      views: 35000,
      tags: ['建築', 'パノラマ', '都市'],
    }
  },
  {
    id: 'img6',
    userId: 'photographer6',
    username: '@portrait',
    userAvatar: 'https://picsum.photos/seed/user6/40',
    createdAt: new Date('2024-02-08T07:30:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/seed/portrait1/600/900',
      aspectRatio: 2/3
    },
    metadata: {
      likes: 3200,
      comments: 156,
      shares: 234,
      views: 15000,
      tags: ['ポートレート', '人物', 'アート'],
    }
  }
];

// おすすめコンテンツ
export const recommendedContents: ContentItem[] = [
  {
    id: 'rec1',
    userId: 'user1',
    username: '@trending_user',
    userAvatar: 'https://picsum.photos/200',
    createdAt: new Date('2024-02-07T10:30:00'),
    mainContent: {
      type: 'text',
      content: '今日のトレンドトピック：AIと未来の仕事について考える #AI #Future #Tech',
    },
    metadata: {
      likes: 5200,
      comments: 342,
      shares: 890,
      views: 45000,
      tags: ['トレンド', 'AI', 'テクノロジー'],
    }
  },
  // ... 他のおすすめコンテンツ
];

// 拡散されたコンテンツ
export const spreadContents: ContentItem[] = [
  {
    id: 'spread1',
    userId: 'user2',
    username: '@viral_content',
    userAvatar: 'https://picsum.photos/201',
    createdAt: new Date('2024-02-07T09:15:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/800/600',
      aspectRatio: 4/3,
    },
    metadata: {
      likes: 15000,
      comments: 2300,
      shares: 8900,
      views: 150000,
      tags: ['バイラル', '話題', '拡散'],
    }
  },
  // ... 他の拡散コンテンツ
];

// アニメコンテンツ
export const animeContents: ContentItem[] = [
  {
    id: 'anime1',
    userId: 'user3',
    username: '@anime_fan',
    userAvatar: 'https://picsum.photos/202',
    createdAt: new Date('2024-02-07T08:45:00'),
    mainContent: {
      type: 'image',
      content: 'https://picsum.photos/800/800',
      aspectRatio: 1,
    },
    metadata: {
      likes: 3800,
      comments: 567,
      shares: 432,
      views: 28000,
      tags: ['アニメ', 'manga', 'otaku'],
    }
  },
  // ... 他のアニメコンテンツ
];

// チャンネル定義
export interface Channel {
  id: string;
  name: string;
  contents: ContentItem[];
}

export const channels: Channel[] = [
  {
    id: '0',
    name: 'おすすめ',
    contents: recommendedContents,
  },
  {
    id: '1',
    name: '拡散された',
    contents: spreadContents,
  },
  {
    id: '2',
    name: 'アニメ',
    contents: animeContents,
  },
  // 他のチャンネルはそのまま保持
  ...Array.from({ length: 28 }, (_, i) => ({
    id: (i + 3).toString(),
    name: `chanel${i + 3}`,
    contents: recommendedContents, // デフォルトはおすすめコンテンツを表示
  })),
]; 