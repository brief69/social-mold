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