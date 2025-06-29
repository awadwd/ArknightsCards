const { createApp, ref, reactive, computed, onMounted } = Vue;

// 使用JSON文件中的卡片数据作为后备数据
const backupCardsData = {
    highPriceCards: [
        { id: "6841396d2b2fd8404bd94e80", name: '水月', level: '精一', price: 70, highPrice: true },
        { id: "68413a212b2fd8404bd94e82", name: '水月', level: '精二', price: 75, highPrice: true },
        { id: "68413a482b2fd8404bd94e84", name: '拉普兰德', level: '精二', price: 55, highPrice: true },
        { id: "68413ac52b2fd8404bd94e85", name: '拉普兰德', level: '精一', price: 50, highPrice: true },
        { id: "68413b0c2b2fd8404bd94e86", name: '黍', level: '精一', price: 80, highPrice: true },
        { id: "68413b1b2b2fd8404bd94e87", name: '黍', level: '精二', price: 90, highPrice: true },
        { id: "68413b2e2b2fd8404bd94e88", name: '逻各斯', level: '精一', price: 70, highPrice: true },
        { id: "68413b432b2fd8404bd94e89", name: '逻各斯', level: '精二', price: 90, highPrice: true },
        { id: "68413b5b2b2fd8404bd94e8a", name: '乌尔比安', level: '精一', price: 55, highPrice: true },
        { id: "68413b802b2fd8404bd94e8b", name: '乌尔比安', level: '精二', price: 60, highPrice: true },
        { id: "68413b8d2b2fd8404bd94e8c", name: '荒芜拉普兰德', level: '精一', price: 50, highPrice: true },
        { id: "68413b992b2fd8404bd94e8d", name: '荒芜拉普兰德', level: '精二', price: 65, highPrice: true },
        { id: "6847e7032b2fd8404bda7165", name: '闪击', level: '精一', price: 200, highPrice: true },
        { id: "6847e70c2b2fd8404bda7166", name: '闪击', level: '精二', price: 300, highPrice: true },
        { id: "68480ae0ce7fc86fafef4fc4", name: '早露', level: '精二', price: 50, highPrice: true },
        { id: "68480ae9c02b652dbc40158f", name: '森蚺', level: '精二', price: 50, highPrice: true },
        { id: "68480aecb9570274dfd940e5", name: '赫拉格', level: '精一', price: 55, highPrice: true },
        { id: "68480aecb9570274dfd940eb", name: '赫拉格', level: '精二', price: 60, highPrice: true },
        { id: "68480af46993d81fe69cbbdc", name: '迷迭香', level: '精一', price: 110, highPrice: true },
        { id: "68480af3d3496c42462dcfd5", name: '迷迭香', level: '精二', price: 120, highPrice: true },
        { id: "68480af46993d81fe69cbbdc", name: '泥岩', level: '精一', price: 65, highPrice: true },
        { id: "68480af4b9570274dfd94125", name: '泥岩', level: '精二', price: 70, highPrice: true },
        { id: "68480af5d3496c42462dcfe0", name: '絮雨', level: '精一', price: 55, highPrice: true },
        { id: "68480af6d3496c42462dcfe6", name: '絮雨', level: '精二', price: 65, highPrice: true },
        { id: "68480b10d3496c42462dd089", name: '桑葚', level: '精二', price: 50, highPrice: true },
        { id: "68480b2e6993d81fe69cbd46", name: '伊内丝', level: '精一', price: 70, highPrice: true },
        { id: "68480b2ece7fc86fafef53b9", name: '伊内丝', level: '精二', price: 75, highPrice: true },
        { id: "68480b256993d81fe69cbd21", name: '歌蕾蒂娅', level: '精二', price: 50, highPrice: true },
        { id: "68480b1b6993d81fe69cbced", name: '见行者', level: '精二', price: 50, highPrice: true },
        { id: "68480afe6993d81fe69cbc17", name: '银灰', level: '精二', price: 55, highPrice: true },
        { id: "68480b1b6993d81fe69cbced", name: '焰影苇草', level: '精二', price: 60, highPrice: true },
        { id: "68480b1b6993d81fe69cbced", name: '焰影苇草', level: '精一', price: 55, highPrice: true },
        { id: "68480b1b6993d81fe69cbced", name: '麒麟X夜刀', level: '精二', price: 85, highPrice: true },
        { id: "68480b1b6993d81fe69cbced", name: '麒麟X夜刀', level: '精一', price: 75, highPrice: true }
    ],
    lowPriceCards: [
        { id: "68413ba62b2fd8404bd94e8e", name: '假日威龙陈', level: '精一', price: 20, highPrice: false },
        { id: "68413bb12b2fd8404bd94e8f", name: '假日威龙陈', level: '精二', price: 25, highPrice: false },
        { id: "68413bbe2b2fd8404bd94e90", name: '耶拉', level: '精一', price: 10, highPrice: false },
        { id: "68413bca2b2fd8404bd94e91", name: '耶拉', level: '精二', price: 15, highPrice: false },
        { id: "68413bd62b2fd8404bd94e92", name: '桃金娘', level: '精一', price: 20, highPrice: false },
        { id: "68413be52b2fd8404bd94e93", name: '桃金娘', level: '精二', price: 15, highPrice: false },
        { id: "68413bf32b2fd8404bd94e94", name: '铃兰', level: '精一', price: 15, highPrice: false },
        { id: "68413c022b2fd8404bd94e95", name: '铃兰', level: '精二', price: 25, highPrice: false },
        { id: "68413c0f2b2fd8404bd94e96", name: '忍冬', level: '精一', price: 10, highPrice: false },
        { id: "68413c1c2b2fd8404bd94e97", name: '忍冬', level: '精二', price: 20, highPrice: false },
        { id: "68480adfd3496c42462dcf6f", name: '早露', level: '精一', price: 45, highPrice: false },
        { id: "68480ae0b9570274dfd94094", name: '白金', level: '精一', price: 40, highPrice: false },
        { id: "68480ae16993d81fe69cbb4a", name: '白金', level: '精二', price: 45, highPrice: false },
        { id: "68480ae2d3496c42462dcf7c", name: '真理', level: '精一', price: 15, highPrice: false },
        { id: "68480ae3d3496c42462dcf7d", name: '真理', level: '精二', price: 20, highPrice: false },
        { id: "68480ae4b9570274dfd940a9", name: '古米', level: '精一', price: 5, highPrice: false },
        { id: "68480ae4bf6625518c4ac944", name: '古米', level: '精二', price: 10, highPrice: false },
        { id: "68480ae5bf6625518c4ac94c", name: '凛冬', level: '精一', price: 15, highPrice: false },
        { id: "68480ae6bf6625518c4ac94f", name: '凛冬', level: '精二', price: 20, highPrice: false },
        { id: "68480ae76993d81fe69cbb73", name: '苦艾', level: '精一', price: 15, highPrice: false },
        { id: "68480ae8d3496c42462dcf98", name: '苦艾', level: '精二', price: 20, highPrice: false },
        { id: "68480ae8b9570274dfd940dc", name: '森蚺', level: '精一', price: 40, highPrice: false },
        { id: "68480aea6993d81fe69cbb92", name: '燧石', level: '精一', price: 15, highPrice: false },
        { id: "68480aeb6993d81fe69cbb95", name: '燧石', level: '精二', price: 20, highPrice: false },
        { id: "68480aedc02b652dbc40159f", name: '锡兰', level: '精一', price: 15, highPrice: false },
        { id: "68480aeec02b652dbc4015a4", name: '锡兰', level: '精二', price: 20, highPrice: false },
        { id: "68480aefd3496c42462dcfb8", name: '特米米', level: '精一', price: 25, highPrice: false },
        { id: "68480af0b9570274dfd9410a", name: '特米米', level: '精二', price: 30, highPrice: false },
        { id: "68480af0b9570274dfd94112", name: '酸糖', level: '精一', price: 5, highPrice: false },
        { id: "68480af1c02b652dbc4015b7", name: '酸糖', level: '精二', price: 10, highPrice: false },
        { id: "68480af7d3496c42462dcfed", name: '芙兰卡', level: '精一', price: 15, highPrice: false },
        { id: "68480af86993d81fe69cbbf1", name: '芙兰卡', level: '精二', price: 20, highPrice: false },
        { id: "68480af8ce7fc86fafef505c", name: '雷蛇', level: '精一', price: 25, highPrice: false },
        { id: "68480af9b9570274dfd9413f", name: '雷蛇', level: '精二', price: 30, highPrice: false },
        { id: "68480aface7fc86fafef5064", name: '断罪者', level: '精一', price: 10, highPrice: false },
        { id: "68480afbce7fc86fafef5068", name: '断罪者', level: '精二', price: 10, highPrice: false },
        { id: "68480afcb9570274dfd9414e", name: '杰克', level: '精一', price: 5, highPrice: false },
        { id: "68480afcce7fc86fafef5077", name: '杰克', level: '精二', price: 10, highPrice: false },
        { id: "68480afdc02b652dbc401623", name: '银灰', level: '精一', price: 40, highPrice: false },
        { id: "68480affce7fc86fafef5089", name: '初雪', level: '精一', price: 20, highPrice: false },
        { id: "68480b00b9570274dfd94177", name: '初雪', level: '精二', price: 25, highPrice: false },
        { id: "68480b00bf6625518c4ac9e8", name: '崖心', level: '精一', price: 5, highPrice: false },
        { id: "68480b01bf6625518c4ac9eb", name: '崖心', level: '精二', price: 10, highPrice: false },
        { id: "68480b02b9570274dfd9418a", name: '角峰', level: '精一', price: 5, highPrice: false },
        { id: "68480b03d3496c42462dd034", name: '角峰', level: '精二', price: 10, highPrice: false },
        { id: "68480b04d3496c42462dd039", name: '空爆', level: '精一', price: 10, highPrice: false },
        { id: "68480b05d3496c42462dd041", name: '讯使', level: '精一', price: 5, highPrice: false },
        { id: "68480b06c02b652dbc401661", name: '讯使', level: '精二', price: 10, highPrice: false },
        { id: "68480b07b9570274dfd941a5", name: '泡普卡', level: '精一', price: 10, highPrice: false },
        { id: "68480b096993d81fe69cbc6c", name: '梓兰', level: '精一', price: 10, highPrice: false },
        { id: "68480b0ac02b652dbc40167f", name: '推进之王', level: '精一', price: 15, highPrice: false },
        { id: "68480b0bc02b652dbc401686", name: '推进之王', level: '精二', price: 20, highPrice: false },
        { id: "68480b0cd3496c42462dd067", name: '琴柳', level: '精一', price: 20, highPrice: false },
        { id: "68480b0c6993d81fe69cbc87", name: '琴柳', level: '精二', price: 25, highPrice: false },
        { id: "68480b0dc02b652dbc40169b", name: '风笛', level: '精一', price: 15, highPrice: false },
        { id: "68480b0eb9570274dfd941d0", name: '风笛', level: '精二', price: 20, highPrice: false },
        { id: "68480b0fce7fc86fafef50fd", name: '桑葚', level: '精一', price: 45, highPrice: false },
        { id: "68480b11b9570274dfd941de", name: '罗比菈塔', level: '精一', price: 10, highPrice: false },
        { id: "68480b12bf6625518c4aca59", name: '罗比菈塔', level: '精二', price: 15, highPrice: false },
        { id: "68480b13c02b652dbc4016c1", name: '苇草', level: '精一', price: 15, highPrice: false },
        { id: "68480b14ce7fc86fafef511b", name: '苇草', level: '精二', price: 20, highPrice: false },
        { id: "68480b14b9570274dfd941ee", name: '芙蓉', level: '精一', price: 5, highPrice: false },
        { id: "68480b15c02b652dbc4016cd", name: '芙蓉', level: '精二', price: 10, highPrice: false },
        { id: "68480b16c02b652dbc4016d5", name: '炎熔', level: '精一', price: 5, highPrice: false },
        { id: "68480b17c02b652dbc4016d8", name: '炎熔', level: '精二', price: 6, highPrice: false },
        { id: "68480b17d3496c42462dd0b8", name: '菲亚梅塔', level: '精一', price: 40, highPrice: false },
        { id: "68480b18c02b652dbc4016df", name: '菲亚梅塔', level: '精二', price: 45, highPrice: false },
        { id: "68480b19b9570274dfd9420b", name: '异客', level: '精一', price: 40, highPrice: false },
        { id: "68480b1ace7fc86fafef5143", name: '异客', level: '精二', price: 45, highPrice: false },
        { id: "68480b1bd3496c42462dd0cb", name: '见行者', level: '精一', price: 45, highPrice: false },
        { id: "68480b1c6993d81fe69cbcf1", name: '熔泉', level: '精一', price: 5, highPrice: false },
        { id: "68480b1dbf6625518c4aca8e", name: '熔泉', level: '精二', price: 8, highPrice: false },
        { id: "68480b1e6993d81fe69cbcf9", name: '风丸', level: '精一', price: 5, highPrice: false },
        { id: "68480b1fb9570274dfd942b0", name: '风丸', level: '精二', price: 10, highPrice: false },
        { id: "68480b1fbf6625518c4acaa9", name: '安比尔', level: '精一', price: 5, highPrice: false },
        { id: "68480b20ce7fc86fafef51ad", name: '安比尔', level: '精二', price: 10, highPrice: false },
        { id: "68480b21bf6625518c4acab3", name: '安德切尔', level: '精一', price: 5, highPrice: false },
        { id: "68480b226993d81fe69cbd14", name: '安德切尔', level: '精二', price: 10, highPrice: false },
        { id: "68480b23ce7fc86fafef52af", name: '史都华德', level: '精一', price: 5, highPrice: false },
        { id: "68480b23c02b652dbc401720", name: '史都华德', level: '精二', price: 10, highPrice: false },
        { id: "68480b246993d81fe69cbd1e", name: '歌蕾蒂娅', level: '精一', price: 40, highPrice: false },
        { id: "68480b26b9570274dfd942e6", name: '格拉尼', level: '精一', price: 15, highPrice: false },
        { id: "68480b27bf6625518c4acad7", name: '格拉尼', level: '精二', price: 20, highPrice: false },
        { id: "68480b27b9570274dfd942ed", name: '濯尘芙蓉', level: '精一', price: 8, highPrice: false },
        { id: "68480b28c02b652dbc4017f4", name: '濯尘芙蓉', level: '精二', price: 10, highPrice: false },
        { id: "68480b29b9570274dfd942f9", name: '赫默', level: '精一', price: 25, highPrice: false },
        { id: "68480b2ac02b652dbc4018de", name: '赫默', level: '精二', price: 20, highPrice: false },
        { id: "68480b2a6993d81fe69cbd3a", name: '白面鸮', level: '精一', price: 30, highPrice: false },
        { id: "68480b2b6993d81fe69cbd3d", name: '白面鸮', level: '精二', price: 35, highPrice: false },
        { id: "68480b2cd3496c42462dd14f", name: '百炼嘉维尔', level: '精一', price: 15, highPrice: false },
        { id: "68480b2dce7fc86fafef53ae", name: '百炼嘉维尔', level: '精二', price: 20, highPrice: false }
    ]
};

