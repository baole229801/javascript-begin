function getTotal(card, price) {
	var discountRate;

	switch (card.tier) {
		case 'bronze':
			discountRate = 0.02;
			break;
		case 'silver':
			discountRate = 0.05;
			break;
		case 'gold':
			discountRate = 0.08;
			break;
		default:
			discountRate = 0.1;
			break; 	 
	}

	return price * (1-discountRate);
};

module.exports = getTotal;