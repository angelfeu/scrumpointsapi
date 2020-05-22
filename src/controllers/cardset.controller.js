import tbCardSets from '../models/cardset';

export async function getCardSets(req, res) {
    try {
        const cardsets = [];
        const cardsetsall = await tbCardSets.findAll({
            order: [
                ['name', 'ASC'],
                ['ordercard', 'ASC']
            ]
        });
        if (cardsetsall.length > 0) {
            let cards = [];
            let names = '';
            cardsetsall.forEach(async cardset => {
                //if (!cardset.include()) cardset.push(cardset.name);
                if (names !== '' && names !== cardset.name) {
                    cardsets.push({ name: names, cards: cards });
                    cards = [];
                }
                names = cardset.name;
                cards.push(cardset.value);
            });
            if (cards.length > 0) cardsets.push({ name: names, cards: cards });
        }
        res.json({
            data: cardsets
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getOneCardSet(req, res) {
    const { name } = req.params;
    try {
        const cardsets = await tbCardSets.findAll({
            where: {
                name
            },
            order: [
                ['ordercard', 'ASC']
            ]
        });
        res.json({
            data: cardsets
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};