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
      tags: ['TypeScript', 'React', '開発', 'おすすめ'],
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
      tags: ['京都', '桜', '春', 'おすすめ'],
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
      tags: ['ラーメン', 'グルメ', '渋谷', 'おすすめ'],
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
      tags: ['AI', 'Tech', '機械学習', 'おすすめ'],
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
        type: 'link',
        content: 'https://example.com/audio/sample.mp3'
      }
    ],
    metadata: {
      likes: 945,
      comments: 73,
      shares: 128,
      views: 12000,
      tags: ['音楽', 'JPOP', 'プレイリスト', 'おすすめ'],
    }
  },
  {
    id: 'post-1',
    userId: 'user1',
    username: '@user1',
    createdAt: new Date('2024-02-15T10:00:00'),
    mainContent: {
      type: 'text',
      content: '今日は新しいアニメの1話を見ました！作画が素晴らしかったです✨',
    },
    metadata: {
      likes: 150,
      comments: 30,
      shares: 25,
      views: 1200,
      tags: ['アニメ', '新作アニメ', 'おすすめ']
    }
  },
  {
    id: 'post-2',
    userId: 'user2',
    username: '@user2',
    createdAt: new Date('2024-02-15T09:30:00'),
    mainContent: {
      type: 'text',
      content: 'この投稿が思った以上に反響があって驚いています！みなさんありがとうございます🙏',
    },
    metadata: {
      likes: 3000,
      comments: 500,
      shares: 1200,
      views: 15000,
      tags: ['拡散された', '感謝']
    }
  },
  {
    id: 'post-3',
    userId: 'user3',
    username: '@user3',
    createdAt: new Date('2024-02-15T09:00:00'),
    mainContent: {
      type: 'text',
      content: '新しい技術のキャッチアップ中。みんなはどうやって最新情報をチェックしてる？',
    },
    metadata: {
      likes: 120,
      comments: 45,
      shares: 15,
      views: 800,
      tags: ['アニメ', '技術', '学習']
    }
  },
  {
    id: 'post-4',
    userId: 'user4',
    username: '@user4',
    createdAt: new Date('2024-02-15T08:30:00'),
    mainContent: {
      type: 'text',
      content: '昨日のアニメの考察です。伏線がすごかったですね...',
    },
    metadata: {
      likes: 800,
      comments: 200,
      shares: 150,
      views: 5000,
      tags: ['アニメ', '考察', '拡散された']
    }
  },
  {
    id: 'post-5',
    userId: 'user5',
    username: '@user5',
    createdAt: new Date('2024-02-15T08:00:00'),
    mainContent: {
      type: 'text',
      content: 'バイラルコンテンツの分析結果をまとめてみました。興味深い傾向が見えてきました📊',
    },
    metadata: {
      likes: 2500,
      comments: 300,
      shares: 1000,
      views: 12000,
      tags: ['拡散された', 'データ分析', 'おすすめ']
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
      tags: ['写真', '自然', 'ポートレート', '拡散された'],
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
      tags: ['風景', '写真', 'トラベル', '拡散された'],
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
      tags: ['スナップ', 'モノクロ', 'ストリート', '拡散された'],
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
      tags: ['ミニマル', 'デザイン', 'アート', '拡散された'],
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
      tags: ['建築', 'パノラマ', '都市', 'アニメ'],
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
      tags: ['ポートレート', '人物', 'アート', 'アニメ'],
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
      tags: ['トレンド', 'AI', 'テクノロジー', 'おすすめ'],
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
      tags: ['バイラル', '話題', '拡散', 'おすすめ'],
    }
  },
  {
    id: 'spread2',
    userId: 'user7',
    username: '@trending_now',
    createdAt: new Date('2024-02-15T10:00:00'),
    mainContent: {
      type: 'text',
      content: '【速報】新しい技術が世界を変える！AIと量子コンピューティングの融合が実現。詳細は続報で。',
    },
    metadata: {
      likes: 25000,
      comments: 4500,
      shares: 12000,
      views: 280000,
      tags: ['テクノロジー', '拡散', 'トレンド', '拡散された'],
    }
  },
  {
    id: 'spread3',
    userId: 'user8',
    username: '@viral_memes',
    createdAt: new Date('2024-02-15T09:30:00'),
    mainContent: {
      type: 'text',
      content: '今日のミーム：「プログラマーの日常」が話題に。デバッグに費やす時間の真実が共感を呼ぶ。',
    },
    metadata: {
      likes: 18000,
      comments: 3200,
      shares: 9500,
      views: 200000,
      tags: ['ミーム', '拡散', 'プログラミング', '拡散された'],
    }
  }
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
  {
    id: 'anime2',
    userId: 'user9',
    username: '@anime_news',
    createdAt: new Date('2024-02-15T11:00:00'),
    mainContent: {
      type: 'text',
      content: '【アニメ速報】人気作品の新シリーズが制作決定！詳細は公式サイトをチェック。',
    },
    metadata: {
      likes: 8500,
      comments: 1200,
      shares: 3400,
      views: 65000,
      tags: ['アニメ', 'ニュース', '新作'],
    }
  },
  {
    id: 'anime3',
    userId: 'user10',
    username: '@manga_updates',
    createdAt: new Date('2024-02-15T10:30:00'),
    mainContent: {
      type: 'text',
      content: '週刊連載作品の最新話が話題沸騰中！ファンの間で様々な考察が飛び交う。',
    },
    metadata: {
      likes: 6200,
      comments: 890,
      shares: 1500,
      views: 45000,
      tags: ['アニメ', 'マンガ', '考察'],
    }
  }
];