createApp({
    setup() {
        // 玩家状态
        const playerScore = ref(100);
        const opponentScore = ref(100);
        const playerRounds = ref(0);
        const opponentRounds = ref(0);
        const currentRound = ref(1);
        const currentBox = ref(1);
        const playerWins = ref(0);
        const opponentWins = ref(0);
        const gameMode = ref('pve'); // 'pve' 或 'pvp'

        // 卡牌状态
        const playerCard = reactive({});
        const opponentCard = reactive({});
        const cardsDrawn = ref(false);
        const isDrawing = ref(false);

        // 下注状态
        const selectedBet = ref(1);
        const isAllIn = ref(false);
        const availableBets = ref([
            { value: 1, label: "1分" },
            { value: 2, label: "2分" },
            { value: 5, label: "5分" },
            { value: 10, label: "10分" }
        ]);

        // 对战状态
        const playerChoice = ref('');
        const battleResult = ref('');
        const scoreChange = ref('');
        const scoreChangeValue = ref(0);
        const gameOver = ref(false);

        // 历史记录
        const battleHistory = ref([]);

        // 卡牌数据
        const highPriceCards = ref([]);
        const lowPriceCards = ref([]);
        const loading = ref(false);
        const lastUpdated = ref(new Date().toLocaleDateString());
        const apiConnected = ref(false);
        const apiError = ref(null);
        const showCardModal = ref(false);

        // 多抽状态
        const showMultiDrawModal = ref(false);
        const multiDrawResults = ref([]);

        // 排行榜数据
        const leaderboard = ref([
            { name: '玩家', score: 10 },
            { name: '博士A', score: 25 },
            { name: '博士B', score: 18 },
            { name: '博士C', score: 15 },
            { name: '博士D', score: 12 },
            { name: '博士E', score: 8 }
        ]);

        // 计算属性
        const roundProgress = computed(() => {
            return (currentBox.value / 3) * 100;
        });

        const overallProgress = computed(() => {
            return ((currentRound.value - 1) * 3 + currentBox.value) / (25 * 3) * 100;
        });

        const winRate = computed(() => {
            return playerRounds.value > 0 ? Math.round((playerWins.value / playerRounds.value) * 100) : 0;
        });

        const opponentWinRate = computed(() => {
            return opponentRounds.value > 0 ? Math.round((opponentWins.value / opponentRounds.value) * 100) : 0;
        });

        // 方法
        const selectBet = (bet) => {
            selectedBet.value = bet;
            if (isAllIn.value) {
                isAllIn.value = false;
            }
        };

        const selectChoice = (choice) => {
            playerChoice.value = choice;
        };

        const skipRound = () => {
            // 直接进入下一轮
            nextRound();
        };

        // 加载本地备份数据
        const loadBackupData = () => {
            highPriceCards.value = [...backupCardsData.highPriceCards];
            lowPriceCards.value = [...backupCardsData.lowPriceCards];
            lastUpdated.value = '2025-06-10 19:15:01 (本地备份)';
            apiConnected.value = false;
            apiError.value = '使用本地备份数据';
            alert('当前网络异常，已调用本地数据进行替换；若问题持续发生，请检查网络连接是否正常！\n如本地数据价格错误，请您自行查看代码进行修改')
        };

        // 从LeanCloud获取卡片数据
        const fetchCardsFromLeancloud = async () => {
            try {
                loading.value = true;
                apiError.value = null;

                // 检查AV是否已定义
                if (typeof AV === 'undefined') {
                    throw new Error('LeanCloud SDK未加载');
                }

                // 初始化LeanCloud
                AV.init({
                    appId: 'SirRPbPu6n2bM8b0gPA6Vcrp-gzGzoHsz',
                    appKey: 'HbVp8X6q644gFlWDCtj1f2Ql',
                    masterKey: 'ED3qdCcWFjilntVODPPFL5kB',
                    serverURL: 'https://sirrpbpu.lc-cn-n1-shared.com'
                });

                // 创建查询
                const query = new AV.Query('Cards');
                query.limit(1000); // 增加查询限制到1000条

                // 获取所有卡片
                const results = await query.find();

                // 清空现有数据
                highPriceCards.value = [];
                lowPriceCards.value = [];

                // 处理结果
                results.forEach(card => {
                    const cardData = {
                        id: card.id,
                        name: card.get('Name'),
                        level: card.get('level'),
                        price: card.get('price'),
                        highPrice: card.get('highPriceCards')
                    };

                    if (cardData.highPrice) {
                        highPriceCards.value.push(cardData);
                    } else {
                        lowPriceCards.value.push(cardData);
                    }
                });

                apiConnected.value = true;
                lastUpdated.value = new Date().toLocaleString();
                console.log('成功从LeanCloud获取卡片数据');
            } catch (error) {
                console.error('从LeanCloud获取卡片数据失败:', error);
                apiError.value = error.message;
                // 加载本地备份数据
                loadBackupData();
            } finally {
                loading.value = false;
            }
        };

        const drawThreeBoxes = () => {
            if (playerChoice.value === '' || highPriceCards.value.length === 0 || lowPriceCards.value.length === 0) {
                return;
            }

            if (isAllIn.value) {
                alert('ALL IN模式下不能使用多抽功能');
                return;
            }

            if (currentBox.value !== 1) {
                alert('只能在每轮开始时使用多抽功能');
                return;
            }

            multiDrawResults.value = [];

            // 模拟抽3次
            for (let i = 0; i < 3; i++) {
                const basePoints = selectedBet.value;
                playerScore.value -= basePoints;
                playerRounds.value += 1;

                // 获取卡牌
                const playerCard = getRandomCard();
                const opponentCard = getRandomCard();

                // 计算胜负
                const playerWinByHigh = playerChoice.value === '欧' && playerCard.price > opponentCard.price;
                const playerWinByLow = playerChoice.value === '非' && playerCard.price < opponentCard.price;

                let result = '';
                let change = 0;

                if (playerWinByHigh || playerWinByLow) {
                    // 玩家胜利
                    result = '胜利';
                    playerWins.value += 1;

                    // 基础获胜分数
                    change = basePoints * 2;

                    playerScore.value += change;
                } else if (playerCard.price === opponentCard.price) {
                    // 平局
                    result = '平局';
                    playerScore.value += basePoints;
                    change = 0;
                } else {
                    // 玩家失败
                    result = '失败';
                    opponentWins.value += 1;
                    change = -basePoints;
                }

                // 记录结果
                multiDrawResults.value.push({
                    battleResult: result,
                    scoreChange: change >= 0 ? `+${change}分` : `${change}分`,
                    playerCard: playerCard,
                    opponentCard: opponentCard,
                    changeValue: change
                });

                // 更新对手分数
                const opponentChange = Math.floor(Math.random() * 7) - 3;
                opponentScore.value = Math.max(0, opponentScore.value + opponentChange);
                opponentRounds.value += 1;
            }

            // 更新盒子状态
            currentBox.value = 3;

            // 显示结果弹窗
            showMultiDrawModal.value = true;

            // 检查游戏结束
            if (playerScore.value <= 0) {
                setTimeout(() => {
                    gameOver.value = true;
                }, 1500);
            }
        };

        // 随机获取一张卡牌
        const getRandomCard = () => {
            const allCards = [...highPriceCards.value, ...lowPriceCards.value];
            const randomIndex = Math.floor(Math.random() * allCards.length);
            return {...allCards[randomIndex]};
        };

        // 开始对战
        const startBattle = () => {
            if (playerChoice.value === '' || highPriceCards.value.length === 0 || lowPriceCards.value.length === 0) {
                return;
            }

            isDrawing.value = true;

            // 模拟抽卡延迟
            setTimeout(() => {
                // 合并所有卡片
                const allCards = [...highPriceCards.value, ...lowPriceCards.value];

                // 随机选择一张卡牌
                const playerIndex = Math.floor(Math.random() * allCards.length);
                const opponentIndex = Math.floor(Math.random() * allCards.length);

                Object.assign(playerCard, allCards[playerIndex]);
                Object.assign(opponentCard, allCards[opponentIndex]);

                // 扣除投入分数
                const basePoints = isAllIn.value ? playerScore.value : selectedBet.value;
                playerScore.value -= basePoints;
                playerRounds.value += 1;

                cardsDrawn.value = true;
                isDrawing.value = false;

                // 计算胜负
                const playerWinByHigh = playerChoice.value === '欧' && playerCard.price > opponentCard.price;
                const playerWinByLow = playerChoice.value === '非' && playerCard.price < opponentCard.price;

                let result = '';
                let change = 0;

                if (playerWinByHigh || playerWinByLow) {
                    // 玩家胜利
                    result = '胜利';
                    playerWins.value += 1;

                    // 基础获胜分数
                    change = basePoints * 2; // 赢得对手投入的等量分数

                    // ALL IN额外奖励
                    if (isAllIn.value) {
                        const bonus = Math.floor(basePoints * 0.5);
                        change += bonus;
                    }

                    // 第15轮后额外奖励
                    if (currentRound.value >= 15) {
                        const bonus = Math.floor(change * 0.05);
                        change += bonus;
                    }

                    playerScore.value += change;

                    scoreChange.value = `+${change}分`;
                } else if (playerCard.price === opponentCard.price) {
                    // 平局
                    result = '平局';
                    playerScore.value += basePoints; // 返还投入分数
                    scoreChange.value = '0分';
                } else {
                    // 玩家失败
                    result = '失败';
                    opponentWins.value += 1;

                    change = basePoints;
                    scoreChange.value = `-${change}分`;
                }

                battleResult.value = result;
                scoreChangeValue.value = change;

                // 记录历史
                battleHistory.value.unshift({
                    round: currentRound.value,
                    playerCard: {...playerCard},
                    opponentCard: {...opponentCard},
                    choice: playerChoice.value,
                    result: result,
                    scoreChange: change
                });

                // 更新对手分数（模拟其他对战）
                const opponentChange = Math.floor(Math.random() * 7) - 3;
                opponentScore.value = Math.max(0, opponentScore.value + opponentChange);
                opponentRounds.value += 1;

                // 检查游戏结束
                if (playerScore.value <= 0) {
                    setTimeout(() => {
                        gameOver.value = true;
                    }, 1500);
                }
            },800);
        };

        const nextRound = () => {
            // 重置状态
            Object.keys(playerCard).forEach(key => delete playerCard[key]);
            Object.keys(opponentCard).forEach(key => delete opponentCard[key]);

            cardsDrawn.value = false;
            playerChoice.value = '';
            isAllIn.value = false;
            battleResult.value = '';
            scoreChange.value = '';
            selectedBet.value = 1;

            // 更新轮次
            if (currentBox.value < 3) {
                currentBox.value++;
            } else {
                currentBox.value = 1;
                if (currentRound.value < 25) {
                    currentRound.value++;
                }
            }

            // 更新排行榜
            leaderboard.value[0].score = playerScore.value;
            leaderboard.value.sort((a, b) => b.score - a.score);
        };

        const restartGame = () => {
            playerScore.value = 100;
            opponentScore.value = 100;
            playerRounds.value = 0;
            opponentRounds.value = 0;
            currentRound.value = 1;
            currentBox.value = 1;
            playerWins.value = 0;
            opponentWins.value = 0;
            battleHistory.value = [];
            gameOver.value = false;

            // 重置卡片显示
            Object.keys(playerCard).forEach(key => delete playerCard[key]);
            Object.keys(opponentCard).forEach(key => delete opponentCard[key]);

            cardsDrawn.value = false;
            playerChoice.value = '';
            isAllIn.value = false;
            battleResult.value = '';
        };

        // 初始化时获取卡片数据
        onMounted(() => {
            // 尝试从LeanCloud获取数据
            fetchCardsFromLeancloud();
        });

        return {
            playerScore,
            opponentScore,
            playerRounds,
            opponentRounds,
            currentRound,
            currentBox,
            playerCard,
            opponentCard,
            cardsDrawn,
            isDrawing,
            playerChoice,
            isAllIn,
            battleResult,
            scoreChange,
            scoreChangeValue,
            battleHistory,
            highPriceCards,
            lowPriceCards,
            leaderboard,
            roundProgress,
            overallProgress,
            winRate,
            opponentWinRate,
            selectedBet,
            availableBets,
            apiConnected,
            loading,
            lastUpdated,
            gameMode,
            showMultiDrawModal,
            multiDrawResults,
            gameOver,
            apiError,
            showCardModal,
            selectBet,
            selectChoice,
            skipRound,
            startBattle,
            nextRound,
            fetchCardsFromLeancloud,
            drawThreeBoxes,
            restartGame
        };
    }
}).mount('#app');