// テキスト投稿のダミーデータ
export const dummyTextContents: ContentItem[] = [
  {
    id: 'text-1',
    userId: 'user1',
    username: '@textuser1',
    createdAt: new Date('2024-02-15T10:00:00'),
    mainContent: {
      type: 'text',
      content: '今日は素晴らしい一日でした。朝早く起きて、散歩に行き、新鮮な空気を吸って、心地よい朝日を浴びました。このような朝の習慣を続けていきたいと思います。皆さんも朝活、始めてみませんか？',
    },
    metadata: {
      likes: 123,
      comments: 45,
      shares: 67,
      views: 890,
      tags: ['朝活', '健康', 'ライフスタイル']
    }
  },
  {
    id: 'text-2',
    userId: 'user2',
    username: '@textuser2',
    createdAt: new Date('2024-02-15T09:30:00'),
    mainContent: {
      type: 'text',
      content: '新しいプロジェクト始動！',
    },
    metadata: {
      likes: 45,
      comments: 12,
      shares: 8,
      views: 234,
      tags: ['プロジェクト', '仕事']
    }
  },
  {
    id: 'text-3',
    userId: 'user3',
    username: '@textuser3',
    createdAt: new Date('2024-02-15T09:00:00'),
    mainContent: {
      type: 'text',
      content: 'プログラミングの世界は本当に奥が深いですね。毎日新しい発見があります。今日はReactの新しいフックについて学びました。useEffectとuseMemoの使い分けが少しずつ分かってきた気がします。まだまだ勉強が必要ですが、一歩一歩前進していきたいと思います。',
    },
    metadata: {
      likes: 234,
      comments: 56,
      shares: 23,
      views: 789,
      tags: ['プログラミング', 'React', '学習']
    }
  },
  {
    id: 'text-4',
    userId: 'user4',
    username: '@textuser4',
    createdAt: new Date('2024-02-15T08:30:00'),
    mainContent: {
      type: 'text',
      content: 'おはよう！',
    },
    metadata: {
      likes: 12,
      comments: 3,
      shares: 1,
      views: 89,
      tags: ['挨拶']
    }
  },
  {
    id: 'text-5',
    userId: 'user5',
    username: '@textuser5',
    createdAt: new Date('2024-02-15T08:00:00'),
    mainContent: {
      type: 'text',
      content: '最近読んだ本の感想です。「アトミック・ハビット」という本を読みました。小さな習慣の積み重ねが大きな変化を生むという内容で、とても納得できる部分が多かったです。特に、習慣を形成する4つのステップについての説明は、実践的で分かりやすかったです。この本で学んだことを日常生活に取り入れていきたいと思います。皆さんにもおすすめの一冊です。',
    },
    metadata: {
      likes: 345,
      comments: 78,
      shares: 90,
      views: 1234,
      tags: ['読書', '自己啓発', '習慣']
    }
  },
  {
    id: 'text-6',
    userId: 'user6',
    username: '@textuser6',
    createdAt: new Date('2024-02-15T07:30:00'),
    mainContent: {
      type: 'text',
      content: '今日のランチは手作りサンドイッチ🥪',
    },
    metadata: {
      likes: 67,
      comments: 15,
      shares: 5,
      views: 345,
      tags: ['ランチ', '手作り']
    }
  },
  {
    id: 'text-7',
    userId: 'user7',
    username: '@textuser7',
    createdAt: new Date('2024-02-15T07:00:00'),
    mainContent: {
      type: 'text',
      content: 'プログラミングの学習方法について考えてみました。1. 基礎をしっかり学ぶ 2. 実践的なプロジェクトに取り組む 3. コードを書く習慣をつける 4. オープンソースに貢献する 5. コミュニティに参加する。これらを意識して進めていくと、着実にスキルアップできると思います。',
    },
    metadata: {
      likes: 456,
      comments: 89,
      shares: 123,
      views: 1567,
      tags: ['プログラミング', '学習方法', 'スキルアップ']
    }
  },
  {
    id: 'text-8',
    userId: 'user8',
    username: '@textuser8',
    createdAt: new Date('2024-02-15T06:30:00'),
    mainContent: {
      type: 'text',
      content: '今日も一日頑張りましょう！',
    },
    metadata: {
      likes: 23,
      comments: 5,
      shares: 2,
      views: 156,
      tags: ['モチベーション']
    }
  },
  {
    id: 'text-9',
    userId: 'user9',
    username: '@textuser9',
    createdAt: new Date('2024-02-15T06:00:00'),
    mainContent: {
      type: 'text',
      content: 'UIデザインの重要性について考えています。見た目の美しさだけでなく、使いやすさ、アクセシビリティ、パフォーマンスなど、多くの要素を考慮する必要があります。ユーザー体験を向上させるためには、これらのバランスを取ることが大切だと感じています。',
    },
    metadata: {
      likes: 567,
      comments: 98,
      shares: 145,
      views: 2345,
      tags: ['UIデザイン', 'UX', 'デザイン']
    }
  },
  {
    id: 'text-10',
    userId: 'user10',
    username: '@textuser10',
    createdAt: new Date('2024-02-15T05:30:00'),
    mainContent: {
      type: 'text',
      content: '☕️',
    },
    metadata: {
      likes: 34,
      comments: 7,
      shares: 3,
      views: 234,
      tags: ['コーヒー']
    }
  },
  {
    id: 'text-11',
    userId: 'user11',
    username: '@textuser11',
    createdAt: new Date('2024-02-15T05:00:00'),
    mainContent: {
      type: 'text',
      content: '新しい技術を学ぶことは、常に刺激的です。最近はAIと機械学習について勉強を始めました。基礎的な数学から、実装まで幅広く学んでいます。難しい部分もありますが、一つずつ理解を深めていくのが楽しいです。同じように学んでいる方、情報交換しませんか？',
    },
    metadata: {
      likes: 678,
      comments: 123,
      shares: 89,
      views: 3456,
      tags: ['AI', '機械学習', '技術']
    }
  },
  {
    id: 'text-12',
    userId: 'user12',
    username: '@textuser12',
    createdAt: new Date('2024-02-15T04:30:00'),
    mainContent: {
      type: 'text',
      content: 'テスト投稿です。',
    },
    metadata: {
      likes: 5,
      comments: 1,
      shares: 0,
      views: 45,
      tags: ['テスト']
    }
  },
  {
    id: 'text-13',
    userId: 'user13',
    username: '@textuser13',
    createdAt: new Date('2024-02-15T04:00:00'),
    mainContent: {
      type: 'text',
      content: 'チームワークの重要性について考えさせられる出来事がありました。個人の能力も大切ですが、チームとして協力し合い、お互いの強みを活かすことで、より大きな成果を出すことができます。コミュニケーションを大切にし、信頼関係を築いていくことが、良いチームを作る基礎になると実感しています。',
    },
    metadata: {
      likes: 789,
      comments: 145,
      shares: 234,
      views: 4567,
      tags: ['チームワーク', '仕事', 'コミュニケーション']
    }
  },
  {
    id: 'text-14',
    userId: 'user14',
    username: '@textuser14',
    createdAt: new Date('2024-02-15T03:30:00'),
    mainContent: {
      type: 'text',
      content: '今日の目標達成！',
    },
    metadata: {
      likes: 45,
      comments: 8,
      shares: 4,
      views: 345,
      tags: ['目標達成']
    }
  },
  {
    id: 'text-15',
    userId: 'user15',
    username: '@textuser15',
    createdAt: new Date('2024-02-15T03:00:00'),
    mainContent: {
      type: 'text',
      content: 'オープンソースソフトウェアの魅力について語りたいと思います。誰もが自由にコードを見て、使って、改善できる。そんな環境があることで、技術は進化し、コミュニティは成長していきます。私も少しずつですが、コントリビューションを始めています。皆さんも是非参加してみてください！',
    },
    metadata: {
      likes: 890,
      comments: 167,
      shares: 278,
      views: 5678,
      tags: ['オープンソース', 'OSS', 'プログラミング']
    }
  },
  {
    id: 'text-16',
    userId: 'user16',
    username: '@textuser16',
    createdAt: new Date('2024-02-15T02:30:00'),
    mainContent: {
      type: 'text',
      content: '今日の夕焼けが綺麗でした🌅',
    },
    metadata: {
      likes: 56,
      comments: 12,
      shares: 8,
      views: 456,
      tags: ['夕焼け', '写真']
    }
  },
  {
    id: 'text-17',
    userId: 'user17',
    username: '@textuser17',
    createdAt: new Date('2024-02-15T02:00:00'),
    mainContent: {
      type: 'text',
      content: 'デザインシステムの重要性について考えています。一貫性のあるUIを作るためには、しっかりとしたデザインシステムが不可欠です。コンポーネントの再利用性を高め、開発効率を上げることができます。',
    },
    metadata: {
      likes: 901,
      comments: 178,
      shares: 289,
      views: 6789,
      tags: ['デザインシステム', 'UI', 'デザイン']
    }
  },
  {
    id: 'text-18',
    userId: 'user18',
    username: '@textuser18',
    createdAt: new Date('2024-02-15T01:30:00'),
    mainContent: {
      type: 'text',
      content: '新しい本を読み始めました📚',
    },
    metadata: {
      likes: 67,
      comments: 15,
      shares: 9,
      views: 567,
      tags: ['読書', '本']
    }
  },
  {
    id: 'text-19',
    userId: 'user19',
    username: '@textuser19',
    createdAt: new Date('2024-02-15T01:00:00'),
    mainContent: {
      type: 'text',
      content: 'アジャイル開発の本質は、人とコミュニケーションにあると思います。ツールや手法も大切ですが、チーム全体が同じ目標に向かって協力し合える環境を作ることが最も重要です。スクラムマスターとして、この点を特に意識しています。',
    },
    metadata: {
      likes: 1012,
      comments: 189,
      shares: 301,
      views: 7890,
      tags: ['アジャイル', 'スクラム', '開発']
    }
  },
  {
    id: 'text-20',
    userId: 'user20',
    username: '@textuser20',
    createdAt: new Date('2024-02-15T00:30:00'),
    mainContent: {
      type: 'text',
      content: 'おやすみなさい😴',
    },
    metadata: {
      likes: 78,
      comments: 23,
      shares: 12,
      views: 678,
      tags: ['おやすみ']
    }
  },
  {
    id: 'text-21',
    userId: 'user21',
    username: '@textuser21',
    createdAt: new Date('2024-02-15T00:00:00'),
    mainContent: {
      type: 'text',
      content: 'パフォーマンスチューニングの成果が出ました！ページの読み込み時間を50%削減することに成功。主な改善点：1. 画像の最適化 2. コードの分割 3. レイジーローディングの導入 4. キャッシュ戦略の見直し。まだまだ改善の余地がありそうです。',
    },
    metadata: {
      likes: 1123,
      comments: 201,
      shares: 312,
      views: 8901,
      tags: ['パフォーマンス', 'Web開発', '最適化']
    }
  },
  {
    id: 'text-22',
    userId: 'user22',
    username: '@textuser22',
    createdAt: new Date('2024-02-14T23:30:00'),
    mainContent: {
      type: 'text',
      content: '明日は早起き！',
    },
    metadata: {
      likes: 89,
      comments: 34,
      shares: 15,
      views: 789,
      tags: ['早起き', '目標']
    }
  },
  {
    id: 'text-23',
    userId: 'user23',
    username: '@textuser23',
    createdAt: new Date('2024-02-14T23:00:00'),
    mainContent: {
      type: 'text',
      content: 'セキュリティは常に最優先事項です。最近のセキュリティ対策：1. 定期的なセキュリティ監査 2. 2要素認証の導入 3. 暗号化の強化 4. アクセス権限の見直し。セキュリティに終わりはありません。常に最新の脅威に対応できる体制を整えています。',
    },
    metadata: {
      likes: 1234,
      comments: 212,
      shares: 323,
      views: 9012,
      tags: ['セキュリティ', 'IT', '技術']
    }
  },
  {
    id: 'text-24',
    userId: 'user24',
    username: '@textuser24',
    createdAt: new Date('2024-02-14T22:30:00'),
    mainContent: {
      type: 'text',
      content: '今週末は映画鑑賞予定🎬',
    },
    metadata: {
      likes: 90,
      comments: 45,
      shares: 18,
      views: 890,
      tags: ['映画', '週末']
    }
  },
  {
    id: 'text-25',
    userId: 'user25',
    username: '@textuser25',
    createdAt: new Date('2024-02-14T22:00:00'),
    mainContent: {
      type: 'text',
      content: 'クラウドネイティブアーキテクチャの利点について。マイクロサービス、コンテナ化、CI/CD、インフラのコード化など、モダンな開発手法を取り入れることで、スケーラビリティと保守性が大幅に向上しました。チームの生産性も上がっています。',
    },
    metadata: {
      likes: 1345,
      comments: 223,
      shares: 334,
      views: 10123,
      tags: ['クラウド', 'アーキテクチャ', 'DevOps']
    }
  },
  {
    id: 'text-26',
    userId: 'user26',
    username: '@textuser26',
    createdAt: new Date('2024-02-14T21:30:00'),
    mainContent: {
      type: 'text',
      content: '新しいカフェを見つけました☕️',
    },
    metadata: {
      likes: 101,
      comments: 56,
      shares: 21,
      views: 901,
      tags: ['カフェ', 'コーヒー']
    }
  },
  {
    id: 'text-27',
    userId: 'user27',
    username: '@textuser27',
    createdAt: new Date('2024-02-14T21:00:00'),
    mainContent: {
      type: 'text',
      content: 'アクセシビリティの重要性について。Webサイトは全ての人が利用できるべきです。WAI-ARIAの適切な使用、キーボード操作のサポート、色のコントラスト比の確保など、基本的な対応から始めています。',
    },
    metadata: {
      likes: 1456,
      comments: 234,
      shares: 345,
      views: 11234,
      tags: ['アクセシビリティ', 'Web開発', 'インクルージョン']
    }
  },
  {
    id: 'text-28',
    userId: 'user28',
    username: '@textuser28',
    createdAt: new Date('2024-02-14T20:30:00'),
    mainContent: {
      type: 'text',
      content: '今日の夕食は手作りパスタ🍝',
    },
    metadata: {
      likes: 112,
      comments: 67,
      shares: 24,
      views: 1012,
      tags: ['料理', 'パスタ']
    }
  },
  {
    id: 'text-29',
    userId: 'user29',
    username: '@textuser29',
    createdAt: new Date('2024-02-14T20:00:00'),
    mainContent: {
      type: 'text',
      content: 'データ分析の重要性が増しています。ユーザー行動の理解、パフォーマンスの測定、ビジネス判断のサポートなど、データドリブンな意思決定が不可欠です。適切なツールとプロセスを整備することで、より良い判断が可能になります。',
    },
    metadata: {
      likes: 1567,
      comments: 245,
      shares: 356,
      views: 12345,
      tags: ['データ分析', 'ビジネス', '技術']
    }
  },
  {
    id: 'text-30',
    userId: 'user30',
    username: '@textuser30',
    createdAt: new Date('2024-02-14T19:30:00'),
    mainContent: {
      type: 'text',
      content: '明日から新しいチャレンジ始まります！頑張ります💪',
    },
    metadata: {
      likes: 123,
      comments: 78,
      shares: 27,
      views: 1123,
      tags: ['チャレンジ', 'モチベーション']
    }
  }
];

// チャンネル定義
export interface Channel {
  id: string;
  name: string;
  contents: ContentItem[];
}

export const channels: Channel[] = [
  {
    id: 'recommended',
    name: 'おすすめ',
    contents: dummyContents.filter(content => 
      content.metadata.tags?.includes('おすすめ') || 
      !content.metadata.tags?.some(tag => ['拡散された', 'アニメ'].includes(tag))
    ),
  },
  {
    id: 'spread',
    name: '拡散された',
    contents: dummyContents.filter(content => 
      content.metadata.tags?.includes('拡散された')
    ),
  },
  {
    id: 'anime',
    name: 'アニメ',
    contents: dummyContents.filter(content => 
      content.metadata.tags?.includes('アニメ')
    ),
  },
  // 他のチャンネルはそのまま保持
  ...Array.from({ length: 28 }, (_, i) => ({
    id: (i + 3).toString(),
    name: `chanel${i + 3}`,
    contents: recommendedContents, // デフォルトはおすすめコンテンツを表示
  })),
]; 